import './Sobre.css'

import capa from '../../images/THE GUARDIANS CAPA (Remake).jpg'

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
                    <h3 className='content-title'>Projeto</h3>

                    <p className='content-paragraph'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod tempora fugit, earum nihil molestias nisi dolorem possimus, repellendus illo est cupiditate eos voluptates explicabo commodi, non pariatur veniam! Molestiae!
                    </p>
                    <button className='content-button'>Comprar Volume</button>
                </div>
            </div>
        </div>
    );
}

export default Sobre;