import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { simpleGit } from 'simple-git';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const readmePath = resolve(root, 'README.md');

const readme = `# @uni-helper/uni-app-schemas-vscode

[![License](https://img.shields.io/github/license/uni-helper/uni-app-schemas-vscode)](https://github.com/uni-helper/uni-app-schemas-vscode/blob/main/LICENSE)

[![VSCode](https://vsmarketplacebadge.apphb.com/version-short/uni-helper.uni-app-schemas-vscode.png)](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-app-schemas-vscode)

[![OpenVSX](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=OpenVSX&query=%24.version&url=https%3A%2F%2Fopen-vsx.org%2Fapi%2Funi-helper%2Funi-app-schemas-vscode)](https://open-vsx.org/extension/uni-helper/uni-app-schemas-vscode)

[改动日志](https://github.com/uni-helper/uni-app-schemas-vscode/blob/main/CHANGELOG.md)

## 插件特性

校验 \`uni-app\` 中的 \`androidPrivacy.json\`、\`pages.json\` 和 \`manifest.json\` 格式。

**插件和文档的冲突之处，请以文档为准。**

插件源代码在 [uni-helper/uni-app-schemas-vscode](https://github.com/uni-helper/uni-app-schemas-vscode)。欢迎提交 ISSUE 和 PR 改进本插件。

## 使用

安装插件后重启 VSCode 即可。


### 不使用插件

在对应文件的顶部加入 \`"$schema"\` 字段即可。

\`androidPrivacy.json\`

\`\`\`json
{
  "$schema": "https://raw.githubusercontent.com/uni-helper/uni-app-schemas-vscode/main/schemas/androidPrivacy.json"
}
\`\`\`

\`manifest.json\`

\`\`\`json
{
  "$schema": "https://raw.githubusercontent.com/uni-helper/uni-app-schemas-vscode/main/schemas/manifest.json"
}
\`\`\`

\`pages.json\`

\`\`\`json
{
  "$schema": "https://raw.githubusercontent.com/uni-helper/uni-app-schemas-vscode/main/schemas/pages.json"
}
\`\`\`

## 额外推荐

请查看 [uni-helper 插件说明](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-helper-vscode)。
`;

writeFileSync(readmePath, readme);

await simpleGit().add(readmePath);
