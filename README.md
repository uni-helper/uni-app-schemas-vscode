<a href="https://github.com/uni-helper/uni-app-schemas-vscode"><img src="https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode@main/banner.svg" alt="banner" width="100%"/></a>

# @uni-helper/uni-app-schemas-vscode

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode@main/logo.svg" alt="logo" width="256" height="256" />
</p>

<p align="center">
  <a href="https://github.com/uni-helper/uni-app-schemas-vscode/stargazers"><img src="https://img.shields.io/github/stars/uni-helper/uni-app-schemas-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="GitHub Stars"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-app-schemas-vscode"><img src="https://vsmarketplacebadges.dev/downloads-short/uni-helper.uni-app-schemas-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="VSCode downloads"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-app-schemas-vscode"><img src="https://vsmarketplacebadges.dev/version-short/uni-helper.uni-app-schemas-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="VSCode version"></a>
  <a href="https://open-vsx.org/extension/uni-helper/uni-app-schemas-vscode"><img src="https://img.shields.io/open-vsx/dt/uni-helper/uni-app-schemas-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="OpenVSX downloads"></a>
  <a href="https://open-vsx.org/extension/uni-helper/uni-app-schemas-vscode"><img src="https://img.shields.io/open-vsx/v/uni-helper/uni-app-schemas-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="OpenVSX version"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/uni-helper/uni-app-schemas-vscode?colorA=005947&colorB=eee&style=for-the-badge" alt="License"></a>
</p>
<p align="center">
  <a href="https://github.com/ModyQyW"><img src="https://img.shields.io/badge/Author%20%26%20Maintainer-ModyQyW-blue?style=for-the-badge" alt="Author & Maintainer"></a>
</p>

为 [uni-app](https://uniapp.dcloud.net.cn/) 项目提供 `androidPrivacy.json`、`manifest.json` 和 `pages.json` 的 JSON Schema 校验。

不想看文档？直接问 AI 🤖 <a href="https://deepwiki.com/uni-helper/uni-app-schemas-vscode"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>

> **请考虑持续[赞助](https://github.com/ModyQyW/sponsors)以维持该项目的持续健康发展，非常感谢！🙏**

[改动日志](https://github.com/uni-helper/uni-app-schemas-vscode/blob/main/CHANGELOG.md)

## 插件特性

校验 `uni-app` 中的 `androidPrivacy.json`、`pages.json` 和 `manifest.json` 格式。

**插件和官方文档的冲突之处，请以官方文档为准。**

## 使用

安装插件后重启 VSCode 即可。如果不使用插件，可以手动在对应文件的顶部加入 `"$schema"` 字段。

> 由于网络原因，`cdn.jsdelivr.net` 可能不可用，请手动更换成 `jsd.cdn.zzko.cn`、`cdn.jsdelivr.us`、`gcore.jsdelivr.net`、`testingcf.jsdelivr.net` 等地址，或直接引用 GitHub 源文件地址。

`androidPrivacy.json`

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode/schemas/androidPrivacy.json"
}
```

`manifest.json`

> 该文件根据 `@uni-helper/vite-plugin-uni-manifest` 提供的 TypeScript 类型自动生成，本插件 v0.9.0 起默认使用该文件

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode/schemas/manifest.json"
}
```

`pages.json`

> 该文件根据 `@uni-helper/vite-plugin-uni-pages` 提供的 TypeScript 类型自动生成，本插件 v0.9.0 起默认使用该文件

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode/schemas/pages.json"
}
```

`manifest_legacy.json`

> 该文件根据官方文档手动整合，本插件 v0.9.0 前默认使用该文件，不建议再使用

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode/schemas/manifest_legacy.json"
}
```

`pages_legacy.json`

> 该文件根据官方文档手动整合，本插件 v0.9.0 前默认使用该文件，不建议再使用

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode/schemas/pages_legacy.json"
}
```

## 许可证

[MIT](./LICENSE) © 2020-present [uni-helper](https://github.com/uni-helper)
