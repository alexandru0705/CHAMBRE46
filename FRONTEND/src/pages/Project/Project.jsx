import { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Cards/Card';
import './Project.scss';

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Failed to fetch projects:', err));
  }, []);

  return (
    <div className="project-page">
      <Banner image="/assets/project-hero.webp" title="Development Projects" />

      <div className="project-grid">
        {projects.map((project) => (
          <Card 
            key={project._id}
            id={project._id}
            title={project.title}
            cover={`${import.meta.env.VITE_IMAGE_BASE_URL}${project.imageUrl}`}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;