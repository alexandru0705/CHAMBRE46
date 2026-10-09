import './Banner.scss';

const HERO = '../../assets/hero.webp';

const Banner = ({ image, title }) => { 
  return (
    <div className="banner">
      <img 
        src={image || HERO} 
        alt={title || "Image de la bannière"}
        className="banner__image"
      />
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
};

export default Banner;