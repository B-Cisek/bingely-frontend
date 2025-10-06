import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
      <Button>Click me</Button>
    </>
  )
}

export default App
