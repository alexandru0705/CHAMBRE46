import { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Cards/Card';
import './Track.scss';

const Track = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/tracks`)
      .then((res) => res.json())
      .then((data) => setTracks(data))
      .catch((err) => console.error('Failed to fetch tracks:', err));
  }, []);

  return (
    <div className="track-page">
      <Banner image="/assets/track-hero.webp" title="Electronic Music Tracks" />

      <div className="track-grid">
        {tracks.map((track) => (
          <Card 
            key={track._id}
            id={track._id}
            title={track.title}
            genre={track.genre}
            releaseYear={track.releaseYear}
          />
        ))}
      </div>
    </div>
  );
};

export default Track;
