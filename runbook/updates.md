---
project: botsmith
reviewed: 2026-09-21
---

# Updates

## Changing the site

PR to `byronxlg/botsmith`, merge when the Pages run is green. Check `/` at
390px and 1366px before merging; the link-check step in the workflow catches broken local refs.

## Regenerating the launch video

`assets/brag.mp4` and its poster `assets/brag.jpg` come from the `/brag` skill (Hyperframes).
Run `/brag --tone polished` in this repo; the plan, brief, composition and render land in
`brag/`. Copy `brag/brag.mp4` and `brag/brag.jpg` to `assets/`, commit both with the `brag/`
sources, and keep the mp4 under about 6 MB. The video quotes the site's own copy only; it never
states a price beyond "priced in cents". The x402-services README links the same poster and mp4.

## Changing an offer

Prices and terms are Byron's decision. Propose the diff, do not merge it.

The websites service and its `/websites/` page were shut down 2026-09-21; see README.md.
