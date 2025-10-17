import { Display, Header, Title, Body, Label } from './components/Text'
import Flex from './components/Flex'
import Appbar from './components/Appbar'
import Card from './components/Card'
import Button from './components/Button'
import type { ElevationLevel } from './styles/elevation'
import type { ShapeScale } from './styles/shape'

const size = ['lg', 'md', 'sm'] as const
const elevationLevels: ElevationLevel[] = [0, 1, 2, 3, 4, 5]
const shapeScales: ShapeScale[] = [
  'none',
  'extraSmall',
  'small',
  'medium',
  'large',
  'extraLarge',
  'full',
]

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
      <Flex direction="column" gap="24px" style={{ padding: '24px' }}>
        {/* Elevation Demo Section */}
        <section>
          <Display size="md" style={{ marginBottom: '16px' }}>
            Material 3 Elevation System
          </Display>
          <Body style={{ marginBottom: '24px' }}>
            Light/Dark 모드에 따라 자동으로 적용되는 elevation 값들입니다.
          </Body>

          <Flex direction="row" gap="24px" wrap="wrap">
            {elevationLevels.map((level) => (
              <Card
                key={level}
                elevation={level}
                style={{ minWidth: '200px', minHeight: '150px' }}
              >
                <Flex
                  direction="column"
                  gap="8px"
                  alignItems="center"
                  justifyContent="center"
                  style={{ height: '100%' }}
                >
                  <Title size="lg">Elevation {level}</Title>
                  <Body>Box Shadow Level</Body>
                </Flex>
              </Card>
            ))}
          </Flex>
        </section>

        {/* Shape Demo Section */}
        <section>
          <Display size="md" style={{ marginBottom: '16px' }}>
            Material 3 Shape System
          </Display>
          <Body style={{ marginBottom: '24px' }}>
            다양한 border radius 값을 제공하는 shape 토큰입니다.
          </Body>

          <Flex direction="column" gap="32px">
            {/* Card Shape Examples */}
            <div>
              <Title size="lg" style={{ marginBottom: '16px' }}>
                Card Shapes
              </Title>
              <Flex direction="row" gap="24px" wrap="wrap">
                {shapeScales.map((shapeScale) => (
                  <Card
                    key={shapeScale}
                    elevation={2}
                    shape={shapeScale}
                    style={{ minWidth: '180px', minHeight: '150px' }}
                  >
                    <Flex
                      direction="column"
                      gap="8px"
                      alignItems="center"
                      justifyContent="center"
                      style={{ height: '100%' }}
                    >
                      <Title size="md">{shapeScale}</Title>
                      <Body size="sm" style={{ textAlign: 'center' }}>
                        Border Radius
                      </Body>
                    </Flex>
                  </Card>
                ))}
              </Flex>
            </div>

            {/* Button Shape Examples */}
            <div>
              <Title size="lg" style={{ marginBottom: '16px' }}>
                Button Shapes
              </Title>
              <Flex direction="row" gap="16px" wrap="wrap" alignItems="center">
                {shapeScales.map((shapeScale) => (
                  <Flex
                    key={shapeScale}
                    direction="column"
                    gap="8px"
                    alignItems="center"
                  >
                    <Button shape={shapeScale}>Button</Button>
                    <Label size="sm">{shapeScale}</Label>
                  </Flex>
                ))}
              </Flex>
            </div>

            {/* Button Variants with Shape */}
            <div>
              <Title size="lg" style={{ marginBottom: '16px' }}>
                Button Variants (medium shape)
              </Title>
              <Flex direction="row" gap="16px" wrap="wrap">
                <Button variant="filled" shape="medium">
                  Filled
                </Button>
                <Button variant="outlined" shape="medium">
                  Outlined
                </Button>
                <Button variant="text" shape="medium">
                  Text
                </Button>
              </Flex>
            </div>
          </Flex>
        </section>

        <Display>Text Component Demo</Display>

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
