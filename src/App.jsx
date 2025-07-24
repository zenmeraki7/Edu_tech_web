
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer'
import EduTechPage from './Pages/EduTechPage';
import ZenmerakiCertificate from './Pages/ZenmerakiCertificate';


function App() {
  

  return (
    <>

      <div>
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/eduTechPage' element={<EduTechPage/>}/>
          <Route path='/ZenmerakiCertificate' element={<ZenmerakiCertificate/>}/>
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
    </>
  )
}

export default App
