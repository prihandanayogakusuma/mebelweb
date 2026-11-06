import type { ComponentProps } from 'react'
import { Link } from 'react-router'

export type ButtonVariant = 'primary' | 'accent' | 'whatsapp' | 'outline' | 'outlineLight' | 'light'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-walnut text-ivory hover:bg-[#4a3529]',
  accent: 'bg-oak text-charcoal hover:bg-[#d9bc95]',
  whatsapp: 'bg-whatsapp text-white hover:bg-whatsapp-dark',
  outline: 'border border-walnut/35 text-walnut hover:border-walnut hover:bg-walnut hover:text-ivory',
  outlineLight: 'border border-ivory/40 text-ivory hover:bg-ivory hover:text-walnut',
  light: 'bg-ivory text-walnut hover:bg-cream',
}

export const buttonClass = (variant: ButtonVariant = 'primary', className = '') =>
  `inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-center text-sm font-semibold transition-all active:scale-[0.98] ${variants[variant]} ${className}`

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariant
}

export function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClass(variant, className)} {...props} />
}

interface ExternalButtonProps extends ComponentProps<'a'> {
  variant?: ButtonVariant
}

/** Tombol menuju tautan luar atau skema tel:/mailto:. */
export function ExternalButton({ variant, className, ...props }: ExternalButtonProps) {
  return <a className={buttonClass(variant, className)} {...props} />
}
