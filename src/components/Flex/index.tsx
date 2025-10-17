import { forwardRef, type CSSProperties, useMemo } from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { css, type SerializedStyles } from '@emotion/react'

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  children?: React.ReactNode
  direction?: CSSProperties['flexDirection']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  gap?: CSSProperties['gap']
  wrap?: CSSProperties['flexWrap']
  alignContent?: CSSProperties['alignContent']
}

// Emotion best practice: 스타일 생성 함수를 컴포넌트 외부에 정의
const createFlexStyles = (
  direction?: CSSProperties['flexDirection'],
  justifyContent?: CSSProperties['justifyContent'],
  alignItems?: CSSProperties['alignItems'],
  gap?: CSSProperties['gap'],
  wrap?: CSSProperties['flexWrap'],
  alignContent?: CSSProperties['alignContent']
): SerializedStyles =>
  css({
    display: 'flex',
    flexDirection: direction,
    justifyContent: justifyContent,
    alignItems: alignItems,
    gap: gap,
    flexWrap: wrap,
    alignContent: alignContent,
  })

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      asChild = false,
      children,
      direction,
      justifyContent,
      alignItems,
      gap,
      wrap,
      alignContent,
      ...restProps
    },
    ref
  ) => {
    // Emotion best practice: useMemo로 스타일 메모이제이션
    const flexStyles = useMemo(
      () =>
        createFlexStyles(
          direction,
          justifyContent,
          alignItems,
          gap,
          wrap,
          alignContent
        ),
      [direction, justifyContent, alignItems, gap, wrap, alignContent]
    )

    // Render delegation pattern with Slottable
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp ref={ref} css={flexStyles} {...restProps}>
        <Slottable>{children}</Slottable>
      </Comp>
    )
  }
)

Flex.displayName = 'Flex'

export default Flex
