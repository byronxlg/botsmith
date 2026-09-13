# Email templates

All from `Byron at botsmith <hello@botsmith.dev>`, Bcc Byron, plain text, no attachments,
no tracking. `[name]` is the owner's first name if published, otherwise the business name.
Send with `aws sesv2 send-email` under Doppler `global/home` (botsmith `runbook/recovery.md` H5).

## T1: first email, preview attached

Subject: A rebuilt website for [Business], free

Hi [name],

I build websites for small NZ businesses under botsmith, a small Auckland studio. I came
across your [Wix] site and rebuilt it as a modern, phone-first version using your own
services, photos and service area:

https://[name].botsmith.dev/

It is a preview only, hidden from search, and nothing changes for you unless you want it
to. If you would like it: the build, hosting and any changes are free, and I can point a
domain at it, your own if you have one or a new .co.nz at the registrar's cost (about
NZ$30 to NZ$50 a year, nothing on top). Reply with anything you want changed, as rough as
you like.

If you would rather I take it down, reply "no thanks" and it is gone the same day, and I
will not email again.

Byron
botsmith, Auckland
hello@botsmith.dev
https://botsmith.dev/websites/

## T2: day 4 follow-up

Subject: Re: A rebuilt website for [Business], free

Hi [name], did the preview come through? https://[name].botsmith.dev/ . Happy to change
anything, or take it down if it is not useful. Byron

## T3: day 14 close-out

Subject: Re: A rebuilt website for [Business], free

Hi [name], last note from me. The preview at https://[name].botsmith.dev/ stays up for
another two weeks in case it is useful, then comes down. If you want it at any point,
reply and it is yours, free. Byron

## T4: domain cutover

Subject: Re: [Business] website: going live on [domain]

Hi [name], to put the new site on [domain]:

At [registrar], in DNS settings, add these records (replace any existing A or CNAME on the
same names):

  A     @    185.199.108.153
  A     @    185.199.109.153
  A     @    185.199.110.153
  A     @    185.199.111.153
  CNAME www  byronxlg.github.io

Your email is not affected: MX records stay as they are. Tell me when it is done (or send
me a screenshot of the page and I will check it), and the site is live within the hour
with a certificate. If you would rather I did it with you on a call, say when suits.

Byron

## T5: decline

Subject: Re: A rebuilt website for [Business], free

No problem, [name]. The preview is down and you will not hear from me again. All the best
with the business. Byron

## T6: live, testimonial and referral

Subject: [Business] is live

Hi [name], https://[domain]/ is live. Google will pick it up over the next week or two.
Changes are free, just email them through.

Two small asks, take or leave: a sentence I can quote on botsmith.dev about the experience,
and if you know one other business owner whose site could use the same treatment, their
name. Free for them too.

Byron
