import { useState } from 'react'
import Header from './components/Header'
import Overlay from './components/Overlay'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='header_overlay_list'>
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  )
}

export default App
