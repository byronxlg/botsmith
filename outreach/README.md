# Outreach: how the websites service finds customers

The offer is free, so the only cost to a prospect is attention. The flow is built around
showing, not telling: the first email carries a finished preview of their own site. This
file is the operating procedure; `templates.md` has the emails; `prospects.md` is the
tracker.

## Who we approach

An owner-operated NZ service business whose site is doing them harm: a free builder
subdomain (`*.wixsite.com`, `*.weebly.com`, `*.godaddysites.com`, `sites.google.com`),
not usable on a phone, a builder banner, copyright three or more years old, or no site at all
but a Facebook page. They must have a public email address on the site or their Facebook
page; a phone number alone is not enough to make contact. Prefer trades and property
services (lawns, cleaning, painting, plumbing, mechanics, groomers): the page shape is
known, the rebuild takes an hour, and they buy on phone calls, which a fast mobile page
produces.

Skip: franchises, anyone whose Companies Register entry is Removed, sites updated this year,
businesses that already run a paid site on their own domain unless it is clearly broken.

Finding them: search `site:wixsite.com` with a region and a trade, and the same for the
other builders; NZ trade directories (Yellow, NoCowboys, Builderscrack) list free-builder
sites in their links; Google Business Profiles with a "website" that is a builder subdomain.
Record every candidate in `prospects.md` even if skipped, with the reason, so the next
search does not repeat the work.

## Consent

NZ's Unsolicited Electronic Messages Act 2007 allows commercial email under deemed consent
when the address is conspicuously published by the business and the message is relevant to
its business. Every email therefore: goes to an address published on the business's own
site or page, is about their website, identifies botsmith and Byron with a working reply
address, and carries a one-line opt-out that is honoured the same day. One first email,
at most two follow-ups, then stop. Never buy or scrape lists.

## The steps

1. Find and qualify (above). Add a row to `prospects.md` at stage `found`.
2. Build the preview: `runbook/updates.md` "Adding a client preview". Facts only from
   their site, Facebook page or the Companies Register; drafted copy marked in the README.
   Stage `preview`.
3. Send the first email (`templates.md` T1) from hello@botsmith.dev the same day the
   preview is on its `<name>.botsmith.dev` host, Bcc Byron. Stage `emailed`, with the date.
4. Day 4, no reply: T2 follow-up, one line. Stage `followed-up`.
5. Day 14, no reply: T3 close-out, which says the preview comes down after 30 days.
   Stage `closed-no-reply`. The preview stays until day 30, then the repo is archived and
   the CNAME removed from x402-services `infra/botsmith.tf`.
6. Any reply: answer within one working day.
   - Changes: make them, redeploy, reply with what changed. Stage `changes`.
   - Domain they own: T4 with the exact records for their registrar. Stage `go-live`.
   - Domain they want us to buy: no registrar path yet (management G48); the operator sends a
     NEED line to Byron and tells the client it is a day or two away.
   - "No thanks": T5, delete the repo and the CNAME the same day. Stage `declined`.
7. Live on their domain: drop `noindex`, add them to the examples on `/websites/` with
   their permission, ask for a testimonial and a referral (T6). Stage `live`.

Dates and the follow-up schedule live in `prospects.md` and, for the operator, in the
management repo's `state/due.md` so a tick picks them up.

## Channels beyond cold email

In order of expected return, to be tried only once the cold-email loop has data (a reply
rate over ten sends):

1. Referrals from live clients. Every go-live email asks for one name (T6). Free, warm.
2. The clients' own sites carry "Website by botsmith" in the footer, linking to
   `/websites/`. Grows with every site, costs nothing.
3. Facebook community groups (suburb "noticeboard" and "recommendations" groups) where
   owners ask for tradies: a post showing a before/after is on-topic. Needs Byron's account,
   so it is his call and his post; the operator drafts it.
4. A Google Business Profile for botsmith (free, needs Byron's Google account) so
   "website design Auckland free" searches find the offer.
5. Search: `/websites/` already has the structured data and copy for "free website NZ small
   business". Submitting the sitemap in Search Console needs Byron's Google account.

Paid channels are off the table until something is charged for.

## What we measure

Per batch in `prospects.md`: sent, replied, changes requested, live, declined. The service is
working when one in five previews reaches `changes` or better. If ten sends produce no reply,
the email or the targeting is wrong; change one thing (subject line, trade, region) and send
ten more before trying another channel.
