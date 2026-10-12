import { Link } from 'react-router-dom';
import footerLogo from '../../assets/Footer.webp';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/" className="footer__link" aria-label="CHAMBRE46 - Home">
          <picture className="footer__picture">
            <img
              src={footerLogo}
              alt="CHAMBRE46 logo and copyright, Ocean Wave w Sunset"
              className="footer__logo"
            />
            <p className="footer__text">© 2026 CHAMBRE46. All rights reserved.</p>
            <p className="footer__email">lachambre46@gmail.com</p>
          </picture>
          
        </Link>
        
      </div>
    </footer>
  );
};

export default Footer;