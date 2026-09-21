---
project: botsmith
tier: 3
owner: byron
lifecycle: production
reviewed: 2026-09-21
---

# botsmith runbook

botsmith.dev is a static marketing site for Byron's studio and its free website-rebuild
offer for NZ small businesses. If it stops, nothing else stops: prospects cannot read the offer
or submit the request form. Tier 3 - no data, rebuilt from the repo in one push.

## Where it runs

GitHub Pages, deployed by `.github/workflows/pages.yml` on every push to `main`. DNS (apex
A/AAAA to GitHub, `www`) and the SES sender identity for `hello@botsmith.dev` are managed in
`byronxlg/x402-services` `infra/botsmith.tf`. Inbound mail for the domain is Cloudflare Email
Routing on the botsmith.dev zone.

## Objectives

| id | symptom | target | check |
| --- | --- | --- | --- |
| H1 | https://botsmith.dev/ serves the company site | 200 within 7 days of a break | `bin/fleet health` URL probe |

## Files

- [health.md](health.md) - what to check and what healthy looks like.
- [recovery.md](recovery.md) - Pages, DNS, mail.
- [dependencies.md](dependencies.md) - GitHub Pages, Cloudflare, SES.
- [updates.md](updates.md) - how to change the site.
- [incidents/](incidents/) - one file per incident.
