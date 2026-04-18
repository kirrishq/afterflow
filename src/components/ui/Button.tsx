import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  withDot?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  withDot = false,
  type = 'button',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`button button--${variant} button--${size} ${withDot ? 'button--with-dot' : ''} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withDot && <span className="button__dot" aria-hidden="true" />}
    </button>
  )
}