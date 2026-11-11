import type { CSSProperties, ElementType, ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  boxFill,
  boxStroke,
  circleStroke,
  sheetClip,
  tapeClip,
  tickStroke,
  tilt,
  underlineStroke,
} from "./ink"

/**
 * Paper-and-pen primitives for the blog page. Everything here is a server
 * component: seeded SVG + CSS, zero client JS. Styles live in ./looseleaf.css
 * and are scoped under `.ll`.
 */

type Vars = CSSProperties & Record<`--${string}`, string | number | undefined>

/* ------------------------------------------------------------------ pen box */

type PenBoxProps = {
  seed: string
  /** viewBox hint in px; roughly the rendered size keeps the wobble isotropic */
  w?: number
  h?: number
  fill?: string
  stroke?: string
  strokeWidth?: number
  amp?: number
  /** second, fainter pass for the sketchy look */
  sketch?: boolean
  className?: string
}

export function PenBox({
  seed,
  w = 320,
  h = 120,
  fill,
  stroke = "var(--ll-pen)",
  strokeWidth = 1.7,
  amp = 1.1,
  sketch = true,
  className,
}: PenBoxProps) {
  return (
    <svg
      className={cn("ll-pen", className)}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {fill ? <path d={boxFill(seed, w, h, amp)} fill={fill} stroke="none" /> : null}
      <path
        d={boxStroke(seed, w, h, amp)}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      {sketch ? (
        <path
          d={boxStroke(`${seed}~2`, w, h, amp * 1.5, 3.6)}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth * 0.55}
          strokeLinecap="round"
          opacity={0.4}
          vectorEffect="non-scaling-stroke"
        />
      ) : null}
    </svg>
  )
}

/* ------------------------------------------------------------------- sheets */

export type Stock =
  | "paper"
  | "ruled"
  | "graph"
  | "index"
  | "kraft"
  | "sticky-yellow"
  | "sticky-green"
  | "sticky-orange"
  | "sticky-pink"
  | "sticky-blue"

type SheetProps = {
  stock?: Stock
  seed: string
  /** degrees; defaults to a small seeded tilt. 0 = dead straight */
  rotate?: number
  tape?: "top" | "corner" | "both" | false
  torn?: boolean
  as?: ElementType
  /** stagger index for the entrance animation */
  index?: number
  /** big content cards: no hover lift */
  still?: boolean
  className?: string
  faceClassName?: string
  style?: CSSProperties
  children: ReactNode
}

export function Sheet({
  stock = "paper",
  seed,
  rotate,
  tape = false,
  torn = false,
  as: Tag = "div",
  index = 0,
  still = false,
  className,
  faceClassName,
  style,
  children,
}: SheetProps) {
  const deg = rotate ?? tilt(seed, stock.startsWith("sticky") ? 2.2 : 1.2)
  return (
    <Tag
      className={cn("ll-sheet", className)}
      data-stock={stock}
      data-still={still ? "" : undefined}
      style={{ "--ll-r": `${deg}deg`, "--ll-i": index, ...style } as Vars}
    >
      <div className={cn("ll-face", faceClassName)} style={{ clipPath: sheetClip(seed, { torn }) }}>
        {children}
      </div>
      {tape === "top" ? <Tape seed={`${seed}:t`} className="ll-tape-top" angle={-2.5} /> : null}
      {tape === "corner" ? <Tape seed={`${seed}:c`} className="ll-tape-corner" angle={-38} /> : null}
      {tape === "both" ? (
        <>
          <Tape seed={`${seed}:l`} className="ll-tape-corner" angle={-38} />
          <Tape seed={`${seed}:r`} className="ll-tape-corner-r" angle={36} />
        </>
      ) : null}
    </Tag>
  )
}

export function Tape({ seed, className, angle = 0 }: { seed: string; className?: string; angle?: number }) {
  return (
    <span
      aria-hidden="true"
      className={cn("ll-tape", className)}
      style={{ clipPath: tapeClip(seed), "--ll-tape-r": `${angle + tilt(seed, 3)}deg` } as Vars}
    />
  )
}

/* -------------------------------------------------------------------- marks */

/** Wobbly pen underline beneath inline text. */
export function Underline({
  children,
  seed,
  color = "var(--ll-marker)",
  className,
}: {
  children: ReactNode
  seed: string
  color?: string
  className?: string
}) {
  return (
    <span className={cn("ll-ul", className)}>
      {children}
      <svg
        className="ll-ul-svg"
        viewBox="0 0 220 16"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d={underlineStroke(seed, 220, 16)}
          fill="none"
          stroke={color}
          strokeWidth={4}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  )
}

/** Hand-drawn loop around inline content. */
export function Circled({
  children,
  seed,
  color = "var(--ll-marker)",
  className,
}: {
  children: ReactNode
  seed: string
  color?: string
  className?: string
}) {
  return (
    <span className={cn("ll-circled", className)}>
      {children}
      <svg className="ll-circled-svg" viewBox="0 0 120 56" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path
          d={circleStroke(seed, 120, 56)}
          fill="none"
          stroke={color}
          strokeWidth={2.2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  )
}

/** Yellow highlighter swipe. Pure CSS, wraps across lines. */
export function Highlight({ children, className }: { children: ReactNode; className?: string }) {
  return <mark className={cn("ll-hl", className)}>{children}</mark>
}

type StampTone = "ink" | "blue" | "red" | "green"

/** Rubber stamp: pen-drawn frame, uppercase tracking, ink that never quite covers. */
export function Stamp({
  children,
  seed,
  tone = "red",
  rotate,
  className,
  onDesk = false,
}: {
  children: ReactNode
  seed: string
  tone?: StampTone
  rotate?: number
  className?: string
  /** pressed directly on the desk (not on paper) - gets light ink in dark mode */
  onDesk?: boolean
}) {
  const color = {
    ink: "var(--ll-ink)",
    blue: "var(--ll-ink-you)",
    red: "var(--ll-red)",
    green: "var(--ll-green)",
  }[tone]
  return (
    <span
      className={cn("ll-stamp", onDesk && "ll-stamp-desk", className)}
      style={{ "--ll-stamp": color, rotate: `${rotate ?? tilt(seed, 3)}deg` } as Vars}
    >
      <PenBox seed={seed} w={240} h={36} stroke={color} strokeWidth={1.8} amp={0.6} sketch={false} />
      <span className="ll-stamp-text">{children}</span>
    </span>
  )
}

/** Hand-drawn tick inside a drawn square — for the checklists. */
export function CheckBox({ seed }: { seed: string }) {
  return (
    <svg className="ll-check" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
      <path d={boxStroke(seed, 22, 22, 0.5, 2.5)} fill="none" stroke="var(--ll-pen)" strokeWidth={1.4} strokeLinecap="round" />
      <path d={tickStroke(seed, 17)} fill="none" stroke="var(--ll-ink-you)" strokeWidth={2.1} strokeLinecap="round" strokeLinejoin="round" transform="translate(3.2 2.2)" />
    </svg>
  )
}

/** Wraps an <input>/<textarea> in a pen-drawn frame. Pass the control as children. */
export function PenField({ seed, h = 44, children, className }: { seed: string; h?: number; children: ReactNode; className?: string }) {
  return (
    <div className={cn("ll-field", className)}>
      <PenBox seed={seed} w={320} h={h} fill="var(--ll-slip)" strokeWidth={1.5} amp={0.8} sketch={false} />
      {children}
    </div>
  )
}

/** Eyebrow + title block shared by every section. */
export function SectionHead({
  eyebrow,
  id,
  children,
  lede,
  className,
}: {
  eyebrow: string
  id: string
  children: ReactNode
  lede?: ReactNode
  className?: string
}) {
  return (
    <header className={cn("ll-head", className)}>
      <p className="ll-eyebrow">{eyebrow}</p>
      <h2 id={id} className="ll-h2 mt-3">
        {children}
      </h2>
      {lede ? <p className="ll-lede mt-6">{lede}</p> : null}
    </header>
  )
}

/* ------------------------------------------------------------------ buttons */

type PenButtonProps = {
  seed: string
  tone?: "primary" | "paper"
  size?: "md" | "sm"
  children: ReactNode
  className?: string
  /** Renders a link when set, otherwise a <button>. */
  href?: string
  type?: "button" | "submit"
  disabled?: boolean
  onClick?: () => void
  "aria-label"?: string
}

/** Hand-drawn button. Internal paths use next/link, http(s) opens a new tab, everything else is a plain <a>. */
export function PenButton({ href, seed, tone = "primary", size = "md", children, className, type = "button", disabled, onClick, ...rest }: PenButtonProps) {
  const body = (
    <>
      <PenBox
        seed={seed}
        w={size === "sm" ? 130 : 220}
        h={size === "sm" ? 36 : 48}
        fill={tone === "primary" ? "var(--ll-marker)" : "var(--ll-slip)"}
        strokeWidth={1.8}
        amp={0.9}
      />
      <span className="ll-btn-label">{children}</span>
    </>
  )
  const cls = cn("ll-btn", size === "sm" && "ll-btn-sm", className)
  if (!href) {
    return (
      <button type={type} disabled={disabled} onClick={onClick} className={cls} data-tone={tone} {...rest}>
        {body}
      </button>
    )
  }
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls} data-tone={tone} {...rest}>
        {body}
      </Link>
    )
  }
  const external = /^https?:/.test(href)
  return (
    <a href={href} className={cls} data-tone={tone} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {body}
    </a>
  )
}
