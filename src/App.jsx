import './App.css'
import Footer from './common/Footer'
import Menu from './common/Menu'
import MainPage from './views/MainPage'

function App() {

  return (
    <>
     <Menu></Menu>
     <MainPage className='mainSection'></MainPage>
     <Footer></Footer>
    </>
  )
}

export default App
