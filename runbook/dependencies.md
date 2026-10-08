---
project: botsmith
reviewed: 2026-10-08
---

# Dependencies

| dependency | used for | failure looks like | fallback |
| --- | --- | --- | --- |
| GitHub Pages + Actions | hosting and deploy | 404 or stale content | none needed; redeploy |
| Cloudflare DNS (botsmith.dev zone) | apex, www, mail records | NXDOMAIN, cert errors | x402-services deploy recreates records |
| Amazon SES ap-southeast-2 | sending as hello@botsmith.dev | `MessageRejected` | send from Byron's Gmail with the botsmith signature |
| Cloudflare Email Routing | inbound to hello@, forwarded to Byron's Gmail (x402-services `infra/botsmith.tf`) | bounces | Reply-To Byron's Gmail on outbound mail |
| x402-services repo CI | the only path that changes botsmith DNS | plan fails | fix there; DNS records persist meanwhile |
| x402.botsmith.dev `/catalog` | the price-drift check in `pages.yml` reads it | the check job fails with a curl error, so a PR cannot merge and the weekly run is red while x402 is down | the site itself is unaffected; wait for x402 (its own runbook), then re-run |
| Product sites (polymarket-tui.botsmith.dev, tryai, byronxlg.com/skillfold, agentic.market, npm, PyPI, GitHub) | link targets | `BROKEN <code> <url>` in the check | fix the link in a PR |
