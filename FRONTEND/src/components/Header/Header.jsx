import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import LOGO from '../../assets/LOGO.webp';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img src={LOGO} alt="Logo CHAMBRE46" className="header__logo-img" />
        </Link>

        <nav className="header__nav">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;