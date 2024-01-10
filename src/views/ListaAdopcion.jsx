
import { Card, Col, Button } from "react-bootstrap";
const ListaAdopcion = ({adopcion}) => {
    return (
        <Col md={6} lg={4} className='mb-3'>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        {adopcion.titulo}
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="text-center"><img className="Foto w-75" src={adopcion.foto}></img></Card.Body>
                                <Card.Footer>
                                    <div className='text-end'>
                                        <Button className='btn-warning'>Más Detalles</Button>
                                    </div>
                                    </Card.Footer>
                            </Card>
                        </Col>
    );
};

export default ListaAdopcion;