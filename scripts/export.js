const puppeteer = require("puppeteer");
const http = require("http");
const path = require("path");
const fs = require("fs");

const config = require("../config");
const port = config.DEV_PORT || 8088;

// Note: SCREENSHOT_WIDTH and SCREENSHOT_HEIGHT will be used as browser viewport.
const defaultScreenshotWidth = config.EXPORT_SCREENSHOT_WIDTH || 1600;
const defaultScreenshotHeight = config.EXPORT_SCREENSHOT_HEIGHT || 1000;
const defaultPdfWidth = config.EXPORT_PDF_WIDTH || 1600;
const defaultPdfHeight = config.EXPORT_PDF_HEIGHT || 1000;

const { interval, lastValueFrom } = require("rxjs");
const { filter, first, mergeMap } = require("rxjs/operators");

const fetchServeResponse = () => {
  return new Promise((res, rej) => {
    try {
      const req = http.request(`http://localhost:${port}/`, (response) =>
        res(response.statusCode)
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
    filter((ok) => !!ok)
  );
};

const convert = async function () {
  await lastValueFrom(waitForServerReady().pipe(first()));

  console.log("Connected to server ...");
  console.log("Exporting ...");

  try {
    const savePath = path.join(__dirname, "../export/");

    if (!fs.existsSync(savePath)) {
      fs.mkdirSync(savePath);
    }

    const exportResume = async function ({
      code = "cn",
      screenshotFullPage = true,
      screenshotQuality = 100,
      autoFitPdf = true,
    }) {
      const filename = `resume-${code}`;
      const codeUpperCase = code.toUpperCase();
      const url = `http://localhost:${port}/#/${code}?exportMode=true`;
      console.log(`Export resume: ${url} ...`);

      const screenshotWidth =
        config[`EXPORT_SCREENSHOT_WIDTH_${codeUpperCase}`] ||
        defaultScreenshotWidth;
      const screenshotHeight =
        config[`EXPORT_SCREENSHOT_HEIGHT_${codeUpperCase}`] ||
        defaultScreenshotHeight;

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
        config[`EXPORT_PDF_WIDTH_${codeUpperCase}`] || defaultPdfWidth;
      const pdfHeight = autoFitPdf
        ? await page.evaluate(() => {
            const body = document.body,
              html = document.documentElement;

            const pageHeight = Math.max(
              body.scrollHeight,
              body.offsetHeight,
              html.clientHeight,
              html.scrollHeight,
              html.offsetHeight
            );

            return pageHeight + 10;
          })
        : config[`EXPORT_PDF_HEIGHT_${codeUpperCase}`] || defaultPdfHeight;

      console.log(
        `Resume screenshot is exported to: ${savePath}${filename}.jpeg`
      );

      await page.pdf({
        path: `${savePath}${filename}.pdf`,
        width: pdfWidth,
        height: pdfHeight,
      });

      console.log(`Resume PDF is exported to: ${savePath}${filename}.pdf`);

      await browser.close();
    };

    await exportResume({
      code: "cn",
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

convert();
