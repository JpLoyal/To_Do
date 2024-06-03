import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carrossel.module.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className={styles.customCarrosel} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className={styles.imageContainer}>
          <img
              className="d-block w-100"
              src="public/img/garoto_moreno_pensando.jpg"
              alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Organize sua vida com facilidade!</h3>
          <p>Crie, gerencie e conclua suas tarefas com nosso app de lista de afazeres.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.imageContainer}>
          <img
              className="d-block w-100"
              src="public/img/mulher_pensando.png"
              alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Mantenha o foco nas suas metas!</h3>
          <p>Gerencie suas tarefas de forma eficiente e livre-se do estresse do planejamento.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.imageContainer}>
          <img
              className="d-block w-100"
              src="public/img/pessoa_tentando_lembrar_de_algo.jpg"
              alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Crie, planeje, execute!</h3>
          <p>
          Transforme seus planos em realidade e conquiste cada meta que você definir.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;