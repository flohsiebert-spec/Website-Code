import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20C4 12 9 4 20 4C20 15 12 20 4 20Z" />
      <path d="M4 20C8 16 12 12 18 6" />
    </svg>
  )
}

export function SealIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14.5L7 21l5-2.5 5 2.5-1.5-6.5" />
    </svg>
  )
}

export function PackageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8L12 4l9 4-9 4-9-4Z" />
      <path d="M3 8v8l9 4 9-4V8" />
      <path d="M12 12v8" />
    </svg>
  )
}

export function AppleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 8c-3 0-5.5 2.3-5.5 6 0 3.3 2.3 6.5 4.3 6.5.9 0 1.3-.5 2.2-.5s1.3.5 2.2.5c1.7 0 3.6-2.5 4.2-4.6" />
      <path d="M12 8c0-2 1-3.5 3-4" />
    </svg>
  )
}

export function BreadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4Z" />
      <path d="M9 9v4M12 8v5M15 9v4" />
    </svg>
  )
}

export function MilkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3h6l1 5c1.5 2 2 4 2 6a6 6 0 0 1-12 0c0-2 .5-4 2-6l1-5Z" />
      <path d="M9 8h6" />
    </svg>
  )
}

export function JarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4h8v3H8z" />
      <path d="M7 7h10l1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L7 7Z" />
      <path d="M8 12h8" />
    </svg>
  )
}

export function BottleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M10 2h4v4l2 3v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9l2-3V2Z" />
      <path d="M8 13h8" />
    </svg>
  )
}

export function DropletIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3C8 8 6 11.5 6 14.5a6 6 0 0 0 12 0C18 11.5 16 8 12 3Z" />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 6.2 2 2 0 0 1 6 3Z" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 9V6.5c0-.8.5-1.5 1.5-1.5H17V2h-2.3C12.5 2 11 3.6 11 6v3H8.5v3H11v10h3V12h2.3l.7-3H14Z" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function BasketIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.4} {...props}>
      <path d="M4 9h16l-1.5 10a2 2 0 0 1-2 1.8H7.5A2 2 0 0 1 5.5 19L4 9Z" />
      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
      <path d="M9 13v4M12 13v4M15 13v4" />
    </svg>
  )
}
