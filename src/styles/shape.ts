/**
 * Material 3 Shape System
 * Source: https://m3.material.io/styles/shape/shape-scale-tokens
 *
 * Shape defines the corner radius values for components.
 * Material 3 uses a shape scale with different corner radius values.
 */

export type ShapeScale =
  | 'none'
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'
  | 'full'

export interface ShapeTokens {
  borderRadius: string
}

export type Shape = Record<ShapeScale, ShapeTokens>

/**
 * Material 3 Shape Scale
 * - none: 0px - No rounded corners
 * - extraSmall: 4px - Subtle rounding
 * - small: 8px - Small components (chips, buttons)
 * - medium: 12px - Cards, dialogs
 * - large: 16px - Large cards, sheets
 * - extraLarge: 28px - Prominent components
 * - full: 9999px - Fully rounded (pills, FABs)
 */
export const shape: Shape = {
  none: {
    borderRadius: '0px',
  },
  extraSmall: {
    borderRadius: '4px',
  },
  small: {
    borderRadius: '8px',
  },
  medium: {
    borderRadius: '12px',
  },
  large: {
    borderRadius: '16px',
  },
  extraLarge: {
    borderRadius: '28px',
  },
  full: {
    borderRadius: '9999px',
  },
}
