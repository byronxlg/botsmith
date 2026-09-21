# Hyperframes Composition Brief: botsmith

## Objective
Create a short launch-style brag video for botsmith and its live x402 service.

## Output
- Composition directory: `brag/composition/`
- Rendered video: `brag/brag.mp4`
- Format: landscape - 1920x1080
- Duration: 20 seconds

## Source Material
- Project root: the botsmith repo (index.html, assets/site.css, README.md); x402-services README
  and the live catalog at https://x402.botsmith.dev/catalog for route names
- Product name: botsmith; service: x402 data services at x402.botsmith.dev
- Tagline / strongest claim: "Small, sharp software."
- Key UI or visual moment to recreate: the site hero and the x402 product card; the 402 exchange
- Copy that must appear verbatim:
  - AUCKLAND, NEW ZEALAND
  - Small, sharp software.
  - What botsmith runs
  - x402 data services
  - Pay-per-call data endpoints for AI agents, priced in cents.
  - No accounts, no API keys, no subscriptions.
  - botsmith.dev
- Must not appear: any dollar price or the 402 `amount` field (prices are Byron's and change);
  wallet addresses; the Lambda hostname.

## Creative Direction
- Tone preset: polished
- Creative direction: quiet studio product film in the site's own palette
- Interpretation: 4 scenes, holds over motion, soft 0.6 s crossfades, nothing aggressive
- Angle: the studio is the frame, the x402 service is the thing an agent can buy today
- Hook: the site hero, "Small, sharp software." landing on the cream background
- Outro / punchline: "No accounts, no API keys, no subscriptions." then botsmith.dev
- Avoid: generic SaaS language, abstract filler, any redesign of the site's look

## Visual Identity
- Background: #f7f5f0 / #efebe3
- Text: #141516 / #4b4f55
- Accent: #0f5c4e
- Display font: system sans (system-ui)
- Body font: system sans; mono for kickers and the terminal (ui-monospace)
- Visual references: header dot wordmark, hero kicker style, .products card, 12 px radii,
  #d9d3c7 hairlines

## Storyboard
Use the storyboard in `brag/brag-plan.md` as the creative contract.

1. Hero - 4 s - wordmark, kicker, "Small, sharp software."
2. What botsmith runs - 4.8 s - the x402 product card, x402.botsmith.dev
3. The exchange - 8.4 s - three short lines left, terminal exchange right, line by line
4. Outro - 2.8 s - "No accounts, no API keys, no subscriptions." / botsmith / botsmith.dev

## Audio
- Audio role: warm bed, sparse accents
- Audio arc: fade in under hero, sparse cues on reveals, bell on the 200, bong on the wordmark,
  fade out over the last 1.5 s
- Music: assets/music/happy-beats-business-moves-vol-12-by-ende-dot-app.mp3
- Music treatment: volume 0.32, automation lane fade in 0.6 s and fade out from 18.5 s
- Music cue guidance: bundled preset (109.96 BPM); lock scene 3 start to 8.74 and the outro
  wordmark to 17.47; exchange lines on 10.37 / 11.46 / 12.55 / 13.64
- Audio-reactive treatment: subtle; RMS drives a soft green glow behind the dot and the panel
  shadow (data pre-extracted to assets/audio-data.js, 30 fps, 600 frames)
- Audio-coupled moments: headline land, card land, four exchange lines, wordmark
- SFX selection guidance: low HF risk only (click_003, drop_001, impactSoft_medium_001, bong_001)
- Exact SFX choice: chosen after the animation exists, listed in index.html
- Audio files: copied into `brag/composition/assets/`

## Hyperframes Instructions
Follow hyperframes-core for the composition contract, hyperframes-animation for motion,
hyperframes-creative for audio-reactive sampling, hyperframes-cli for check and render.
Requirements: real site copy on screen, all text readable (WCAG AA), 20 s total, music and SFX
present, `npx hyperframes check` passes before render.
