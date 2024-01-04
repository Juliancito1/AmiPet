import {Container, Button, Card, Row, Col} from 'react-bootstrap'

const LandingPage = () => {
    return (
        <section className="mainSection">
            <section className='principal pt-3'>
                <div className='textoprincipal'>
                <h1 className='display-1 text-center mt-5'>Bienvenido Usuario</h1>
                <p className='display-6 text-center'>En esta página podrá encontrar la sección de adopción de mascotas además de publicaciones sobre mascotas desaparecidas. Además puede realizar publicaciones si lo necesita</p>
                </div>
            </section>
            <Container className='mt-3'>
                <h2>Adopción de Mascotas</h2>
                <hr />
                <section>
                    <Row>
                        <Col md={3}>
                            <Card>
                                <Card.Header>Pepito</Card.Header>
                                <Card.Body>Perrito foto</Card.Body>
                                <Card.Footer>Adoptar</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Header>Pepito</Card.Header>
                                <Card.Body>Perrito foto</Card.Body>
                                <Card.Footer>Adoptar</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Header>Pepito</Card.Header>
                                <Card.Body>Perrito foto</Card.Body>
                                <Card.Footer>Adoptar</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Header>Pepito</Card.Header>
                                <Card.Body>Perrito foto</Card.Body>
                                <Card.Footer>Adoptar</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </section>
            </Container>
        </section>
    );
};

export default LandingPage;