# EDS Studio Grind

A public build journal for Edge Delivery Studio, a native macOS workspace for Adobe Edge Delivery Services.

- Preview: https://main--eds-studio-grind--somarc.aem.page/
- Live: https://main--eds-studio-grind--somarc.aem.live/ (separate content publication)
- Content: `somarc/eds-studio-grind` in DA
- Visual and block contracts: [DIRECTION.md](DIRECTION.md)

This repository contains implementation code, not the DA-authored journal. The native app is a separate project. Creating this journal through DA CLI does not imply the native app has an operational tool integration.

## Work locally

```sh
npm ci
npm run lint
da --org somarc --repo eds-studio-grind --branch main --qmd site pin-target --org somarc --repo eds-studio-grind --branch main
da --qmd workspace show --format json
aem up --no-open --url https://main--eds-studio-grind--somarc.aem.page
```

Resolve the external production workspace before authoring. Its `paths.contentRoot` holds local working content; its typed plan/report/proof paths hold operational evidence. Do not commit these to source Git. To inspect unpublished local HTML, use the installed AEM CLI's explicit local HTML options with that external content root.

## Evidence discipline

Use explicit root `--qmd` on operational DA invocations and a shared `DA_RUN_CORRELATION_ID` for a coherent episode. Preserve failures as well as successes. Check the typed command result and QMD publication/index state separately; some released receipts are less detailed than their primary result. Never turn off journaling to make a run look clean.

Use dry-run/preflight before remote mutation, verify code delivery before referencing new blocks, and keep Preview and Live as separate actions. Keep raw receipts private; public journal entries are curated observations, not automatic bug reports or full transcript exports.

## Source boundaries

No application build step or runtime dependencies. `scripts/aem.js` stays vendored and unchanged. The Apache-licensed AEM boilerplate supplies the delivery runtime. Site metadata, content, navigation, and footer are authored in DA; Configuration Service owns the content mapping.
