/**
 * Tiny "pen" for the blog page: pure, seeded geometry that returns SVG path data.
 *
 * Same seed -> same line, on the server and in the browser, so there is no
 * hydration flicker and no client JS. Idea borrowed from Looseleaf
 * (https://github.com/kevintngo/looseleaf, MIT), reimplemented in ~150 lines
 * so the rest of the site can stay on Tailwind 3.
 */

type Pt = readonly [number, number]
export type Rng = () => number

/** FNV-1a string hash -> uint32 */
export function hash(input: string | number): number {
  const s = String(input)
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return h >>> 0
}

/** mulberry32 */
export function rng(seed: string | number): Rng {
  let a = hash(seed)
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const f = (n: number) => Math.round(n * 100) / 100
const spread = (r: Rng, amp: number) => (r() - 0.5) * 2 * amp

/** Catmull-Rom spline through points, emitted as cubic beziers. */
function smooth(pts: Pt[]): string {
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] ?? p2
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += `C${f(c1x)} ${f(c1y)} ${f(c2x)} ${f(c2y)} ${f(p2[0])} ${f(p2[1])}`
  }
  return d
}

/** One pen stroke from a to b: slight bow + per-point tremor. */
function stroke(r: Rng, a: Pt, b: Pt, amp: number): string {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const len = Math.hypot(dx, dy) || 1
  const nx = -dy / len
  const ny = dx / len
  const n = Math.max(2, Math.round(len / 70))
  const bow = spread(r, amp * 1.4)
  const pts: Pt[] = []
  for (let i = 0; i <= n; i++) {
    const t = i / n
    const off = Math.sin(Math.PI * t) * bow + (i === 0 || i === n ? 0 : spread(r, amp * 0.6))
    pts.push([a[0] + dx * t + nx * off, a[1] + dy * t + ny * off])
  }
  return smooth(pts)
}

/**
 * Four overshooting strokes around a w x h box, like a rectangle drawn with a
 * pen (corners cross a little instead of being closed perfectly).
 */
export function boxStroke(seed: string | number, w: number, h: number, amp = 1.1, m = 3): string {
  const r = rng(`${seed}|box`)
  const o = () => 1 + r() * 3.2
  const j = () => spread(r, amp)
  const tl: Pt = [m + j(), m + j()]
  const tr: Pt = [w - m + j(), m + j()]
  const br: Pt = [w - m + j(), h - m + j()]
  const bl: Pt = [m + j(), h - m + j()]
  const side = (a: Pt, b: Pt) => {
    const dx = Math.sign(b[0] - a[0])
    const dy = Math.sign(b[1] - a[1])
    return stroke(r, [a[0] - dx * o(), a[1] - dy * o()], [b[0] + dx * o(), b[1] + dy * o()], amp)
  }
  return [side(tl, tr), side(tr, br), side(br, bl), side(bl, tl)].join("")
}

/** Closed, slightly irregular polygon used to flood-fill a box with solid colour. */
export function boxFill(seed: string | number, w: number, h: number, amp = 1.1, m = 3): string {
  const r = rng(`${seed}|fill`)
  const j = () => spread(r, amp)
  const p = (x: number, y: number) => `${f(x + j())} ${f(y + j())}`
  return `M${p(m, m)}L${p(w / 2, m)}L${p(w - m, m)}L${p(w - m, h / 2)}L${p(w - m, h - m)}L${p(w / 2, h - m)}L${p(m, h - m)}L${p(m, h / 2)}Z`
}

/** A wavering underline, left to right, drifting up a touch like a real one. */
export function underlineStroke(seed: string | number, w: number, h: number, amp = 1.6): string {
  const r = rng(`${seed}|ul`)
  const n = Math.max(4, Math.round(w / 38))
  const drift = spread(r, h * 0.12)
  const pts: Pt[] = []
  for (let i = 0; i <= n; i++) {
    const t = i / n
    pts.push([4 + (w - 8) * t, h * 0.55 + drift * t + Math.sin(t * Math.PI * 2.4 + r() * 0.8) * amp + spread(r, amp * 0.5)])
  }
  return smooth(pts)
}

/** A loop drawn with a little spiral drift and an overshoot, like circling a word. */
export function circleStroke(seed: string | number, w: number, h: number, turns = 1.1): string {
  const r = rng(`${seed}|circle`)
  const n = 28
  const cx = w / 2
  const cy = h / 2
  const a0 = -Math.PI * (0.55 + r() * 0.3)
  const pts: Pt[] = []
  for (let i = 0; i <= n; i++) {
    const t = i / n
    const a = a0 + Math.PI * 2 * turns * t
    const k = 0.9 + 0.1 * t + spread(r, 0.012)
    pts.push([cx + (w / 2 - 3) * k * Math.cos(a), cy + (h / 2 - 3) * k * Math.sin(a)])
  }
  return smooth(pts)
}

/** A check mark in two quick strokes. */
export function tickStroke(seed: string | number, size = 20): string {
  const r = rng(`${seed}|tick`)
  const j = () => spread(r, size * 0.04)
  const a: Pt = [size * 0.12 + j(), size * 0.55 + j()]
  const b: Pt = [size * 0.4 + j(), size * 0.85 + j()]
  const c: Pt = [size * 0.92 + j(), size * 0.1 + j()]
  return `M${f(a[0])} ${f(a[1])}L${f(b[0])} ${f(b[1])}L${f(c[0])} ${f(c[1])}`
}

/**
 * clip-path polygon for a sheet cut with scissors: every edge has a hair of
 * wander. `torn` adds a ragged top edge (amplitude in px).
 */
export function sheetClip(seed: string | number, opts: { torn?: boolean; tornAmp?: number } = {}): string {
  const r = rng(`${seed}|clip`)
  const pts: string[] = []
  const e = (): number => f(0.2 + r() * 0.4)
  const steps = [0, 25, 50, 75, 100]
  if (opts.torn) {
    const amp = opts.tornAmp ?? 7
    const n = 26
    for (let i = 0; i <= n; i++) {
      const x = f((i / n) * 100)
      const y = i === 0 || i === n ? amp * 0.5 : amp * (0.15 + r() * 0.85)
      pts.push(`${x}% ${f(y)}px`)
    }
  } else {
    for (const x of steps) pts.push(`${x}% ${x === 0 || x === 100 ? 0 : e()}%`)
  }
  for (const y of [25, 50, 75]) pts.push(`${f(100 - e())}% ${y}%`)
  pts.push("100% 100%")
  for (const x of [75, 50, 25]) pts.push(`${x}% ${f(100 - e())}%`)
  pts.push("0% 100%")
  for (const y of [75, 50, 25]) pts.push(`${e()}% ${y}%`)
  return `polygon(${pts.join(",")})`
}

/** Ragged-ended strip for washi / masking tape (left and right ends are zig-zag). */
export function tapeClip(seed: string | number): string {
  const r = rng(`${seed}|tape`)
  const left: string[] = []
  const right: string[] = []
  const n = 6
  for (let i = 0; i <= n; i++) {
    const y = f((i / n) * 100)
    left.push(`${f(r() * 5)}% ${y}%`)
    right.push(`${f(100 - r() * 5)}% ${y}%`)
  }
  return `polygon(${[...left, ...right.reverse()].join(",")})`
}

/** Deterministic small tilt in degrees, in [-max, +max]. */
export function tilt(seed: string | number, max = 1.6): number {
  return f(spread(rng(`${seed}|tilt`), max))
}
