import '@emotion/react'
import type { AppTheme } from './theme'

declare module '@emotion/react' {
  // Emotion의 Theme 타입을 우리 theme 객체의 타입으로 확장
  export interface Theme extends AppTheme {}
}
