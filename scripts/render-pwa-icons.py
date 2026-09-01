"""Rasterize the Crownpath crown (same mark as favicon.svg) for PWA icons."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path("/workspace/public")
BG = (10, 11, 12, 255)
STEEL = (197, 205, 216, 255)
LIGHT = (238, 240, 242, 255)
WIN = (109, 155, 122, 255)
SS = 8


def circle(draw: ImageDraw.ImageDraw, cx: float, cy: float, r: float, fill):
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=fill)


def paint(size: int) -> Image.Image:
    S = size * SS
    img = Image.new("RGBA", (S, S), BG)
    d = ImageDraw.Draw(img)
    u = S / 32

    crown = [
        (6 * u, 21.5 * u),
        (10 * u, 12 * u),
        (14 * u, 21.5 * u),
        (16 * u, 8 * u),
        (18 * u, 21.5 * u),
        (22 * u, 12 * u),
        (26 * u, 21.5 * u),
        (26 * u, 24 * u),
        (6 * u, 24 * u),
    ]
    d.polygon(crown, fill=STEEL)
    d.rounded_rectangle((6 * u, 21 * u, 26 * u, 24.4 * u), radius=max(1, 0.6 * u), fill=STEEL)
    d.rounded_rectangle((6 * u, 24.2 * u, 26 * u, 27.4 * u), radius=max(1, 0.45 * u), fill=LIGHT)
    d.rectangle((14.2 * u, 24.2 * u, 17.8 * u, 27.4 * u), fill=WIN)

    circle(d, 10 * u, 11.2 * u, 1.85 * u, LIGHT)
    circle(d, 16 * u, 7.1 * u, 2.15 * u, LIGHT)
    circle(d, 22 * u, 11.2 * u, 1.85 * u, LIGHT)

    out = img.resize((size, size), Image.Resampling.LANCZOS)
    return out.filter(ImageFilter.UnsharpMask(radius=size / 180, percent=80, threshold=2))


def save(name: str, size: int) -> None:
    path = ROOT / name
    paint(size).save(path, "PNG")
    print(path, size)


if __name__ == "__main__":
    save("icon-192.png", 192)
    save("icon-512.png", 512)
    save("apple-touch-icon.png", 180)
    save("__grok/icon-180.png", 180)
