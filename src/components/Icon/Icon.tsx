import { forwardRef, useMemo } from 'react'
import { css, type Theme } from '@emotion/react'
import { iconMap } from './iconMap'
import type { IconProps } from '../../types/components'

const getIconStyles = (theme: Theme, color?: string) =>
  css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: color || theme.colors.onSurface,
    transition: 'color 0.2s ease-in-out',
  })

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ name, size = 24, color, className, style, ...restProps }, ref) => {
    const IconComponent = iconMap[name]

    if (!IconComponent) {
      console.warn(`Icon "${name}" not found in iconMap`)
      return null
    }

    return (
      <span
        ref={ref}
        css={(theme: Theme) =>
          useMemo(() => getIconStyles(theme, color), [theme, color])
        }
        className={className}
        style={style}
        {...restProps}
      >
        <IconComponent color={color} size={size} />
      </span>
    )
  }
)

Icon.displayName = 'Icon'

export default Icon
