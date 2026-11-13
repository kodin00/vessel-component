# Circular vessel seal

Generated with the built-in image-generation tool. Original PNG assets are saved in `dist/assets/round-button.png`, `dist/assets/round-button-hover.png`, and `dist/assets/round-button-pressed.png`. Smaller WebP derivatives are exported with `scripts/prepare-assets.py`. The existing generated `logo-skull.webp` supplies the emblem in the middle.

## Behavior and use

The circular button appears in the laboratory at `#round-buttons`, with 176px standard, 88px compact, and 56px micro variants (172px standard on narrow screens). All three are native keyboard-accessible toggle buttons, synchronized with the existing Awaken vessel command. The base ring is stationary in every state. Generated hover and pressed images are clipped to the central plate; only the plate and emblem depress. Reduced motion disables the transitions and release pulse.

Markup: `dist/index.html`, styling: `dist/round-button.css`, behavior: the `syncRoundButtons` function and shared press handling in `dist/app.js`. To use a different logo, change the `src` on `.round-button__emblem`; the generated frame and plate do not need to change.

## Exact generation prompts

### Normal state

Style references: the existing capsule button and circular medallion. Output: `dist/assets/round-button.png`.

Use case: stylized-concept. Asset type: one production-ready circular biomechanical website button, a round version of the provided capsule button. Input image 1 is a STYLE REFERENCE only (the existing capsule button). Input image 2 is a STYLE REFERENCE only (a circular medallion). Generate a NEW, more precise circular command button: a perfectly round ring of sculpted aged silver bone, black titanium, finely ribbed alien tubing and etched vertebral clamps, surrounding a large smooth concave very dark charcoal circular metal plate. Orthographic front view, no perspective. Symmetrical, exquisite realistic 3D material, elegant, legible at 120 pixels. Ring outer diameter is 90% of square canvas, center exactly 50%/50%, with equal 5% transparent margin on every side; central circular plate diameter is exactly 64% of canvas, leaving substantial sculptural stationary outer rim. Use the capsule button's thin hooked bones and coiled conduits rather than large wild spikes. The center is empty and dark for a separately overlaid skull logo. Neutral pewter highlights, deep blacks, no amber lighting in normal state. No text, no logo, no symbols, no lights, no flare, no detached highlight or dot anywhere. Genuine transparent background outside the circular button; the interior plate is opaque. Single isolated component, not a UI mockup.

### round-button-hover

Edit target: the newly generated normal state. Output: `dist/assets/round-button-hover.png`.

Use case: lighting-weather. Input image is the EDIT TARGET: the normal-state round biomechanical button. Make its hover-state image. Preserve EXACTLY the canvas size, outline, circular geometry, every sculpted rim detail, alignment, surface texture and transparent outside. Change ONLY the circular inner plate, inside radius 32% of the full canvas around exact center: a refined thin amber-orange nerve light ignites around its inner circumference, reflecting warm amber onto the empty black metal plate. The fixed outer bone/titanium frame and ribbed conduits stay unchanged and unlit. Keep the center dark, empty and usable for a separately layered skull emblem. No text, no logo, no dots, no lens flare, no detached light, no extra object. Maintain genuine transparent outside. One asset identical in composition to the reference.

### round-button-pressed

Edit target: the newly generated normal state. Output: `dist/assets/round-button-pressed.png`.

Use case: precise-object-edit. Input image is the EDIT TARGET: the normal-state round biomechanical button. Make its fully pressed-state image. Preserve EXACTLY the canvas size, outline, circular geometry, every sculpted outer rim detail, alignment, and transparent outside. The outer metal frame must not change at all. Change ONLY the circular inner plate, inside radius 32% of the full canvas around exact center: the dark circular plate looks physically recessed deeper, with a deeper shadow at its upper inside edge and a vivid thin warm amber-orange illuminated inner crescent along the lower circumference. Reflected amber light grazes the dark metal center; keep that center empty for a separate skull logo. No text, no logo, no detached highlight, no dot, no flare, no extra object. One asset, exactly matching reference composition, genuine transparent outside.

