import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Artwork from './pages/Artwork/Artwork';
import Project from './pages/Project/Project';
import Track from './pages/Track/Track';
import Video from './pages/Video/Video';
import Error from './pages/Error/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        
          <Route index element={<About />} />
          <Route path="artwork" element={<Artwork />} />
          <Route path="project" element={<Project />} />
          <Route path="track" element={<Track />} />
          <Route path="video" element={<Video />} />
          <Route path="*" element={<Error />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;