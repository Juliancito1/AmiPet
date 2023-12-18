import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom'
import LogoAmiPet from '../assets/AmiPet-logo.png'

const Menu = () => {
    return (
        <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand as={Link} to={'/'}><img src={LogoAmiPet} className='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink end className='fs-4 nav-item nav-link' id='boton-nav' to={'/'}>Inicio</NavLink>
            <NavLink end className='fs-4 nav-item nav-link mx-lg-1' id='boton-nav' to={'/SobreNosotros'}>Sobre Nosotros</NavLink>
            <NavLink end className='fs-4 nav-item nav-link' id='boton-nav' to={'/login'}>Iniciar Sesion</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;