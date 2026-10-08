# botsmith

botsmith is Byron's studio. This repo is the company site, https://botsmith.dev/: the landing
page for everything botsmith makes, with a section per product and the ways an agent connects
to the paid one. Plain HTML, one CSS file, one small JS file, one vendored font, no build step.
Deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`; custom
domain `botsmith.dev` (`CNAME`). The same workflow checks every pull request (local refs,
external links, and the x402 price list against the live catalog) and runs weekly.

[![botsmith in 20 seconds](https://botsmith.dev/assets/brag.jpg)](https://botsmith.dev/assets/brag.mp4)

The launch video: an agent calls x402.botsmith.dev, pays USDC on Base, gets the answer.

## Products on the page

| product | what | where | repo |
| --- | --- | --- | --- |
| x402 data services | pay-per-call market signal for agents (x402, USDC on Base); listed in the x402 Bazaar, browsable on [Agentic Market](https://agentic.market/services/x402-botsmith-dev) | x402.botsmith.dev | `byronxlg/x402-services` (private) |
| polymarket-tui | terminal client for Polymarket, open source | polymarket-tui.botsmith.dev | `byronxlg/polymarket-tui` |
| tryai | try AI models in the browser, free | tryai.botsmith.dev | `byronxlg/semantic-similarity-app` (private) |
| skillfold | declarative skill manager for coding agents, open source | skillfold.botsmith.dev | `byronxlg/skillfold` |

Each product is its own repo with its own secrets, Terraform state, deploy identity, runbook and
management registration, and owns only its own records under botsmith.dev. This repo only
markets them: a product's facts (routes, prices, install lines) come from the product, and the
x402 price list is checked against the live catalog by the workflow on every change and weekly.

## Shared infrastructure

- DNS for the botsmith.dev apex, `www`, and mail, plus the SES identity behind
  `hello@botsmith.dev`, live in `byronxlg/x402-services` `infra/botsmith.tf` because that zone
  was first managed there. Change them there, through that repo's GitHub Actions apply. New
  services add their own records from their own state.
- Mail: `hello@botsmith.dev` sends through SES. Inbound is Cloudflare Email Routing on the
  zone, forwarding to Byron's Gmail.
