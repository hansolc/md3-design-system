export type TextVariant = 'display' | 'headline' | 'title' | 'label' | 'body'
export type TextSize = 'lg' | 'md' | 'sm'

export type TextToken = {
  fontWeight: number
  fontSize: number
  lineHeight: number
  letterSpacing: number // 음수 가능
  fontStyle?: 'normal' | 'italic'
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
  textDecoration?: 'none' | 'underline' | 'line-through'
}

export interface TextBaseProps {
  as?: React.ElementType
  size?: TextSize
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  ref?: React.Ref<any>
}

export type TextScale = Record<TextVariant, Record<TextSize, TextToken>>
