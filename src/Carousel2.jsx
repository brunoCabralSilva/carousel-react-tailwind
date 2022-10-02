import { useRef, useEffect } from 'react';
import { IconName } from "react-icons/fc";

export default function Carousel() {
  const refCarousel = useRef(null);

  useEffect( () => {
    let move = 400;
    setInterval(() => {
      if (move >= 1300) {
        refCarousel.current.scrollLeft -= move;
        move = 400;
      } else {
        refCarousel.current.scrollLeft += move;
        move += 300;
      }
    }, 1000);
  }, []);

  return (
    <section className="w-full h-1/2 flex items-center">
        <div className="flex h-1/2 items-center relative">
          <div className="w-full flex overflow-x-hidden scroll-smooth" ref={refCarousel}>
            <img src={require('./images/01.jpg')} alt="Conjunto de comidas dispostas na imagem" className="m-1" />
            <img src={require('./images/02.jpg')} alt="Conjunto de comidas dispostas na imagem com fundo pretol" className="m-1"  />
            <img src={require('./images/03.jpg')} alt="Conjunto de comidas dispostas na imagem com fundo azul" className="m-1" />
            <img src={require('./images/05.jpg')} alt="Conjunto de comidas dispostas na imagem com fundo preto" className="m-1" />
            <img src={require('./images/04.jpg')} alt="Conjunto de comidas dispostas na imagem com fundo branco" className="m-1" />
          </div>
        </div>
    </section>
  );
};
