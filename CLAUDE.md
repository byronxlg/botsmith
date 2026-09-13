# botsmith

botsmith.dev: the brand site and the "websites for NZ small businesses" offer. Static HTML on
GitHub Pages, no build step. Read [README.md](README.md) for the service pipeline and
[runbook/](runbook/README.md) for operations. Registered in `byronxlg/management` as tier 3.

- DNS for botsmith.dev and every `<name>.botsmith.dev` preview, and the SES identity behind
  `hello@botsmith.dev`, live in `byronxlg/x402-services` `infra/botsmith.tf`. Change them there,
  through that repo's GitHub Actions apply, never locally.
- Client preview sites are their own repos (`byronxlg/<name>`), built from the shorewash pattern,
  with `noindex` until they are on the client's domain. Facts on those sites come from the
  client's existing site or the Companies Register; drafted process/FAQ copy is marked as such
  in each README and checked by the owner before go-live.
- Offer terms (free build, free hosting, domains at cost) are Byron's; changing them is his
  decision, not the operator's.
- No emojis, no em dashes, concise copy.
