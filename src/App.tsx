import { useState } from 'react'
import Text from './components/Text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Text>Hello World</Text>
    </>
  )
}

export default App
