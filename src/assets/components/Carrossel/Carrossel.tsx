import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Tá aparecendo erro, mas tá funcionando
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carrossel.css';

//  Importando as imagens do Projeto
import img1 from '../../images/Joshua and Henrique.png';
import img2 from '../../images/Jorge chegando.png';
import img3 from '../../images/Manuel e Poker Guy.png';

// Imagens que vão passar no Carrossel
const data = [
    // Precisa consertar
    {id: '1', image: img1},
    {id: '2', image: img2},
    {id: '3', image: img3}
]

const Carrossel = () => {
    return (
        <div className="carrossel-container">
            <Swiper
            // Configuração do Swiper da página
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                loop={true}
                autoplay={{ delay: 3000 }} // O autoplay não está funcionando :(
            >
                {data.map((item) => (

                    <SwiperSlide key={item.id}>
                        {/* Informações das imagens que tão passando */}
                        <img 
                            src={item.image}
                            alt={`Slide ${item.id}`}
                            className="slide-item"
                        />
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    );
}

export default Carrossel;