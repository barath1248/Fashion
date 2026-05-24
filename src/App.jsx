import { useState } from 'react'
import './App.css'
import { Carousel } from './components/caurosel/caurosel'
import NaNvbar from './components/Navbar/navbar'
import { FashionSection } from './components/FashionSection/fashionsection'
import { Collections } from './components/Collections/collection'
import { Footer } from './components/Footer/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="home">
      <NaNvbar />
      <Carousel />
      <FashionSection />
      <Collections />
      <Footer />
    </div>
  )
}

export default App
