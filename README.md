# best-resume-ever-creative-react

## 我的简历

基于这个很棒的开源项目：[best resume ever](https://github.com/salomonelli/best-resume-ever)。

基于 React 重新实现项目中我偏好的 Creative 模板。

## 你的简历

### 安装依赖

确保 Node 不低于 18.17 版本。

克隆本仓库到本地，安装依赖：

```bash
yarn
```

### 预览简历

使用如下命令在本机即时预览生成简历的结果：

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

使用如下命令导出简历为 PDF 和 JPEG 格式的文件，可以在 `/exports` 目录下找到导出的结果：

```bash
yarn export
```

### 二次开发

使用如下命令修复代码问题及格式：

```bash
yarn lint
```

如果您使用 VSCode 进行开发，请选择 ESLint（而不是 Prettier）为首选格式化工具。
