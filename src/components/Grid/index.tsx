import { forwardRef, useMemo, type CSSProperties } from 'react'
import { css, type SerializedStyles } from '@emotion/react'
import { Slot, Slottable } from '@radix-ui/react-slot'

interface _GridProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  children?: React.ReactNode
}

interface GridStylesProps {
  gap?: CSSProperties['gap']
  columns?: string | number
  rows?: string | number
}

type GridProps = _GridProps & GridStylesProps

// Emotion best practice: 스타일 생성 함수를 컴포넌트 외부에 정의
const createGridStyles = ({
  gap,
  columns,
  rows,
}: GridStylesProps): SerializedStyles =>
  css({
    display: 'grid',
    gap: gap,
    gridTemplateColumns:
      typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
    ...(rows !== undefined && {
      gridTemplateRows:
        typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows,
    }),
  })

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    { asChild = false, children, gap = 16, columns = 12, rows, ...restProps },
    ref
  ) => {
    // Emotion best practice: useMemo로 스타일 메모이제이션
    const gridStyles = useMemo(
      () => createGridStyles({ gap, columns, rows }),
      [gap, columns, rows]
    )

    // Render delegation pattern with Slottable
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp ref={ref} css={gridStyles} {...restProps}>
        <Slottable>{children}</Slottable>
      </Comp>
    )
  }
)

Grid.displayName = 'Grid'

export default Grid
