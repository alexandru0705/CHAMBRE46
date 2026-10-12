import { Link, NavLink } from 'react-router-dom';
import logoIcon from '../../assets/LOGO.webp';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logoIcon} alt="CHAMBRE46 icon" className="header__icon" />
          CHAMBRE46
        </Link>
      </div>
      <nav className="header__nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}>About</NavLink>
        <NavLink to="/artwork" className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}>Artwork</NavLink>
        <NavLink to="/project" className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}>Project</NavLink>
        <NavLink to="/track" className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}>Track</NavLink>
        <NavLink to="/video" className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}>Video</NavLink>
      </nav>
    </header>
  );
};

export default Header;