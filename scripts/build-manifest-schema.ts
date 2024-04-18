import { rmSync, writeFileSync } from 'node:fs';
import tsj from 'ts-json-schema-generator';

const sourceFileContent = `import { type ManifestConfig as MC } from '@uni-helper/vite-plugin-uni-manifest';
export interface ManifestConfig extends MC {}`;
const sourceFile = './manifest.ts';
const targetFile = './schemas/manifest.json';

writeFileSync(sourceFile, sourceFileContent);

const config: tsj.Config = {
  path: sourceFile,
  tsconfig: './tsconfig.json',
  type: '*',
};

const schema = tsj.createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(
  schema,
  (key, value) => (key === 'required' ? undefined : value),
  2,
);

writeFileSync(targetFile, schemaString);
rmSync(sourceFile);
