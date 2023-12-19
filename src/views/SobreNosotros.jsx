import { Col, Container, Row } from "react-bootstrap";
import Imagen from "../assets/imagen-sobrenosotros.png"
const SobreNosotros = () => {
    return (
        <section className="mainSection text-center">
            <Container>

            <h2 className="display-1 fw-bold">¡Bienvenidos a AmiPet!🐾</h2>
            <p className="display-6">Somos una comunidad apasionada y comprometida con un objetivo claro: conectar corazones y hogares a través de la adopción y el cuidado de mascotas. En AmiPet, creemos que cada animal merece un hogar lleno de amor y cada hogar merece la alegría que una mascota puede traer.</p>
            </Container>
            <Container>
            <Row className="pt-3">
                <Col md={12} className="text-md-start fondo1">
                <p className="h4">Nuestra historia comenzó con una simple observación: demasiados animales necesitados y demasiadas personas deseando brindar amor y cuidado. Así, nació AmiPet, una plataforma que facilita la adopción, tránsito y búsqueda de mascotas, creando un puente entre las almas caritativas que desean acoger y los dulces animales que necesitan un hogar.</p>
                </Col>
                <Col md={12} className="text-md-end my-5 fondo2">
                <p className="h4">En AmiPet, ofrecemos una experiencia amigable y segura para quienes buscan expandir su familia con un nuevo miembro peludo. Ya sea que estés buscando adoptar, ofrecer tránsito temporal, o si has perdido a tu amigo y necesitas ayuda para encontrarlo, estamos aquí para apoyarte.</p>
                </Col>
                <Col md={12} className="text-md-start fondo1">
                <p className="h4">Nos enorgullece ser más que una aplicación: somos una comunidad. Una comunidad que valora la compasión, el amor y la responsabilidad hacia nuestros amigos de cuatro patas. Nos esforzamos por educar y crear conciencia sobre la importancia de la adopción responsable y el bienestar animal.</p>
                </Col>
                <Col md={12} className="text-center fondo2 my-5 pb-3">
                <p className="h4">Juntos, podemos hacer una diferencia significativa en la vida de innumerables animales y personas. Únete a nuestra misión y sé parte de esta maravillosa aventura. ¡Tu nuevo mejor amigo te está esperando!
                Con cariño y compromiso,
                El Equipo de AmiPet 🐶❤️🐱</p>
                <img className="w-50" src={Imagen}></img>
                </Col>
            </Row>
            </Container>
        </section>
    );
};

export default SobreNosotros;