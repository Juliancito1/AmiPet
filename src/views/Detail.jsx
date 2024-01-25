import { Container, Card, Row, Col } from "react-bootstrap";
import ImgPrueba from "../assets/Imagen-carrousel1.png";
const Detail = () => {
  return (
    <Container className="mainSection mt-5">
        <h2 className="text-center">Informacion de Pepito</h2>   
        <Card className="border-3 rounded border-black">
          <Card.Body>
            <Row>
              <Col md={6}>
                <img className="imagenDetalle w-100" src={ImgPrueba}></img>
              </Col>
              <Col md={6}>
                <h2>Ayuda a encontrar a Pepito</h2>
                <hr></hr>
                <h5>Desaparecio el 20 de enero de 2024, tiene una mancha negra en su pecho además lleva un collar</h5>
              </Col>
            </Row>
          </Card.Body>
        </Card>
    </Container>
  );
};

export default Detail;
