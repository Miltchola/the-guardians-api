import './Origem.css'
import img1 from './../../images/Joshua Jones Remake.jpg'
import img2 from './../../images/Just chilling.jpg'


const Origem = () => {
    return (
        <div className="origem-section">
            {/* exatamente igual a parte do SOBRE */}
            <div className="section-title">
                <hr />
                <h1 className="origem-title">ORIGEM</h1>
            </div>

            <div className="section-1">
                <div className="section-1-left">
                    <img className='section-1-image' src={img1} alt="imagem" />
                </div>
                <div className="section-1-right">
                    <h3 className='section1-title'>Como Começamos</h3>

                    <p className='section-1-paragraph'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod tempora fugit, earum nihil molestias nisi dolorem possimus, repellendus illo est cupiditate eos voluptates explicabo commodi, non pariatur veniam! Molestiae!
                    </p>
                    <p className='section-1-paragraph'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod tempora fugit, earum nihil molestias nisi dolorem possimus, repellendus illo est cupiditate eos voluptates explicabo commodi, non pariatur veniam! Molestiae!
                    </p>
                </div>
            </div>

            <div className="section-2">
                <div className="section-2-left">
                    <h3 className='section-2-title'>Desenvolvimento</h3>

                    <p className='section-2-paragraph'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod tempora fugit, earum nihil molestias nisi dolorem possimus, repellendus illo est cupiditate eos voluptates explicabo commodi, non pariatur veniam! Molestiae!
                    </p>
                    <p className='section-2-paragraph'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod tempora fugit, earum nihil molestias nisi dolorem possimus, repellendus illo est cupiditate eos voluptates explicabo commodi, non pariatur veniam! Molestiae!
                    </p>
                </div>
                <div className="section-2-right">
                    <img className='section-2-image' src={img2} alt="imagem" />
                </div>
            </div>


        </div>
    );
}

export default Origem;