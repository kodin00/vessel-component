# Vessel

An interactive biomechanical interface lab built with vanilla HTML, CSS, and JavaScript. Original AI-generated PNG artwork supplies the command surfaces, frame, and environment. There is no framework or build dependency.

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

Generated asset paths and the exact production prompts are in [docs/art-direction.md](docs/art-direction.md).
