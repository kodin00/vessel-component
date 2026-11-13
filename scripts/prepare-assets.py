"""Export generated PNG artwork as smaller web images without changing the artwork.

Original PNGs remain untouched alongside these derivatives.
Run: uv run --with pillow python scripts/prepare-assets.py
"""

from pathlib import Path
from PIL import Image

assets = Path(__file__).resolve().parents[1] / 'dist' / 'assets'
compact_sizes = {
    'cursor-arrow': 128, 'cursor-pressed': 128, 'click-burst': 256,
    'slider-knob': 128, 'switch-actuator': 128, 'loader-ring': 320,
    'medallion': 160, 'logo-skull': 192, 'search-icon': 96,
    'arrow-icon': 96, 'sound-icon': 96, 'checkbox-frame': 128, 'checkmark': 128,
    'button': 1024, 'button-hover': 1024, 'button-pressed': 1024,
    'input-frame': 1280, 'tab-plate': 640, 'slider-rail': 1024,
    'switch-housing': 384, 'divider-spine': 1200,
    'round-button': 512, 'round-button-hover': 512, 'round-button-pressed': 512,
}
for source in sorted(assets.glob('*.png')):
    target = source.with_suffix('.webp')
    image = Image.open(source).convert('RGBA')
    if source.stem in compact_sizes:
        side = compact_sizes[source.stem]
        image.thumbnail((side, side), Image.Resampling.LANCZOS)
    if target.exists() and target.stat().st_mtime >= source.stat().st_mtime and Image.open(target).size == image.size:
        continue
    image.save(target, format='WEBP', quality=88, method=6)
    print(f'{source.stem}: {source.stat().st_size // 1024} KB → {target.stat().st_size // 1024} KB')
