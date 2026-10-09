import { Link } from 'react-router-dom';
import footerLogo from '../../assets/Footer.webp';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/" className="footer__link">
                <picture>
                    <img
                        src={footerLogo}
                        alt="CHAMBRE46 logo and copyright"
                        className="footer__logo"
                    />
                </picture>
            </Link>
        </footer>
    );
};

export default Footer;