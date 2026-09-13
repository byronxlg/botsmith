# Recovery

## The site is down or stale

1. `gh run list -R byronxlg/botsmith --limit 3`. A failed run: `gh run view <id> --log-failed`;
   the link check step is the usual culprit (a page references a file that does not exist).
   Fix in a PR, merge, the push redeploys.
2. Pages settings: `gh api repos/byronxlg/botsmith/pages` should show `cname: botsmith.dev`,
   `https_enforced: true`, `build_type: workflow`. Restore with
   `gh api -X PUT repos/byronxlg/botsmith/pages -f cname=botsmith.dev -F https_enforced=true`.
3. DNS: H4 in health.md. If the apex records are gone, they are recreated by the x402-services
   deploy workflow (push to its `main`, or `gh workflow run deploy.yml -R byronxlg/x402-services`).
   Never add them by hand in the Cloudflare dashboard.

## A client preview 404s

Same three steps against `byronxlg/<name>`; the CNAME for `<name>.botsmith.dev` must be in
`botsmith_client_previews` in x402-services `infra/botsmith.tf` and the repo's Pages custom
domain set to that name.

## hello@botsmith.dev does not send

H5. Sending is `aws sesv2 send-email --from-email-address "Byron at botsmith <hello@botsmith.dev>"`
under Doppler `global/home` credentials, region ap-southeast-2. If the identity is unverified,
the DKIM CNAMEs are missing from the zone: rerun the x402-services deploy. The account has
production access; a sandbox error means the account changed, escalate.

## Replies to hello@botsmith.dev bounce

Inbound is Cloudflare Email Routing (MX on the apex). The CI token is DNS-only, so routing is
enabled in the Cloudflare dashboard (Email > Email Routing > enable, route `hello@botsmith.dev`
to Byron's Gmail, accept the MX/SPF records it adds). Until it exists, outbound mail carries
`Reply-To: byron.lg.smith@gmail.com`.
