import type { TextScale } from '@/types/components/Text'

export const textTokens: TextScale = {
  display: {
    lg: { fontWeight: 400, fontSize: 57, lineHeight: 64, letterSpacing: -0.25 },
    md: { fontWeight: 400, fontSize: 45, lineHeight: 52, letterSpacing: 0 },
    sm: { fontWeight: 400, fontSize: 36, lineHeight: 44, letterSpacing: 0 },
  },
  headline: {
    lg: { fontWeight: 400, fontSize: 32, lineHeight: 40, letterSpacing: 0 },
    md: { fontWeight: 400, fontSize: 28, lineHeight: 36, letterSpacing: 0 },
    sm: { fontWeight: 400, fontSize: 24, lineHeight: 32, letterSpacing: 0 },
  },
  title: {
    lg: { fontWeight: 400, fontSize: 22, lineHeight: 28, letterSpacing: 0 },
    md: { fontWeight: 500, fontSize: 16, lineHeight: 24, letterSpacing: 0.15 },
    sm: { fontWeight: 500, fontSize: 14, lineHeight: 20, letterSpacing: 0.1 },
  },
  label: {
    lg: { fontWeight: 500, fontSize: 14, lineHeight: 20, letterSpacing: 0.1 },
    md: { fontWeight: 500, fontSize: 12, lineHeight: 16, letterSpacing: 0.5 },
    sm: { fontWeight: 500, fontSize: 11, lineHeight: 16, letterSpacing: 0.5 },
  },
  body: {
    lg: { fontWeight: 400, fontSize: 16, lineHeight: 24, letterSpacing: 0.5 },
    md: { fontWeight: 400, fontSize: 14, lineHeight: 20, letterSpacing: 0.25 },
    sm: { fontWeight: 400, fontSize: 12, lineHeight: 16, letterSpacing: 0.4 },
  },
}
