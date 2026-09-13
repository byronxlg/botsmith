---
project: botsmith
reviewed: 2026-09-13
---

# Health

| id | check | healthy | where |
| --- | --- | --- | --- |
| H1 | `curl -sI https://botsmith.dev/websites/` | 200, `content-type: text/html` | anywhere |
| H2 | `curl -sI https://shorewash.botsmith.dev/` (and each preview) | 200 | anywhere |
| H3 | `gh run list -R byronxlg/botsmith --limit 1` | last Pages run `success` | GitHub |
| H4 | `dig +short botsmith.dev A` | the four GitHub Pages IPs 185.199.108-111.153 | anywhere |
| H5 | `aws sesv2 get-email-identity --email-identity botsmith.dev --region ap-southeast-2` | `VerifiedForSendingStatus: true`, DKIM `SUCCESS` | read-only, Doppler global |
| H6 | `_dmarc.botsmith.dev` TXT | `v=DMARC1; p=none;` | anywhere |

Healthy is silent. A failed Pages run or a non-200 on H1 is the only thing worth a message.
