import './Footer.css'

import insta from '../../assets/icons/Instagram logo.png'
import webtoon from '../../assets/icons/Webtoon logo.png'

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="social-media">
                <a href="">
                    <img className="logo" src={insta} alt="Instagram Logo" />@the.guardians.official
                </a>
                
                <a href="">
                    <img className="logo" src={webtoon} alt="Webtoon Logo" />The Guardians - Protectors of Mankind
                </a>
            </div>

            <hr />

            <div>

            </div>

            <div className="footer-rights">
                <p>&copy; 2025 The Guardians - Protectors of Mankind. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;