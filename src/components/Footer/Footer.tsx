import './Footer.css'

import insta from '../../assets/icons/Instagram logo.png'
import webtoon from '../../assets/icons/Webtoon logo.png'

import logo from '../../assets/icons/Teste Logo - Guardians (branca).png'
import logoTexto from '../../assets/icons/Logo - Guardians texto.png'


const Footer = () => {
    return (
        <div className="footer-section">
            <div className="social-media">
                <a className="social-media-link" href="">
                    <img className="logo" src={insta} alt="Instagram Logo" />
                    <h4 className="media-text">@the.guardians.official</h4>
                </a>
                
                <a className="social-media-link" href="">
                    <img className="logo" src={webtoon} alt="Webtoon Logo" />
                    <h4 className="media-text">The Guardians - Protectors of Mankind</h4>
                </a>
            </div>

            <div className="footer-logo">
                <img className="logo-icon" src={logo} alt="logo" />
                <img className="logo-text" src={logoTexto} alt="logoTexto" />
            </div>

            <hr className="hr-section" />

            <div className="footer-rights">
                <p>&copy; 2025 The Guardians - Protectors of Mankind. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;