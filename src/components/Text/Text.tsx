import { forwardRef } from 'react'
import { css } from '@emotion/react'
import type {
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@/types/polymorphic'
import type { TextSize, TextVariant } from '@/types/components'
import type { Theme } from '@emotion/react'

interface _TextProps {
  variant?: TextVariant
  size?: TextSize
  children?: React.ReactNode
}

type TextProps<T extends React.ElementType = 'span'> =
  PolymorphicComponentProps<T, _TextProps>

type TextComponent = <C extends React.ElementType = 'span'>(
  props: TextProps<C> & { ref?: PolymorphicRef<C> }
) => React.ReactElement | null

// 스타일 로직을 분리 - 재사용 가능, 테스트 가능
const getTextStyle = (theme: Theme, variant: TextVariant, size: TextSize) => {
  const token = theme.text[variant][size]
  return css({
    fontSize: `${token.fontSize}px`,
    fontWeight: token.fontWeight,
    lineHeight: `${token.lineHeight}px`,
    letterSpacing: `${token.letterSpacing}px`,
  })
}

const Text: TextComponent = forwardRef(
  <T extends React.ElementType = 'span'>(
    { as, variant = 'body', size = 'lg', ...props }: TextProps<T>,
    ref?: PolymorphicRef<T>['ref']
  ): React.ReactElement | null => {
    const Element = as || 'span'
    return (
      <Element
        ref={ref}
        css={(theme: Theme) => getTextStyle(theme, variant, size)}
        {...props}
      />
    )
  }
) as TextComponent

export default Text
