
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer'
import EduTechPage from './Pages/EduTechPage';


function App() {
  

  return (
    <>

      <div>
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/eduTechPage' element={<EduTechPage/>}/>
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
    </>
  )
}

export default App
