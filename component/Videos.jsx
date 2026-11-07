import React from 'react';
import './Gallery.css';
import Footer from './Footer';

// Importing videos from assets
import video1 from '../assets/Event-videos/video (1).mp4';
import heroVideo from '../assets/Event-videos/Hero_section_video.mp4';
import companyVideo from '../assets/Atechsole.mp4';

const videos = [
  { id: 1, src: video1 },
  { id: 2, src: heroVideo },
  { id: 3, src: companyVideo }
];

const Videos = () => {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-header">
          <h1>Video Gallery</h1>
          <p>Watch our latest stories and highlights</p>
        </div>
        <div className="gallery-grid video-grid">
          {videos.map((video) => (
            <div key={video.id} className="gallery-item video-item">
              <video controls poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&auto=format&fit=crop&q=60">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
             
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Videos;
