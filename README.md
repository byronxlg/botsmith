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

## Request form

Posts to FormSubmit for `hello@botsmith.dev` (delivered through Email Routing to Byron's
Gmail). The first submission sends an activation email that must be clicked; after activation
swap the address in `websites/index.html` for FormSubmit's hashed endpoint so it stays out of
the page source.

## Example

`assets/shorewash.webp` is a screenshot of https://shorewash.botsmith.dev/.
