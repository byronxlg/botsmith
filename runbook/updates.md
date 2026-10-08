---
project: botsmith
reviewed: 2026-10-08
---

# Updates

## Changing the site

PR to `byronxlg/botsmith`; the `check` job runs on the PR (local refs, external links, the
x402 price list against the live catalog) and the merge deploys when it is green. Check `/` at
390px and 1366px before merging (`python3 -m http.server` in the checkout, then a browser).

## When the x402 catalog changes

The weekly run (Mondays 20:23 UTC) or the next PR fails with `DRIFT <route>` or `ROUTES:
catalog has N, the price list shows M`. Edit the table in `index.html` (one `<tr>` per route,
`data-route` and `data-price` on the price cell, the method in the `<code>`), and the hero line
if `/polymarket/markets` moved. The suite headings mirror the catalog's suites; a retired suite
loses its `<tbody>`. A route that is new to the catalog is not in the Bazaar until its first
settled payment (x402-services `ensure-indexed`), usually within the hour of its deploy.

## When an external link breaks

The same run prints `BROKEN <code> <url>`. npm pages answer 403 to anything that is not a
browser and are accepted as such; every other non-2xx/3xx fails. Fix the link or drop the
reference; never silence the check for a host.

## Regenerating the launch video

`assets/brag.mp4` and its poster `assets/brag.jpg` come from the `/brag` skill (Hyperframes).
The video was recorded against the 2026-09 page (hero and x402 card); the 2026-10-08 redesign
kept its palette and tagline, so it still reads true, but a re-record would show the new hero.
Run `/brag --tone polished` in this repo; the plan, brief, composition and render land in
`brag/`. Copy `brag/brag.mp4` and `brag/brag.jpg` to `assets/`, commit both with the `brag/`
sources, and keep the mp4 under about 6 MB. The video quotes the site's own copy only; it never
states a price beyond "priced in cents".

## Changing an offer

Prices and terms are Byron's decision. Propose the diff, do not merge it.

