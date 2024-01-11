import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './common/Footer'
import Menu from './common/Menu'
import MainPage from './views/MainPage'
import SobreNosotros from './views/SobreNosotros'
import FormRegister from './common/FormRegister'
import LandingPage from './views/LandingPage'

function App() {

  return (
    <BrowserRouter>
     <Menu></Menu>
    <Routes>
      <Route exact path="/" element={<MainPage></MainPage>}></Route>
      <Route exact path="/SobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
      <Route exact path="/Registrarse" element={<FormRegister></FormRegister>}></Route>
      <Route exact path="/Principal" element={<LandingPage></LandingPage>}></Route>
    </Routes>
     <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
