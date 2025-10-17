import type { TextBaseProps } from '@/types/components'
import Text from './Text'

const Display = ({ ...props }: TextBaseProps) => {
  return <Text as="h2" variant="display" {...props} />
}

const Header = ({ ...props }: TextBaseProps) => {
  return <Text as="h1" variant="headline" {...props} />
}

const Title = ({ ...props }: TextBaseProps) => {
  return <Text as="h3" variant="title" {...props} />
}

const Body = ({ ...props }: TextBaseProps) => {
  return <Text as="p" variant="body" {...props} />
}

const Label = ({ ...props }: TextBaseProps) => {
  return <Text as="span" variant="label" {...props} />
}

export { Display, Header, Title, Body, Label, Text }
