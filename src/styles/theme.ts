import { textTokens } from '@/components/Text/tokens'
import { light, dark } from './color'
import { lightElevation, darkElevation } from './elevation'
import { createContext, useContext } from 'react'

export type ThemeMode = 'light' | 'dark'

export const createTheme = (mode: ThemeMode) => ({
  text: textTokens,
  colors: mode === 'light' ? light : dark,
  elevation: mode === 'light' ? lightElevation : darkElevation,
  mode,
})

export type AppTheme = ReturnType<typeof createTheme>

// ThemeMode Context
interface ThemeModeContextType {
  mode: ThemeMode
  toggleTheme: () => void
}

export const ThemeModeContext = createContext<ThemeModeContextType | undefined>(
  undefined
)

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext)
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeModeProvider')
  }
  return context
}
