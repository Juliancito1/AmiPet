import { Row, Col, Container } from "react-bootstrap";
import LogoAmiPet from '../assets/AmiPet-logo.png'
const Footer = () => {
    return (
        <footer className="Navbar py-4">
            <Container>
                <Row>
                    <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
                        <img src={LogoAmiPet} alt="logoAmiPet" className="logo" />
                    </Col>
                    <Col md={4} className="text-center">
                        <h3 className="mt-lg-4">Bienvenido a AmiPet</h3>
                    </Col>
                    <Col md={4} className="text-center text-md-end">
                        <ul className="list-unstyled">
                        <li className="mt-lg-4">Inicio</li>
                        <li className="mt-lg-4">Sobre Nosotros</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;