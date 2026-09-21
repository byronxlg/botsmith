---
project: botsmith
reviewed: 2026-09-21
---

# Dependencies

| dependency | used for | failure looks like | fallback |
| --- | --- | --- | --- |
| GitHub Pages + Actions | hosting and deploy | 404 or stale content | none needed; redeploy |
| Cloudflare DNS (botsmith.dev zone) | apex, www, mail records | NXDOMAIN, cert errors | x402-services deploy recreates records |
| Amazon SES ap-southeast-2 | sending as hello@botsmith.dev | `MessageRejected` | send from Byron's Gmail with the botsmith signature |
| Cloudflare Email Routing | inbound to hello@, forwarded to Byron's Gmail (x402-services `infra/botsmith.tf`) | bounces | Reply-To Byron's Gmail on outbound mail |
| x402-services repo CI | the only path that changes botsmith DNS | plan fails | fix there; DNS records persist meanwhile |
