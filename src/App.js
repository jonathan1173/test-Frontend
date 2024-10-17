import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PageIndex } from './Page/Index'
import { PageLogin } from './Page/login'
import { CommunityIndex } from './Page/Community'
import { StorePage } from './Page/Store'
import { DocumentationPage } from './Page/Documentation'
import { ContactPage } from './Page/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={< Navigate to="/home" />} />
        <Route path='/home' element={<PageIndex />} />
        <Route path='/community' element={<CommunityIndex />} />
        <Route path='/doc' element={<DocumentationPage />} />
        <Route path='/login' element={<PageLogin />} />
        <Route path='/store' element={<StorePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App