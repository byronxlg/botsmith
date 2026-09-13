---
project: botsmith
reviewed: 2026-09-13
---

# Updates

## Changing the site

PR to `byronxlg/botsmith`, merge when the Pages run is green. Check `/` and `/websites/` at
390px and 1366px before merging; the link-check step in the workflow catches broken local refs.

## Adding a client preview

1. Build the site in a new repo `byronxlg/<name>` from the shorewash pattern (plain HTML, one
   CSS, one JS, FormSubmit form to the client's own address, `noindex` on every page, `CNAME`
   file with `<name>.botsmith.dev`, README that says the site comes down on request).
2. Enable Pages via Actions: `gh api -X POST repos/byronxlg/<name>/pages -f build_type=workflow`.
3. Add `<name>` to `botsmith_client_previews` in x402-services `infra/botsmith.tf`; PR, merge,
   the deploy creates the CNAME.
4. `gh api -X PUT repos/byronxlg/<name>/pages -f cname=<name>.botsmith.dev`, then
   `-F https_enforced=true` once the certificate is issued (a minute or two).
5. Email the owner from hello@botsmith.dev. Keep the email short: link, ask for changes, domain
   options, opt-out line.

## Going live on the client's domain

Change the repo's Pages custom domain to their hostname, walk them through the DNS change at
their registrar, drop the `noindex`, keep the botsmith CNAME as a redirect or remove it from
the list.

## Changing the offer

Prices and terms on `/websites/` are Byron's decision. Propose the diff, do not merge it.
