
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer'


function App() {
  

  return (
    <>

      <div>
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
    </>
  )
}

export default App
