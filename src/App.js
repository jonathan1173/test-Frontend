

import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App(){
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Welcome/>
      <Gallery/>
      <Footer/>
    </div>

  )
}

export default App