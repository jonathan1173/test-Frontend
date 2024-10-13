import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PageIndex } from './Page/Index'
import { PageLogin } from './Page/login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={< Navigate to="/index" />} />
        <Route path='/index' element={<PageIndex />} />
        <Route path='/login' element={<PageLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App