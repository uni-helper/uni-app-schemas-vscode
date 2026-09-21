# 参与贡献

感谢你对 `@uni-helper/uni-app-schemas-vscode` 的关注！本文档将帮助你快速了解项目结构、本地开发流程、测试方式和提交规范。

## 前置条件

- Node.js 26（项目通过 `.node-version` 和 `devEngines.runtime` 固定）
- npm 12（项目已通过 `packageManager` 和 `devEngines.packageManager` 固定版本）
- Git（用于克隆与版本管理）

## 仓库结构

```
uni-app-schemas-vscode/
├── schemas/
│   ├── manifest.json          # manifest.json 校验规则，构建时从 @uni-helper/manifest-json-schema 复制生成，勿手改
│   ├── pages.json             # pages.json 校验规则，构建时从 @uni-helper/pages-json-schema 复制生成，勿手改
│   ├── androidPrivacy.json    # androidPrivacy.json 校验规则，手动维护
│   ├── manifest_legacy.json   # v0.9.0 前的 manifest.json 校验规则，手动维护，已不建议使用
│   └── pages_legacy.json      # v0.9.0 前的 pages.json 校验规则，手动维护，已不建议使用
├── .github/workflows/         # CI 与发布流程
├── package.json               # 插件清单，contributes.jsonValidation 把三个文件名映射到对应的 schema
└── ...
```

本插件没有 TypeScript/JavaScript 源码，校验能力完全由 VSCode 原生的 JSON Schema 支持提供：`package.json` 的 `contributes.jsonValidation` 声明文件名到 schema 的映射，VSCode 负责剩下的工作。

## 本地开发

```bash
# 1. 安装依赖
npm install

# 2. 生成 schema（从 node_modules 复制 manifest/pages 两份 schema，并统一格式）
npm run build
```

修改 `manifest.json` 或 `pages.json` 的校验规则需要到 [`vite-plugin-uni-manifest`](https://github.com/uni-helper/vite-plugin-uni-manifest) / [`vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) 仓库进行（两份 schema 以 `@uni-helper/manifest-json-schema` / `@uni-helper/pages-json-schema` 包发布），更新本仓库的对应 devDependencies 后重新构建即可。

## 测试与检查

本仓库没有自动化测试和类型检查（没有 TS/JS 源码），提交前请执行：

```bash
npm run check   # ultracite check（底层是 Biome），检查代码规范与格式
npm run fix     # 自动修复可修复的问题
npm run build   # 确认 schema 可以正常生成
```

### 测试说明

- `schemas/manifest.json` 和 `schemas/pages.json` 由构建从 npm 包复制生成，手改会被覆盖。
- `schemas/androidPrivacy.json`、`schemas/manifest_legacy.json` 和 `schemas/pages_legacy.json` 为手动维护，可以直接修改。
- schema 的改动要等版本发布、jsDelivr 缓存刷新后才会对用户生效。

## 提交规范

1. Fork 本仓库并克隆到本地。
2. 基于 `main` 创建功能分支：`feat/xxx`、`fix/xxx`、`docs/xxx` 等。
3. 保持提交信息清晰，可采用 [Conventional Commits](https://www.conventionalcommits.org/) 格式（如 `fix: 修正 androidPrivacy.json 的字段描述`）。
4. 提交前执行：
   ```bash
   npm run check
   npm run build
   ```
5. 推送到远端后发起 Pull Request，描述改动内容与关联 Issue。

## Pull Request 指南

- 保持 PR 范围聚焦，一次只解决一个问题。
- 涉及 `manifest.json` / `pages.json` 校验规则的改动，请先确认应该落在 `@uni-helper/manifest-json-schema` / `@uni-helper/pages-json-schema` 仓库还是本仓库。
- 确保 CI 通过（CI 会在 Node 22/24/26 × Linux/macOS/Windows 上执行 check 和 build）。
- 如需讨论方案，可在 Issue 中先行沟通。

## 发布

维护者运行 `npm run release`：构建并暂存 schema 变更后，由 [bumpp](https://github.com/antfu/bumpp) 提升版本、打 tag 并推送；tag 推送会触发 Release workflow，发布到 VSCode Marketplace 和 OpenVSX，创建 GitHub Release，并刷新 jsDelivr 缓存。

## 行为准则

参与本项目请遵守 [组织级行为准则](https://github.com/uni-helper/.github/blob/main/CODE_OF_CONDUCT.md)。

感谢你的贡献！如有疑问，欢迎在 [GitHub Issues](https://github.com/uni-helper/uni-app-schemas-vscode/issues) 中提问。
