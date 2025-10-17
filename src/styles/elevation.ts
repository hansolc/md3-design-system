/**
 * Material 3 Elevation System
 * Source: https://www.figma.com/design/1u9975lQUUe6EC8FslKExp/Material-3-Design-Kit--Community-
 *
 * Elevation levels 0-5
 * - Level 0: No elevation (flat surface)
 * - Level 1: Lowest elevation (e.g., cards)
 * - Level 2: Low elevation (e.g., app bars)
 * - Level 3: Medium elevation (e.g., FAB, menus)
 * - Level 4: High elevation (e.g., navigation drawer)
 * - Level 5: Highest elevation (e.g., modal dialogs)
 */

export type ElevationLevel = 0 | 1 | 2 | 3 | 4 | 5

export interface Elevation {
  boxShadow: string
}

export type ElevationScale = Record<ElevationLevel, Elevation>

/**
 * Light mode elevations
 * Uses darker shadows on lighter backgrounds
 */
export const lightElevation: ElevationScale = {
  0: {
    boxShadow: 'none',
  },
  1: {
    // 0px 1px 2px 0px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)
    boxShadow:
      '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
  },
  2: {
    // 0px 1px 2px 0px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)
    boxShadow:
      '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  },
  3: {
    // 0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px 0px rgba(0,0,0,0.3)
    boxShadow:
      '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
  },
  4: {
    // 0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px 0px rgba(0,0,0,0.3)
    boxShadow:
      '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3)',
  },
  5: {
    // 0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px 0px rgba(0,0,0,0.3)
    boxShadow:
      '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)',
  },
}

/**
 * Dark mode elevations
 * Uses same shadow structure but with elevation tint overlay on surfaces
 * Shadow appears lighter against dark background
 */
export const darkElevation: ElevationScale = {
  0: {
    boxShadow: 'none',
  },
  1: {
    boxShadow:
      '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
  },
  2: {
    boxShadow:
      '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  },
  3: {
    boxShadow:
      '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
  },
  4: {
    boxShadow:
      '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3)',
  },
  5: {
    boxShadow:
      '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)',
  },
}
