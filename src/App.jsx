import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './common/Footer'
import Menu from './common/Menu'
import MainPage from './views/MainPage'

function App() {

  return (
    <BrowserRouter>
     <Menu></Menu>
    <Routes>
      <Route exact path="/" element={<MainPage></MainPage>}></Route>
    </Routes>
     <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
