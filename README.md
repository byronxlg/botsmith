# botsmith

botsmith is Byron's studio. This repo is the company site, https://botsmith.dev/, and the
index of what the company runs. Plain HTML, one CSS file, one small JS file, no build step.
Deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`; custom
domain `botsmith.dev` (`CNAME`).

## Services

| service | what | repo |
| --- | --- | --- |
| x402 | pay-per-request APIs for agents (x402, USDC on Base) at x402.botsmith.dev | `byronxlg/x402-services` |

Each service is its own repo with its own Doppler project, Terraform state, deploy identity,
runbook and management registration, and owns only its own records under botsmith.dev.

## Shared infrastructure

- DNS for the botsmith.dev apex, `www`, and mail, plus the SES identity behind
  `hello@botsmith.dev`, live in `byronxlg/x402-services` `infra/botsmith.tf` because that zone
  was first managed there. Change them there, through that repo's GitHub Actions apply. New
  services add their own records from their own state.
- Mail: `hello@botsmith.dev` sends through SES. Inbound is Cloudflare Email Routing on the
  zone, forwarding to Byron's Gmail.

## Retired services

- websites (free rebuilds and hosting for NZ small businesses, `byronxlg/botsmith-websites`):
  shut down 2026-09-21 at Byron's request, repo archived. The `/websites/` offer page and its
  FormSubmit request form went with it; if a form is ever needed again, put the naked
  `hello@botsmith.dev` address in the `action`, submit once, click the activation link that
  arrives, then swap in the hash from that email.
