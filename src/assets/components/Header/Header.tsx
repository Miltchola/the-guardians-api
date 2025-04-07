import './Header.css';

import logo from '../../icons/Teste Logo - Guardians (branca).png';
import logoTexto from '../../icons/Logo - Guardians texto.png';


const Header = () => {

    {/* REVISAR ESSA SEÇÃO */}
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <div className="logo-section">
        <img className="logo-image" src= {logo} alt="Logo The Guardians" />
        <img className="logo-text" src= {logoTexto} alt="Logo The Guardians" />
      </div>
      
      {/* Fazer depois a implementação do funcionamento das seções */}
      <div className="navigation-section">

        <h3 
          className="navigation-item" 
          onClick={() => scrollToSection('#sobre')}
        >
          SOBRE
        </h3>

        <h3 
          className="navigation-item"
          onClick={() => scrollToSection('#origem')}
        >
          ORIGEM
        </h3>

        <h3 
          className="navigation-item"
          onClick={() => scrollToSection('#produtos')}
        >
          PRODUTOS
        </h3>

        <h3 
          className="navigation-item"
          onClick={() => scrollToSection('#contato')}
        >
          CONTATO
        </h3>
        
      </div>
    </div>
  );
};

export default Header;