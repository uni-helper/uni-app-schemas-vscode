# @uni-helper/uni-app-schemas-vscode

VSCode extension providing JSON Schema validation for uni-app's `androidPrivacy.json`, `manifest.json`, and `pages.json`. There is no TypeScript/JavaScript source — the extension is `contributes.jsonValidation` wiring in `package.json` plus five schema files; "building" means copying the two generated schemas out of npm packages.

## Project

- **Language/runtime:** no app source code — JSON schemas and configuration only. Dev pins Node 26 via `.node-version` and `devEngines.runtime` (`onFail: warn`); there is no published `engines.node`. The published `engines.vscode: ^1.40.0` is consumer-facing — the minimum VSCode version the extension supports.
- **Toolchain:** npm 12 (pinned via `packageManager` + `devEngines.packageManager`), ultracite (a zero-config Biome preset) for lint/format, concurrently, bumpp (release), @vscode/vsce + ovsx (publish).
- **Artifact:** the VSIX ships `schemas/`, `LICENSE`, `logo.png` (`files` + `icon`). Published to both VSCode Marketplace and OpenVSX under publisher `uni-helper`.

## Commands

```bash
npm install
npm run build     # copy manifest/pages schemas from devDeps into schemas/, then reformat everything via fix
npm run check     # ultracite check — the only validation; there is no test suite and no typecheck
npm run fix       # ultracite fix
npm run release   # build → git add ./schemas/*.json → bumpp --all (version bump, commit, tag, push; the tag triggers .github/workflows/release.yml)
```

CI (`.github/workflows/ci.yml`) runs `vpr check` and `vpr build` via `voidzero-dev/setup-vp` on Node 22/24/26 × ubuntu/macos/windows. The release workflow publishes to both marketplaces (`VSCE_PAT` / `OVSX_PAT` secrets), creates the GitHub Release via changelogithub, and purges the jsDelivr cache for the three current schemas — that purge is how the `$schema` URLs from the README pick up changes.

## Architecture

| File | Provenance | Role |
|---|---|---|
| `schemas/manifest.json` | generated — copied from the `@uni-helper/manifest-json-schema` devDep at build | current `manifest.json` schema (sourced from `@uni-helper/vite-plugin-uni-manifest` types) |
| `schemas/pages.json` | generated — copied from the `@uni-helper/pages-json-schema` devDep at build | current `pages.json` schema (sourced from `@uni-helper/vite-plugin-uni-pages` types) |
| `schemas/androidPrivacy.json` | hand-maintained in this repo | `androidPrivacy.json` schema |
| `schemas/manifest_legacy.json` | hand-maintained | pre-0.9.0 `manifest.json` schema, deprecated |
| `schemas/pages_legacy.json` | hand-maintained | pre-0.9.0 `pages.json` schema, deprecated |

### Behavior notes

- Hand-editing `schemas/manifest.json` or `schemas/pages.json` is pointless — `build` overwrites them. Fix the source schema in the `vite-plugin-uni-manifest` / `vite-plugin-uni-pages` repos (the schemas are published to npm as `@uni-helper/manifest-json-schema` / `@uni-helper/pages-json-schema`) and bump the devDeps here.
- `build` runs `fix` as its last step, so the generated schemas are committed in Biome format; formatting-only diffs in `schemas/*.json` after a build are expected.
- `package.json` → `contributes.jsonValidation` maps the three file names to the bundled schemas. The two legacy schemas are deliberately not wired in — they exist only for users who reference them by URL (see README).
- Only the two generated schemas declare `"$schema": "http://json-schema.org/draft-07/schema#"`; the hand-maintained ones don't carry a dialect declaration.

## Conventions

- **Lint/format:** ultracite (Biome) via `npm run check` / `npm run fix`. `biome.jsonc` only adds the `!banner.svg` exclusion — the hand-drawn SVG must not be reformatted. The committed `.vscode/settings.json` sets Biome as the formatter with format-on-save and organize-imports; `.editorconfig` enforces 2-space indent, LF, UTF-8.
- **Docs language:** README and CONTRIBUTING are Simplified Chinese; schema `description` strings follow the official uni-app docs (Chinese).
- **Branches/commits:** `feat/xxx`, `fix/xxx`, `docs/xxx`; Conventional Commits.
- **Release coupling:** schema changes reach users only through jsDelivr (`cdn.jsdelivr.net/gh/uni-helper/uni-app-schemas-vscode/schemas/*.json`), so nothing changes for users until the next release purges the cache.
