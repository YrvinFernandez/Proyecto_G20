import Router from './routers/routers'
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
 
  return (
    
    <BrowserRouter>
     <Header/>
     <Router/>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
