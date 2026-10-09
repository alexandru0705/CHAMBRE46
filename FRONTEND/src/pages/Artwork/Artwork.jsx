import { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Cards/Card';
import './Artwork.scss';

const Artwork = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/artworks`)
      .then((res) => res.json())
      .then((data) => setArtworks(data))
      .catch((err) => console.error('Failed to fetch artworks:', err));
  }, []);

  return (
    <div className="artwork-page">
      <Banner image="/assets/artwork-hero.webp" title="Artworks Collection" />

      <div className="artwork-grid">
        {artworks.map((artwork) => (
          <Card 
            key={artwork._id}
            id={artwork._id}
            title={artwork.title}
            cover={`${import.meta.env.VITE_IMAGE_BASE_URL}${artwork.imageUrl}`}
            medium={artwork.medium}
          />
        ))}
      </div>
    </div>
  );
};

export default Artwork;