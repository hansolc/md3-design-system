import { forwardRef, useMemo } from 'react'
import { css, type SerializedStyles, type Theme } from '@emotion/react'
import type { ShapeScale } from '@/styles/shape'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: 'filled' | 'outlined' | 'text'
  shape?: ShapeScale
}

const createButtonStyles = (
  theme: Theme,
  variant: 'filled' | 'outlined' | 'text',
  shape: ShapeScale
): SerializedStyles => {
  const baseStyles = {
    padding: '10px 24px',
    borderRadius: theme.shape[shape].borderRadius,
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'all 0.2s ease-in-out',
    fontFamily: 'inherit',
  }

  const variantStyles = {
    filled: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.onPrimary,
      '&:hover': {
        boxShadow: theme.elevation[1].boxShadow,
      },
      '&:active': {
        boxShadow: theme.elevation[0].boxShadow,
      },
    },
    outlined: {
      backgroundColor: 'transparent',
      color: theme.colors.primary,
      border: `1px solid ${theme.colors.outline}`,
      '&:hover': {
        backgroundColor: `${theme.colors.primary}10`,
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: theme.colors.primary,
      '&:hover': {
        backgroundColor: `${theme.colors.primary}10`,
      },
    },
  }

  return css({
    ...baseStyles,
    ...variantStyles[variant],
    '&:disabled': {
      opacity: 0.38,
      cursor: 'not-allowed',
    },
  })
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'filled', shape = 'full', ...restProps }, ref) => {
    return (
      <button
        ref={ref}
        css={(theme: Theme) =>
          useMemo(
            () => createButtonStyles(theme, variant, shape),
            [theme, variant, shape]
          )
        }
        {...restProps}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
