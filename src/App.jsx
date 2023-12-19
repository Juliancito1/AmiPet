import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './common/Footer'
import Menu from './common/Menu'
import MainPage from './views/MainPage'
import SobreNosotros from './views/SobreNosotros'

function App() {

  return (
    <BrowserRouter>
     <Menu></Menu>
    <Routes>
      <Route exact path="/" element={<MainPage></MainPage>}></Route>
      <Route exact path="/SobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
    </Routes>
     <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
