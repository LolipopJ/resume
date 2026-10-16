# best-resume-ever-creative-react

## 我的简历

基于开源项目 [best resume ever](https://github.com/salomonelli/best-resume-ever)，使用 React + Next.js 重新实现其中我喜欢的 [Creative](https://salomonelli.github.io/best-resume-ever/#/resume/creative) 模板。

## 你的简历

### 安装依赖

使用 Node.js 22.22.1 或更新版本，推荐与 CI 一致使用 Node.js 24。项目基于 Next.js 16 和 React 19。

克隆本仓库到本地，安装依赖：

```bash
pnpm install
```

### 预览简历

在本机即时预览简历：

```bash
pnpm run serve
```

### 修改简历信息

修改 `/configs/resume.json` 中的简历信息。普通值由所有语言共用；仅包含 `en`、`zh` 键的对象表示不同语言的值，读取页面时会递归选择当前语言。例如：

```json
{
  "contact": {
    "github": "LolipopJ",
    "region": {
      "en": "China",
      "zh": "中国"
    }
  }
}
```

中英文页面的 `contact.github` 均为 `LolipopJ`；英文页面的 `contact.region` 为 `China`，中文页面为 `中国`。

数组中的字段也使用相同规则，例如 `experience`、`projects` 中的描述。也可以将整个对象或数组放入 `en`、`zh` 中，以提供不同的内容或条目数量。语言对象必须包含所需语言的值；缺失时会报错，不会回退到另一种语言。页面预览和导出使用同一解析逻辑，`lang` 由当前页面语言自动设置，无需写入配置。

### 导出简历

导出简历为 PDF 和 JPEG 格式的文件：

```bash
pnpm run export
```

可以在 `/exports` 目录下找到导出的结果。

### 构建打包

构建供生产环境使用：

```bash
pnpm run build
```

构建的结果存放在 `/out` 目录下，可直接部署到静态托管服务。

运行生产构建和浏览器回归测试：

```bash
pnpm test
```

测试使用项目已有的 Puppeteer，验证静态页面的语言切换、主题偏好和 PDF 导出。

### 二次开发

检查代码质量：

```bash
pnpm run lint
```

Next.js 16 的构建不再运行 ESLint；CI 会分别执行 lint 和生产构建及浏览器测试。
