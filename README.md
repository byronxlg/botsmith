# botsmith.dev

The botsmith brand site and the "websites for NZ small businesses" offer. Plain HTML, one
CSS file, one small JS file, no build step. Deployed to GitHub Pages by
`.github/workflows/pages.yml` on every push to `main`; custom domain `botsmith.dev`
(`CNAME`), DNS managed in `byronxlg/x402-services` `infra/botsmith.tf`.

## The websites service

- Offer: free rebuild and hosting for owner-operated NZ businesses with dated sites. Domain
  registration at cost if they need one. No contract. Upsells later.
- Pipeline: request (form or hello@botsmith.dev) -> build in a new repo `byronxlg/<name>`
  from the shorewash pattern -> preview at `<name>.botsmith.dev` (add the name to
  `botsmith_client_previews` in x402-services `infra/botsmith.tf`, set the Pages custom
  domain on the repo) -> client edits -> cut their domain over.
- Previews self-mark `noindex` on github.io hosts; a client preview should carry
  `<meta name="robots" content="noindex">` until it is on the client's own domain.
- Mail: `hello@botsmith.dev` sends through SES (identity in x402-services infra). Inbound
  is Cloudflare Email Routing on the botsmith.dev zone, forwarding to Byron's Gmail.

## Outreach

How prospects are found, contacted and followed up: [outreach/README.md](outreach/README.md).
Email templates in `outreach/templates.md`, the tracker in `outreach/prospects.md`.

## Request form

Posts to FormSubmit's hashed endpoint for `hello@botsmith.dev` (activated 2026-09-13;
submissions arrive through Email Routing in Byron's Gmail). If the form ever needs a new
address: put the naked address in the `action`, submit once, click the activation link that
arrives, then swap in the hash from that email.

## Example

`assets/shorewash.webp` is a screenshot of https://shorewash.botsmith.dev/.
