import { Text, Display, Header, Title, Body, Label } from './components/Text'

const size = ['lg', 'md', 'sm'] as const

function App() {
  return (
    <>
      {size.map((size) => (
        <Display size={size} key={size}>
          display
        </Display>
      ))}
      {size.map((size) => (
        <Header size={size} key={size}>
          header
        </Header>
      ))}
      {size.map((size) => (
        <Title size={size} key={size}>
          title
        </Title>
      ))}
      {size.map((size) => (
        <Body size={size} key={size}>
          body
        </Body>
      ))}
      {size.map((size) => (
        <Label size={size} key={size}>
          label
        </Label>
      ))}
    </>
  )
}

export default App
