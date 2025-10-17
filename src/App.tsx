import { Display, Header, Title, Body, Label } from './components/Text'
import Flex from './components/Flex'
import Appbar from './components/Appbar'

const size = ['lg', 'md', 'sm'] as const

function App() {
  return (
    <div>
      {/* Appbar는 Flex를 asChild로 사용하는 예시 */}
      <Appbar>
        <Title>My App</Title>
        <Flex gap="8px" alignItems="center">
          <Label>Menu</Label>
          <Label>About</Label>
        </Flex>
      </Appbar>

      {/* Flex 컴포넌트 직접 사용 예시 */}
      <Flex direction="column" gap="16px" style={{ padding: '24px' }}>
        <Display>Flex Component Demo</Display>

        <Flex direction="row" gap="8px" wrap="wrap">
          {size.map((size) => (
            <Display size={size} key={size}>
              display
            </Display>
          ))}
        </Flex>

        <Flex direction="row" gap="8px" wrap="wrap">
          {size.map((size) => (
            <Header size={size} key={size}>
              header
            </Header>
          ))}
        </Flex>

        <Flex direction="row" gap="8px" wrap="wrap">
          {size.map((size) => (
            <Title size={size} key={size}>
              title
            </Title>
          ))}
        </Flex>

        <Flex direction="row" gap="8px" wrap="wrap">
          {size.map((size) => (
            <Body size={size} key={size}>
              body
            </Body>
          ))}
        </Flex>

        <Flex direction="row" gap="8px" wrap="wrap">
          {size.map((size) => (
            <Label size={size} key={size}>
              label
            </Label>
          ))}
        </Flex>

        {/* asChild 사용 예시 - Flex 스타일을 커스텀 엘리먼트에 적용 */}
        <Flex asChild gap="12px" alignItems="center">
          <section style={{ border: '2px solid #ccc', padding: '12px' }}>
            <Body>asChild를 사용하면</Body>
            <Body>Flex의 스타일이 section에 병합됩니다</Body>
          </section>
        </Flex>
      </Flex>
    </div>
  )
}

export default App
