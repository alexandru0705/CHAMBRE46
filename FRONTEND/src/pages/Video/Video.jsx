import { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Cards/Card';
import './Video.scss';

const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/videos`)
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error('Failed to fetch videos:', err));
  }, []);

  return (
    <div className="video-page">
      <Banner image="/assets/video-hero.webp" title="Videography" />

      <div className="video-grid">
        {videos.map((video) => (
          <Card 
            key={video._id}
            id={video._id}
            title={video.title}
            cover={`${import.meta.env.VITE_IMAGE_BASE_URL}${video.videoUrl}`}
            year={video.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Video;