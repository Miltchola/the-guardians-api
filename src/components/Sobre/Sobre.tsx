import './Sobre.css'

import capa from '../../assets/images/THE GUARDIANS CAPA (Remake).jpg'

const Sobre = () => {
    return (
        <div className="sobre-section">
            <div className="section-title">
                <hr />
                <h1 className="sobre-title">SOBRE</h1>
            </div>

            <div className="sobre-content">
                <div className="content-left">
                    <img className='capa' src={capa} alt="Capa" />
                </div>

                <div className="content-right">
                    <h3 className='content-title'>The Guardians - Protectors of Mankind</h3>
                    <h6 className='content-subtitle'>Volume 1 - The Hero</h6>

                    <p className='content-paragraph'>
                        Durante a construção da civilização humana, entidades que representam
                        conceitos e ideias presentes na sociedade foram criadas.
                        Essas entidades se encarnaram em humanos, dando eles
                        super poderes, fazendo com que possam influenciar
                        o desenvolvimento da sociedade - tanto pro bem quanto pro mal.
                        <br></br>
                        <br></br>
                        <strong>Joshua Jones</strong> - um jovem imprudente de 17 anos que vive arrastando seu
                        melhor amigo, <strong>Henrique Marques</strong>, para problemas na cidade de Salvador -
                        descobre que é portador de uma dessas entidades. Com isso, ele precisa
                        descobrir a origem de seu poder e lutar contra as forças do mal para proteger
                        a humanidade do <strong>Apocalipse</strong>.

                    </p>
                    <button className='content-button'>Comprar Volume</button>
                </div>
            </div>
        </div>
    );
}

export default Sobre;