import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../assets/Imagen-carrousel1.png'
import imagen2 from '../assets/Imagen-carrousel2.png'
const MainPage = () => {
    return (
        <section className="mainSection">
          <Carousel className=''>
      <Carousel.Item>
        <img className='img-carousel w-100' src={imagen1}></img>
        <Carousel.Caption>
          <h3 className='display-1'>AmiPet</h3>
          <p className='fs-3'>En la búsqueda de un amigo leal y amoroso, la adopción brinda la oportunidad de cambiar vidas, no solo para aquellos que buscan compañía, sino también para aquellos que esperan ser encontrados</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100 img-carousel' src={imagen2} alt="" />
      </Carousel.Item>
    </Carousel>
        </section>
    );
};

export default MainPage;