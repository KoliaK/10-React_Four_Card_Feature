import { useState } from 'react'
import { TextBox } from './TextBox'
import { Cards } from './Cards'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TextBox/>
      <Cards/>
    </>
  )
}

export default App
