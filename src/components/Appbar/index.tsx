import { forwardRef } from 'react'
import { css } from '@emotion/react'
import Flex from '../Flex'

interface AppbarProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

const appbarStyles = css({
  width: '100%',
  height: '64px',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  padding: '0 16px',
})

const Appbar = forwardRef<HTMLElement, AppbarProps>(
  ({ children, ...props }, ref) => {
    return (
      <Flex
        asChild
        alignItems="center"
        justifyContent="space-between"
        gap="16px"
      >
        <header ref={ref} css={appbarStyles} {...props}>
          {children}
        </header>
      </Flex>
    )
  }
)

Appbar.displayName = 'Appbar'

export default Appbar
