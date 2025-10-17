import { useState, useMemo } from 'react'
import type { ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { createTheme, ThemeModeContext } from './theme'
import type { ThemeMode } from './theme'

interface ThemeProviderProps {
  children: ReactNode
  defaultMode?: ThemeMode
}

export const ThemeProvider = ({
  children,
  defaultMode = 'light',
}: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode)

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const theme = useMemo(() => createTheme(mode), [mode])

  const themeModeValue = useMemo(() => ({ mode, toggleTheme }), [mode])

  return (
    <ThemeModeContext.Provider value={themeModeValue}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeModeContext.Provider>
  )
}
