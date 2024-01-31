import {Container, Button, Card, Row, Col} from 'react-bootstrap'
import { MOCK_PUBLICACIONES, MOCK_PUBLICACIONES_2 } from '../helpers/ListaPublicaciones';
import imgPrincipal from '../assets/Fondo-Principal.gif'
import ListaAdopcion from './ListaAdopcion';
import ListaMascotaPerdida from './ListaMascotaPerdida';
const LandingPage = ({usuarioLogueado}) => {
    return (
        <section className="mainSection">
            <section className='principal pt-3' style={{backgroundImage: `url(${imgPrincipal})`}}>
                <div className='textoprincipal'>
                <h1 className='display-1 text-center mt-5'>Bienvenido {usuarioLogueado.nombreUsuario}</h1>
                <p className='display-6 text-center'>En esta página podrá encontrar la sección de adopción de mascotas además de publicaciones sobre mascotas desaparecidas. Además puede realizar publicaciones si lo necesita</p>
                </div>
            </section>
            <Container className='mt-3'>
                <h2>Adopción de Mascotas</h2>
                <Button>Añadir publicación de adopción</Button>
                <hr />
                <section>
                    <Row>
                        {
                            MOCK_PUBLICACIONES.map((adopcion) => {
                                return <ListaAdopcion adopcion={adopcion} key={adopcion.id}></ListaAdopcion>
                            })
                        }
                    </Row>
                </section>
                <h2 className='mt-3'>Mascotas Desaparecidas</h2>
                <Button>Añadir publicación de desaparación</Button>
                <hr />
                <section className='mb-4'>
                    <Row>
                        {
                            MOCK_PUBLICACIONES_2.map((mascota) => {
                                return <ListaMascotaPerdida mascota={mascota} key={mascota.id}></ListaMascotaPerdida>
                            })
                        }
                    </Row>
                </section>
            </Container>
        </section>
    );
};

export default LandingPage;