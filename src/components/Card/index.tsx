import { forwardRef, useMemo, type CSSProperties } from 'react'
import { css, type SerializedStyles, type Theme } from '@emotion/react'
import type { ElevationLevel } from '@/styles/elevation'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  elevation?: ElevationLevel
  padding?: CSSProperties['padding']
  borderRadius?: CSSProperties['borderRadius']
}

const createCardStyles = (
  theme: Theme,
  elevation: ElevationLevel,
  padding?: CSSProperties['padding'],
  borderRadius?: CSSProperties['borderRadius']
): SerializedStyles =>
  css({
    backgroundColor: theme.colors.surface,
    padding: padding ?? '16px',
    borderRadius: borderRadius ?? '12px',
    boxShadow: theme.elevation[elevation].boxShadow,
    transition: 'box-shadow 0.2s ease-in-out',
  })

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, elevation = 1, padding, borderRadius, ...restProps }, ref) => {
    return (
      <div
        ref={ref}
        css={(theme: Theme) =>
          useMemo(
            () => createCardStyles(theme, elevation, padding, borderRadius),
            [theme, elevation, padding, borderRadius]
          )
        }
        {...restProps}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
