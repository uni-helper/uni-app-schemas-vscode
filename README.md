# @uni-helper/uni-app-schemas-vscode

[![License](https://img.shields.io/github/license/uni-helper/uni-app-schemas-vscode)](https://github.com/uni-helper/uni-app-schemas-vscode/blob/main/LICENSE)

[![VSCode](https://vsmarketplacebadge.apphb.com/version-short/uni-helper.uni-app-schemas-vscode.png)](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-app-schemas-vscode)

[![OpenVSX](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2Funi-helper%2Funi-app-schemas-vscode)](https://open-vsx.org/extension/uni-helper/uni-app-schemas-vscode)

[改动日志](https://github.com/uni-helper/uni-app-schemas-vscode/blob/main/CHANGELOG.md)

想让 `uni-app` 开发变得更直观、高效？想要更好的 `uni-app` 开发体验？不妨看看 [uni-helper 主页](https://uni-helper.js.org) 和 [uni-helper GitHub Organization](https://github.com/uni-helper)！

## 插件特性

校验 `uni-app` 中的 `androidPrivacy.json`、`pages.json` 和 `manifest.json` 格式。

**插件和文档的冲突之处，请以文档为准。**

插件源代码在 [uni-helper/uni-app-schemas-vscode](https://github.com/uni-helper/uni-app-schemas-vscode)。欢迎提交 ISSUE 和 PR 改进本插件。

## 使用

安装插件后重启 VSCode 即可。

### 不使用插件

在对应文件的顶部加入 `"$schema"` 字段即可。

`androidPrivacy.json`

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode/schemas/androidPrivacy.json"
}
```

`manifest.json`

> 该文件根据 `@uni-helper/vite-plugin-uni-manifest` 提供的 TypeScript 类型自动生成，0.9.0 起默认使用该文件

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode/schemas/manifest.json"
}
```

`pages.json`

> 该文件根据 `@uni-helper/vite-plugin-uni-pages` 提供的 TypeScript 类型自动生成，0.9.0 起默认使用该文件

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode/schemas/pages.json"
}
```

`manifest_legacy.json`

> 该文件根据官方文档手动整合，0.9.0 前默认使用该文件，不建议再使用

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode/schemas/manifest_legacy.json"
}
```

`pages_legacy.json`

> 该文件根据官方文档手动整合，0.9.0 前默认使用该文件，不建议再使用

```json
{
  "$schema": "https://cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode/schemas/pages_legacy.json"
}
```
