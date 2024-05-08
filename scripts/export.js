const puppeteer = require("puppeteer");
const { request } = require("http");
const path = require("path");
const { existsSync, mkdirSync } = require("fs");
const { interval, lastValueFrom } = require("rxjs");
const { filter, first, mergeMap } = require("rxjs/operators");

const CONFIG = require("../configs/export-config.json");
const {
  DEV_PORT,
  EXPORT_SCREENSHOT_WIDTH,
  EXPORT_SCREENSHOT_HEIGHT,
  EXPORT_PDF_WIDTH,
  EXPORT_PDF_HEIGHT,
} = CONFIG;

const PORT = DEV_PORT || 3000;

const DEFAULT_SCREENSHOT_WIDTH = EXPORT_SCREENSHOT_WIDTH || 1600;
const DEFAULT_SCREENSHOT_HEIGHT = EXPORT_SCREENSHOT_HEIGHT || 1000;
const DEFAULT_PDF_WIDTH = EXPORT_PDF_WIDTH || 1600;
const DEFAULT_PDF_HEIGHT = EXPORT_PDF_HEIGHT || 1000;

const fetchServeResponse = () => {
  return new Promise((res, rej) => {
    try {
      const req = request(`http://localhost:${PORT}/`, (response) =>
        res(response.statusCode),
      );
      req.on("error", (err) => rej(err));
      req.end();
    } catch (err) {
      rej(err);
    }
  });
};

const waitForServerReady = () => {
  return interval(1000).pipe(
    mergeMap(async () => {
      try {
        const statusCode = await fetchServeResponse();
        if (statusCode === 200) {
          return true;
        }
        return false;
      } catch (err) {
        return false;
      }
    }),
    filter((ok) => !!ok),
  );
};

const exportResumes = async function () {
  await lastValueFrom(waitForServerReady().pipe(first()));

  console.log("Connected to server ...");
  console.log("Exporting ...");

  try {
    const savePath = path.join(__dirname, "../exports/");

    if (!existsSync(savePath)) {
      mkdirSync(savePath);
    }

    const exportResume = async function ({
      code = "zh",
      screenshotFullPage = true,
      screenshotQuality = 100,
      autoFitPdf = true,
    }) {
      const filename = `resume-${code}`;
      const codeUpperCase = code.toUpperCase();
      const url = `http://localhost:${PORT}/?lang=${code}&theme=light&mode=export`;
      console.log(`Export resume: ${url} ...`);

      const screenshotWidth =
        CONFIG[`EXPORT_SCREENSHOT_WIDTH_${codeUpperCase}`] ||
        DEFAULT_SCREENSHOT_WIDTH;
      const screenshotHeight =
        CONFIG[`EXPORT_SCREENSHOT_HEIGHT_${codeUpperCase}`] ||
        DEFAULT_SCREENSHOT_HEIGHT;

      const browser = await puppeteer.launch({
        args: ["--no-sandbox"],
        defaultViewport: {
          width: screenshotWidth,
          height: screenshotHeight,
        },
      });

      const page = await browser.newPage();

      await page.goto(url, {
        waitUntil: "networkidle0",
      });

      await page.screenshot({
        path: `${savePath}${filename}.jpeg`,
        fullPage: screenshotFullPage,
        quality: screenshotQuality,
      });

      const pdfWidth =
        CONFIG[`EXPORT_PDF_WIDTH_${codeUpperCase}`] || DEFAULT_PDF_WIDTH;
      const pdfHeight = autoFitPdf
        ? await page.evaluate(() => {
            const body = document.body,
              html = document.documentElement;

            const pageHeight = Math.max(
              body.scrollHeight,
              body.offsetHeight,
              html.clientHeight,
              html.scrollHeight,
              html.offsetHeight,
            );

            return pageHeight + 10;
          })
        : CONFIG[`EXPORT_PDF_HEIGHT_${codeUpperCase}`] || DEFAULT_PDF_HEIGHT;

      console.log(
        `Resume screenshot is exported to: ${savePath}${filename}.jpeg`,
      );

      await page.pdf({
        path: `${savePath}${filename}.pdf`,
        width: pdfWidth,
        height: pdfHeight,
        printBackground: true,
      });

      console.log(`Resume PDF is exported to: ${savePath}${filename}.pdf`);

      await browser.close();
    };

    await exportResume({
      code: "zh",
    });

    await exportResume({
      code: "en",
    });
  } catch (err) {
    console.log("Export failed.");
    throw new Error(err);
  }

  console.log("Finished exports.");
};

exportResumes();
