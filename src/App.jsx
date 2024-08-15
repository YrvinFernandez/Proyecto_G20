import Routers from './routers/routers'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
 
  return (
    
    <BrowserRouter>
     <Header/>
     <Routers/>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
