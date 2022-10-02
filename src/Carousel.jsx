import { useRef } from 'react';
import { IconName } from "react-icons/fc";

export default function Carousel() {
  const refCarousel = useRef(null);

  const next = () => {
    refCarousel.current.scrollLeft += 400;
  };
  const previous = () => {
    refCarousel.current.scrollLeft -= 400;
  };

  return (
    <section className="w-full h-1/2 flex items-center">
        <div className="flex h-1/2 items-center relative">
          <div className="absolute flex h-full items-center ">
            <button
              type="button"
              className="px-2 py-4 ml-1 w-1/4"
              onClick={previous}
            >
              <img src ={require('./images/left-white.png')} alt="seta para a direita" />
            </button>
          </div>
          <div className="w-full flex overflow-x-hidden scroll-smooth" ref={refCarousel}>
            <img src={require('./images/01.jpg')} alt="Conjunto de comidas dispostas na imagem" className="m-1" />
            <img src={require('./images/02.jpg')} alt="Conjunto de comidas dispostas na imagem com fundo pretol" className="m-1"  />
            <img src={require('./images/03.jpg')} alt="Conjunto de comidas dispostas na imagem com fundo azul" className="m-1" />
            <img src={require('./images/05.jpg')} alt="Conjunto de comidas dispostas na imagem com fundo preto" className="m-1" />
            <img src={require('./images/04.jpg')} alt="Conjunto de comidas dispostas na imagem com fundo branco" className="m-1" />
          </div>
          <div className="absolute right-0 flex h-full items-center justify-end">
            <button
              type="button"
              className="px-2 py-4 mr-1 w-1/4"
              onClick={next}
            >
              <img src ={require('./images/right-white.png')} alt="seta para a esquerda" />
            </button>
          </div>
        </div>
    </section>
  );
};
