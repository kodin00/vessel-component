# Expanded generated interface assets

The revision adds 21 generated artworks to the three original assets (24 total). Generation used the built-in image-generation tool. All original PNG files are preserved in `dist/assets/`. Smaller WebP derivatives are served by the website; their dimensions and export settings are in `scripts/prepare-assets.py`. The generation tool supplied transparent backgrounds; export preserves alpha.

Native HTML supplies labels, semantics, keyboard behavior and hit targets. Artwork supplies the sculptural surfaces, frames, iconography, cursor, loading ring and particle effect. CSS composes and animates these images; it does not illustrate the mechanisms.

## Interaction behavior

- Command buttons keep the original generated outer frame fixed in every state. Generated amber hover and pressed artwork is clipped to the inner plate, excluding a stray highlight outside the pressed asset. Only the plate and label depress on pointer/keyboard press. Release triggers an inner nerve pulse; activation keeps the inner plate warm. Tabs and icon sockets also keep their frames fixed while their content depresses.
- Slider rails and thumbs are separate generated images on native range inputs.
- Switch housings and actuators are separate generated images. Actuators slide and rotate with a warm light when enabled.
- A generated loading ring rotates during a six-second local neural sequence with actual start, cancel, completion and restart states. The progress channel uses the generated rail.
- The generated cursor swaps artwork while pressed. The generated impact ornament expands and fades after contact. Touch controls use the same click feedback without replacing the system cursor.
- Input frames, tabs, icon sockets, arrows, magnifier, audio emitter, skull emblem, divider, notification frame, checkbox frames and checkmarks are generated.
- Reduced motion removes ambient rotation and click-burst motion. Native controls retain keyboard support and focus indicators.

## Original generation prompts

### slider-rail

Output: `dist/assets/slider-rail.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Extra wide horizontal 3:1 composition. A narrow straight recessed slider rail, spine-like silver outer casing with coiled mechanical tubes along the edges and a pitch-black flat empty channel running from left to right. Small sculpted end caps. Rail occupies nearly the whole width and height, no wasted padding, no slider knob. Detail must remain legible when rendered 230px wide by 22px tall.

### slider-knob

Output: `dist/assets/slider-knob.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. One circular slider thumb: a small polished amber glass orb seated inside an intricately sculpted dark skeletal titanium socket, delicate four ribbed claws holding its edge. Pale luminous amber center, no symbols. View directly from front, isolated with 6% transparent margin. Designed for a 32px diameter control.

### switch-housing

Output: `dist/assets/switch-housing.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Extra wide horizontal 3:1 composition. One small empty horizontal mechanical toggle switch housing. A smoothly rounded capsule, dark pewter bone rim encased in ribbed alien tendons, deep black recessed central channel running left to right. At each end a subtle circular socket for a moving actuator. NO knob, no lever, no letters, no lights. Use the entire canvas with tiny transparent margin. Will render 62px wide and 25px tall.

### switch-actuator

Output: `dist/assets/switch-actuator.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. One circular thumb actuator for a small mechanical toggle switch: smoked ivory pearl with a warm amber pinpoint core, silver ribbed clamp ring, three delicate bone hooks. Beautiful intricate alien mechanism. Centered front-on. Transparent 6% padding. No letters or symbols. Must stay legible when rendered 23px across.

### loader-ring

Output: `dist/assets/loader-ring.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. ONE circular mechanical loading ring made from alien vertebrae, thin ribbed cables, bone hooks and finely toothed blackened titanium. Entire inside of the ring is TRANSPARENT and outside is transparent too. Ring centered, occupies 88% of canvas, narrow annulus, most of the interior empty. Uneven segments with three luminous amber nerve nodes clustered near one edge, and asymmetrical darker opposite edge, so rotational motion will be visible. No central object, no text.

### cursor-arrow

Output: `dist/assets/cursor-arrow.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. ONE sharp arrow mouse cursor, arrow points to the upper left corner at 45 degrees, exactly like a normal computer pointer with sharp tip near canvas top left and stem going toward bottom right. Cursor sculpted from polished bone and dark biomechanical titanium, thin silver edge, ribbed details, hollow black cutouts, very legible silhouette on black. Transparent canvas. Arrow fills 75% with 8% margin. No text, no extra object.

### click-burst

Output: `dist/assets/click-burst.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. ONE circular radial click-impact ornament: an airy ring of 12 sharp alien silver bone spines radiating from an EMPTY TRANSPARENT center, warm amber sparks at the inner ends, intricate ribbed metal fragments, dark cables. This is an isolated graphic intended to scale outward and fade on a mouse click. Entire center and all outside the individual spines are transparent. Thin and refined. No background or shading behind it.

### input-frame

Output: `dist/assets/input-frame.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Wide horizontal 3:1 composition. ONE wide short rectangular empty search-input frame. Slender silver alien vertebral pipes form a low-profile mostly straight rectangle with dark metal rounded corners, a tiny skull embedded in the LEFT edge and intricate tubing at right corners. Entire central interior and outside frame transparent. Inner border occupies at most 10% of image height. No icon, no text. Usable when stretched to 380px wide and 48px tall.

### tab-plate

Output: `dist/assets/tab-plate.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Wide horizontal 3:1 composition. ONE compact empty mechanical tab plate, an elongated dark concave rectangular metal plaque with chamfered corners. Delicate ornate silver bone rim, dense tiny ribbed hoses integrated at both ends, small central amber slit at the very bottom edge. Center 75% empty dark brushed metal for live webpage text. Shallow and precise. No skull or text. Tiny transparent margin.

### medallion

Output: `dist/assets/medallion.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. ONE small circular biomechanical icon button: complex silver ring of alien vertebrae, ribbed titanium tubes, four bony clamps; center is an empty dark concave matte black circular plate, completely blank so an HTML icon can be placed over it. Clear strong edge highlight. Centered with 4% transparent padding, no text or symbols.

### notification-frame

Output: `dist/assets/notification-frame.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Wide horizontal 3:1 composition. ONE empty biomechanical notification panel frame. Thin blackened silver metal rectangular outline, ribbed tubes at corners and elongated tiny alien skull integrated into left edge. Full center dark charcoal scratched metal empty for HTML text. Warm amber nerve node integrated in top left corner. Restrained, finely detailed, short horizontal plaque. Transparent outside. No text or icons.

### divider-spine

Output: `dist/assets/divider-spine.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Extra wide horizontal 3:1 composition. ONE long thin horizontal ornamental divider formed from an articulated alien titanium spine, tapering to needle tips at both ends; a small elongated metallic alien skull at the exact center with lateral ribs growing into the spine. All mostly confined to the central 25% of image height with transparent padding above/below. Tarnished silver edge highlights, no background, no text.

### search-icon

Output: `dist/assets/search-icon.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. ONE magnifying glass icon sculpted from silver biomechanical bone: thin hollow circular lens rim made from tiny ribbed vertebrae, handle extending diagonally lower right formed of a short skeletal joint, transparent center. Legible symbolic silhouette. Not a photographic prop, a polished realistic game icon. Centered at 85% canvas. No text.

### arrow-icon

Output: `dist/assets/arrow-icon.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. ONE right-pointing chevron arrowhead forged from ridged alien bone and polished silver titanium, hollow triangle cutouts, elegant thin sharp silhouette, mechanical nerve cable on inner edge. Direction RIGHT. Centered at 78% canvas. Isolated on transparent. No other symbols.

### sound-icon

Output: `dist/assets/sound-icon.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. ONE front-facing alien mechanical sound emitter icon: three vertical segmented bone-metal spines of different heights, each tipped with a tiny dim amber node. Audio waveform recognizable silhouette, centered, elegant and narrow with ribbed cable details. No enclosing frame, no text. Transparent.

### checkbox-frame

Output: `dist/assets/checkbox-frame.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. ONE empty square biomechanical checkbox frame. Four corners made from interlocking alien silver bones, sides ribbed with fine conduits, small chamfered corners. Entire central square interior TRANSPARENT and all exterior transparent. Bright fine silver edges, no checkmark. Centered occupies 88% of canvas. A usable 26px game UI checkbox asset.

### checkmark

Output: `dist/assets/checkmark.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. ONE isolated checkmark forged from smooth pale bone and blackened silver metal, three tiny warm amber nerve lights embedded in the long upper arm, refined 3D polished finish, normal recognizable check shape, centered with 15% transparent margin. No box or circle, no text.

### logo-skull

Output: `dist/assets/logo-skull.png`

Use case: stylized-concept. Production asset for a H. R. Giger inspired biomechanical website. Match dark aged pewter, black titanium, skeletal bone ridges, ribbed cables, realistic sculptural 3D relief, intricately etched silver edges. Orthographic straight-on view. Isolated on genuine transparent background; preserve alpha. No words, letters, watermark, or UI mockup. This must be a SINGLE usable component image, not a screenshot or a collection. Square composition. ONE front-facing elongated alien skull emblem with mechanical ribbed tubes emerging symmetrically from the temples and curling down around the cheekbones. Sculpted pewter silver and ivory bone, black hollow eyes, etched scratches, elegant elongated narrow jaw. Very high detail, strong pale edge highlights. Transparent background; centered with 6% padding, no text.

## Edited state prompts

### button-hover

Reference: `dist/assets/button.png` (edit target, preserving geometry).

Output: `dist/assets/button-hover.png`

Use case: precise-object-edit. This reference is the exact normal-state web button. Produce its HOVER state for a sprite overlay. Preserve the identical outline, framing, aspect ratio, metal structure, dimensions, every rib, every detail, position and transparent outside. Change ONLY the illumination: thin vivid amber-orange light ignites inside all the narrow conduits, a faint amber edge light along the inner border, and the empty central dark metal plate is subtly warm with an amber reflected light. The sculpted bone and silver edges stay silver. A polished usable GUI image, no text or icon. Output full original button at original composition on transparent background.

### button-pressed

Reference: `dist/assets/button.png` (edit target, preserving geometry).

Output: `dist/assets/button-pressed.png`

Use case: precise-object-edit. This reference is the exact normal-state web button. Produce its physically PRESSED DOWN state for an interactive sprite. Preserve the identical outer silhouette, framing, aspect ratio, dimensions, every bone rib, camera and transparent outside. Change ONLY inner surface depth and illumination: central empty metal plate is pushed deep inward, top inner rim casts a deeper shadow, bottom inner rim catches an intense amber-orange nerve light; the ribbed conduits show hot amber cores. The empty center plate itself becomes darker and more concave. Sculpted metal stays silver. No text or icon. Full original button, identical composition, genuine transparent outside.

### cursor-pressed

Reference: `dist/assets/cursor-arrow.png` (edit target, preserving geometry).

Output: `dist/assets/cursor-pressed.png`

Use case: precise-object-edit. Create the MOUSE DOWN state of the exact attached skeletal arrow cursor. Keep the exact same outline, shape, direction, tip position, scale, every detail, and transparent background. ONLY change light: the small internal biomechanical channels and ribbed conduits ignite vivid amber orange, fine amber edge light on the inner bone ridges. The outer silver edge stays pale and legible. The artwork will be swapped in place when the mouse is pressed. No added object, no text, no background.

