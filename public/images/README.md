# Image slots

Every path below is currently a generated gradient placeholder (`.svg`). Drop in
real photography with the **same filename and extension** (re-export as `.svg`,
or rename the file and update the one path reference in code) and it updates
everywhere automatically — no other code changes needed.

| Path | Used in | Recommended size |
| --- | --- | --- |
| `services/pre-post-wedding.svg` | Services card | 900×1125 (4:5 portrait) |
| `services/pre-birthday.svg` | Services card | 900×1125 |
| `services/wedding-shoot.svg` | Services card | 900×1125 |
| `services/cinematography.svg` | Services card | 900×1125 |
| `services/video-editing.svg` | Services card | 900×1125 |
| `services/album-designing.svg` | Services card | 900×1125 |
| `gallery/01.svg` … `gallery/08.svg` | Gallery grid | 1200×1500 portrait or 1600×1000 landscape |
| `about/about-1.svg` | About section | 1000×1250 (4:5 portrait) |

If you swap `.svg` for `.jpg`/`.png`/`.webp`, update the matching path string in
[`src/lib/constants.ts`](../../src/lib/constants.ts) (for services/gallery)
or [`src/components/home/About.tsx`](../../src/components/home/About.tsx) (for
the hardcoded about image).

The **hero banner** has no photo — it's a generative animated background
(particle network + glow + rotating rings, ported from the IFFAI-page
project) rendered by [`src/components/home/Hero.tsx`](../../src/components/home/Hero.tsx)
and [`src/components/ui/NeuralCanvas.tsx`](../../src/components/ui/NeuralCanvas.tsx).
The **logo** used site-wide (nav, footer, intro animation) is
[`../brand/logo.png`](../brand/logo.png) — replace that file to rebrand.
