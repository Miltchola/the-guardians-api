import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Tá aparecendo erro, mas tá funcionando
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carrossel.css';

//  Importando as imagens do Projeto
import img1 from '../../assets/images/Joshua e Henrique.jpg';
import img2 from '../../assets/images/Jorge chegando.jpg';
import img3 from '../../assets/images/Manuel e Poker Guy.jpg';
import img4 from '../../assets/images/Joshua apresentação.png';
import img5 from '../../assets/images/Nicolas, Henrique e Jade.jpg'


// Imagens que vão passar no Carrossel
const data = [
    // Precisa consertar
    {id: '1', image: img1},
    {id: '2', image: img2},
    {id: '3', image: img3},
    {id: '4', image: img4},
    {id: '5', image: img5}
]

const Carrossel = () => {
    return (
        <div className="carrossel-container">
            <Swiper
            // Configuração do Swiper da página
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                loop={true}
                autoplay={{ delay: 4000 }} // O autoplay não está funcionando :(
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