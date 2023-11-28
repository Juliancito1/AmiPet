import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoAmiPet from '../assets/AmiPet-logo.png'

const Menu = () => {
    return (
        <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand href="#home"><img src={LogoAmiPet} className='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#home" className='fs-4 boton-nav'>Inicio</Nav.Link>
            <Nav.Link href="#link" className='fs-4 boton-nav mx-lg-1'>Sobre Nosotros</Nav.Link>
            <Nav.Link href="#link" className='fs-4 boton-nav'>Iniciar Sesion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;