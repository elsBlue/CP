"""Rasterize the Crownpath favicon mark to PWA PNG sizes."""

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path("/workspace/public")
BG = (10, 11, 12, 255)
STEEL = (197, 205, 216, 255)
LIGHT = (238, 240, 242, 255)
WIN = (109, 155, 122, 255)


def paint(size: int) -> Image.Image:
    s = size / 16
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    r = max(1, round(3 * s))
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=r, fill=BG)
    draw.polygon([(2 * s, 10 * s), (4.5 * s, 5 * s), (7 * s, 10 * s)], fill=STEEL)
    draw.polygon([(5 * s, 10 * s), (8 * s, 2 * s), (11 * s, 10 * s)], fill=STEEL)
    draw.polygon([(9 * s, 10 * s), (11.5 * s, 5 * s), (14 * s, 10 * s)], fill=STEEL)
    draw.rectangle((2 * s, 10 * s, 14 * s, 12 * s), fill=STEEL)
    draw.rectangle((2 * s, 12 * s, 14 * s, 14 * s), fill=LIGHT)
    draw.rectangle((7 * s, 12 * s, 9 * s, 14 * s), fill=WIN)
    return img


def save(name: str, size: int) -> None:
    path = ROOT / name
    paint(size).save(path, "PNG")
    print(path, size)


if __name__ == "__main__":
    save("icon-192.png", 192)
    save("icon-512.png", 512)
    save("apple-touch-icon.png", 180)
    save("__grok/icon-180.png", 180)
