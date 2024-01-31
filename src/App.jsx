import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './common/Footer'
import Menu from './common/Menu'
import MainPage from './views/MainPage'
import SobreNosotros from './views/SobreNosotros'
import FormRegister from './common/FormRegister'
import LandingPage from './views/LandingPage'
import Detail from './views/Detail'
import { useState } from 'react'

function App() {

  const usuarioStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioStorage);

  return (
    <BrowserRouter>
     <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
    <Routes>
      <Route exact path="/" element={<MainPage></MainPage>}></Route>
      <Route exact path="/SobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
      <Route exact path="/Registrarse" element={<FormRegister></FormRegister>}></Route>
      <Route exact path="/Principal" element={<LandingPage usuarioLogueado={usuarioLogueado}></LandingPage>}></Route>
      <Route exact path="/Detalle" element={<Detail></Detail>}></Route>
    </Routes>
     <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
