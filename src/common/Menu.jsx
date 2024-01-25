import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom'
import LogoAmiPet from '../assets/AmiPet-logo.png'
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import FormLogin from './FormLogin';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const  handleShow = () => setShow(true);
    return (
        <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand as={Link} to={'/'}><img src={LogoAmiPet} className='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            {
              usuarioLogueado.id? (
                <>
                  <NavLink end className='fs-4 nav-item nav-link' id='boton-nav' to={'/Principal'}>Inicio</NavLink>
                </>
              ) : <>
                  <NavLink end className='fs-4 nav-item nav-link' id='boton-nav' to={'/'}>Inicio</NavLink>
              </>
            }
            
            <NavLink end className='fs-4 nav-item nav-link mx-lg-1' id='boton-nav' to={'/SobreNosotros'}>Sobre Nosotros</NavLink>
            {
              usuarioLogueado.id ? (
              <>
                <NavLink className="fs-4 nav-item nav-link"><FaRegCircleUser className='me-lg-2'/>{usuarioLogueado.nombreUsuario}</NavLink>
                <NavLink className="fs-4 nav-item nav-link"><IoNotifications/></NavLink>
              </>
                ) : <>
                <NavLink end className='fs-4 nav-item nav-link' id='boton-nav' onClick={handleShow}>Iniciar Sesion</NavLink>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLogin setShow={setShow} setUsuarioLogueado={setUsuarioLogueado}></FormLogin>
        </Modal.Body>
      </Modal>
    </Navbar>
    );
};

export default Menu;