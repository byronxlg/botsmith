# botsmith

botsmith.dev: the company site and service index. Static HTML on GitHub Pages, no build step.
Read [README.md](README.md) for the services and [runbook/](runbook/README.md) for
operations. Registered in `byronxlg/management` as tier 3.

- Products are separate repos: `byronxlg/x402-services` (x402), `byronxlg/polymarket-tui`,
  `byronxlg/semantic-similarity-app` (tryai), `byronxlg/skillfold`. Work on a product in its
  repo; this repo only markets them. Product cards link to the product's own page, never to raw
  JSON or source.
- The x402 price list in `index.html` is data: every price sits in a `data-route` /
  `data-price` pair and `pages.yml` fails when one disagrees with the live catalog or when the
  catalog has more routes than the list. A catalog change means a one-line PR here.
- Palette and the "Small, sharp software." tagline are shared with the launch video in `brag/`;
  change them together or re-record.
- DNS for the botsmith.dev apex, www and mail, and the SES identity behind
  `hello@botsmith.dev`, live in `byronxlg/x402-services` `infra/botsmith.tf`. Change them
  there, through that repo's GitHub Actions apply, never locally.
- Offer terms and prices are Byron's; changing them is his decision, not the operator's.
- No emojis, no em dashes, concise copy.
