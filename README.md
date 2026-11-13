# Vessel

An interactive biomechanical interface lab built with vanilla HTML, CSS, and JavaScript. Twenty-four original generated artworks supply the buttons and interaction states, frames, sliders, switches, spinner, cursor, click effects, inputs, tabs, icons, seals, and environment. There is no framework or runtime build dependency.

## Run locally

```sh
cd /Users/kodin/Documents/selfproj/giger/vessel
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173. All interactions run locally in the browser. Google Fonts supplies Cormorant Garamond, with Georgia as the offline fallback.

## Interactions

- Awaken or return the vessel to stasis.
- Send signals with visual notifications and an updated feed.
- Switch between three viewpoints of one generated cathedral artwork.
- Tune luminance and audio resonance; change surface treatment.
- Enable organic motion and the neural scan.
- Inspect artwork in a keyboard-accessible dialog; download the original PNG.
- Search specimens, change chambers, and expand information panels.
- Enable optional synthesized ambient audio. Audio starts only after a click.
- Reset the controls to their initial state.
- Hold a command button to depress it. Hover lights its conduits amber; release pulses its generated pressed artwork.
- Run, cancel, and restart a six-second local neural sequence with an animated generated loading ring and a progress channel.
- Try the generated cursor, its pressed state, and the expanding click artwork in the contact-response pad.
- Check and uncheck containment seals.

Generated asset paths and the exact production prompts are in [docs/art-direction.md](docs/art-direction.md).

The expanded 21-asset prompt set and interaction details are in [docs/expanded-assets.md](docs/expanded-assets.md). Original PNGs stay in `dist/assets/`; the page uses smaller WebP derivatives. To regenerate derivatives after changing artwork:

```sh
uv run --with pillow python scripts/prepare-assets.py
```
