# best-resume-ever-creative-react

## 我的简历

基于开源项目 [best resume ever](https://github.com/salomonelli/best-resume-ever)，使用 React + Next.js 重新实现其中我喜欢的 [Creative](https://salomonelli.github.io/best-resume-ever/#/resume/creative) 模板。

## 你的简历

### 安装依赖

确保 Node 不低于 18.17 版本。

克隆本仓库到本地，安装依赖：

```bash
yarn
```

### 预览简历

在本机即时预览简历：

```bash
yarn serve
```

### 修改简历信息

修改 `/configs` 中的简历信息。

其中 `resume-base.yml` 存放公用信息，在使用 `resume-zh.yml` 或 `resume-en.yml` 生成不同语言的简历页面时，自动合并为完整的内容。例如：

```yml
# resume-base.yml
experience:
- timeperiod: 2022.02 - 2022.04
  website: https://www.company-homepage.com
  internship: true

# data-en.yml
experience:
- company: Company Name
  position: Your position
  description: What do you do here?

# 将合并为
experience:
- timeperiod: 2022.02 - 2022.04
  website: https://www.company-homepage.com
  internship: true
  company: Company Name
  position: Your position
  description: What do you do here?
```

### 导出简历

导出简历为 PDF 和 JPEG 格式的文件：

```bash
yarn export
```

可以在 `/exports` 目录下找到导出的结果。

### 构建打包

构建供生产环境使用：

```bash
yarn build
```

构建的结果存放在 `/dist` 目录下。

### 二次开发

修复代码质量与格式问题：

```bash
yarn lint
```

在开发时，请选择 ESLint（而不是 Prettier）为首选格式化工具。
