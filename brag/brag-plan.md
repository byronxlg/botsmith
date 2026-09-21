# Brag Plan: botsmith

## What is this app?
botsmith is Byron Smith's Auckland studio; its one live service is x402.botsmith.dev, pay-per-call
market-signal APIs that an AI agent buys with USDC on Base, no account and no API key.

## The angle
The studio is the frame, the service is the thing you can buy from an agent today. Show the real
HTTP exchange: an agent calls, gets a 402, pays, gets the answer. Nothing abstract.

## Hook (first 2-3 seconds)
The site's own hero on its own cream background: green dot, "botsmith", kicker
"AUCKLAND, NEW ZEALAND", then "Small, sharp software." lands and holds.

## Key moments (the middle)
- The x402 product card from botsmith.dev, verbatim: "x402 data services / Pay-per-call data
  endpoints for AI agents, priced in cents."
- The exchange, line by line in a terminal panel: `GET /polymarket/markets`, `402 Payment Required`
  with the real `accepts` shape (scheme exact, network eip155:8453, asset USD Coin), the payment
  line, `200 OK` with JSON.
- The real catalog routes, four of them, one per line.

## Outro / punchline
"No accounts, no API keys, no subscriptions." (x402-services README) then botsmith.dev.

## User flow worth showing
Agent requests a route -> receives 402 with price terms -> signs a USDC payment authorization and
retries -> receives the JSON. This is the centrepiece scene.

## Tone
- Preset: polished
- Creative direction: quiet studio product film, the site's own palette and copy
- Interpretation: 4 scenes, long holds, soft crossfades, restrained motion, no shouting

## Format: landscape - 1920x1080
## Duration: 20 s

## Visual identity (from the project)
- Background: #f7f5f0 (alt sections #efebe3)
- Accent: #0f5c4e (hover #0b4a3f, soft #dcebe6)
- Text: #141516 (secondary #4b4f55, lines #d9d3c7)
- Display font: system sans (site uses -apple-system / Segoe UI / Roboto stack)
- Body font: same; mono for kickers and code (ui-monospace stack)
- Strongest visual element: the hero (kicker + h1 + dot wordmark) and the product card grid

## Prices
botsmith.dev says only "priced in cents"; the video quotes that and nothing more specific.
Route prices change and are Byron's, so no dollar amounts appear on screen. The 402 exchange is
shown without the amount field for the same reason.

## Share copy (draft)
Introducing botsmith: small, sharp software from Auckland. x402.botsmith.dev sells market signal
to AI agents per call, USDC on Base, no account and no API key.

## Audio direction
- Role: warm bed, sparse professional accents
- Music: happy-beats-business-moves-vol-12-by-ende-dot-app.mp3 (steady, clean; the polished pick)
- Music treatment: start at 0, volume 0.32, 0.6 s fade in, fade to 0 over the last 1.5 s
- Music cue guidance: preset read (109.96 BPM). Strong cues 8.74 s (scene 3 start) and 17.47 s
  (outro wordmark). Beat grid for the exchange lines: 10.37, 11.46, 12.55, 13.64 (every other
  beat, so each line holds about 1.1 s before the next)
- Audio-reactive treatment: subtle; music RMS breathes a soft green glow behind the wordmark dot
  and the terminal panel's shadow. No waveform or equalizer visuals
- SFX posture: sparse, 4-5 cues, low HF risk files only, volume 0.5-0.65
- Audio-coupled moments: h1 landing, product card arrival, each exchange line, final wordmark
- Restraint rule: no per-character typing sounds, nothing louder than the music bed

## Storyboard

### Scene 1 - Hero - 4 s (0.0-4.0)
Cream background. Dot + "botsmith" wordmark top-left as on the site header. Kicker
"AUCKLAND, NEW ZEALAND" fades up, then "Small, sharp software." rises in and holds 2.5 s.
Sequential/interaction: kicker then headline, none simulated
Audio intent: quiet confidence
Audio-coupled idea: one soft impact when the headline lands
Music: bed fades in
Transition mood: soft crossfade -> Scene 2

### Scene 2 - What botsmith runs - 4.8 s (4.0-8.8)
Alt background (#efebe3). Heading "What botsmith runs". The site's x402 product card slides up:
"x402 data services" + "Pay-per-call data endpoints for AI agents, priced in cents." Below it a
mono line "x402.botsmith.dev". Holds 3 s.
Sequential/interaction: heading then card
Audio intent: the reveal, still calm
Audio-coupled idea: a soft drop when the card lands
Transition mood: soft crossfade -> Scene 3 (lands on strong cue 8.74)

### Scene 3 - The exchange - 8.4 s (8.8-17.2)
Cream background. Left: three short lines, one at a time: "An agent calls." / "It pays USDC on
Base." / "It gets the answer." Right: a dark terminal panel where the exchange arrives line by
line on the beat grid: request, 402 with accepts block, payment line, 200 OK with a JSON snippet.
Each line holds at least 1.1 s; the full panel holds 2 s at the end.
Sequential/interaction: yes, four exchange lines arrive one by one
Audio intent: things happening, still restrained
Audio-coupled idea: a click on the request, a drop on the 402, a click on the pay, a soft bell on
the 200
Transition mood: soft crossfade -> Scene 4 (wordmark on strong cue 17.47)

### Scene 4 - Outro - 2.8 s (17.2-20.0)
Cream background. Wordmark "botsmith" large and centred, "botsmith.dev" in mono beneath,
"No accounts, no API keys, no subscriptions." above it. Music fades out under it.
Sequential/interaction: none
Audio intent: settle and stop
Audio-coupled idea: one warm bong on the wordmark
Transition mood: hold to end

**Music mood for this video:** steady and clean
**Audio summary:** bed fades in under the hero, four sparse cues follow the visuals, one bell
on the 200, a bong on the wordmark, bed fades out over the last 1.5 s.
