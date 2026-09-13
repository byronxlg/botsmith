# botsmith

botsmith.dev: the company site and service index. Static HTML on GitHub Pages, no build step.
Read [README.md](README.md) for the services and [runbook/](runbook/README.md) for
operations. Registered in `byronxlg/management` as tier 3.

- Services are separate repos: `byronxlg/x402-services` (x402) and
  `byronxlg/botsmith-websites` (websites: client sites, hosting, outreach). Work on a service
  in its repo; this repo only markets them.
- DNS for the botsmith.dev apex, www and mail, and the SES identity behind
  `hello@botsmith.dev`, live in `byronxlg/x402-services` `infra/botsmith.tf`. Change them
  there, through that repo's GitHub Actions apply, never locally.
- Offer terms on `/websites/` (free build, free hosting, domains at cost) are Byron's;
  changing them is his decision, not the operator's.
- No emojis, no em dashes, concise copy.
