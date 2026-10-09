import './Card.scss';

const Card = ({ id, title, cover, medium, stack, genre, year, releaseYear }) => {
  return (
    <article className="card">
      {cover && <img src={cover} alt={title} className="card__image" />}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {medium && <span className="card__meta">{medium}</span>}
        {stack && <span className="card__meta">{stack}</span>}
        {genre && <span className="card__meta">{genre}</span>}
        {year && <span className="card__meta">{year}</span>}
        {releaseYear && <span className="card__meta">{releaseYear}</span>}
      </div>
    </article>
  );
};

export default Card;