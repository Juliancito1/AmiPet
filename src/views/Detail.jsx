import { Container, Card, Row, Col } from "react-bootstrap";
import ImgPrueba from "../assets/Imagen-carrousel1.png";
const Detail = () => {
  return (
    <Container className="mainSection mt-5">
        <h2 className="text-center">Informacion de Pepito</h2>   
        <Card>
          <Card.Body>
            <Row>
              <Col md={6}>
                <img className="w-75" src={ImgPrueba}></img>
              </Col>
              <Col md={6}>
                Ayuda a encontrar a Pepito, se perdio el 20 de enero de 2024
              </Col>
            </Row>
          </Card.Body>
        </Card>
    </Container>
  );
};

export default Detail;
