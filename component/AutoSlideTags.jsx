import React from 'react';
import './AutoSlideTags.css';

const tags = [
  "MEAN Stack | MERN Stack | MEVN Stack | Full Stack ",
  "React | Angular | Node.js | Next.js",
  "Python | Java | HTML | Laraval ",
  "IOS | Android | Node.js | Flutter",
  "Azure | Docker | AWS | AI/ML",
  "Kotlin | DevOps | Swift | BlockChain"
];

const AutoSlideTags = () => {
  return (
    <div className="auto-slide-container">
      <div className="slide-track">
        {/* First set of tags */}
        {tags.map((tag, index) => (
          <div key={`original-${index}`} className="tag-pill">
            {tag}
          </div>
        ))}
        {/* Duplicate set for seamless scrolling */}
        {tags.map((tag, index) => (
          <div key={`duplicate-${index}`} className="tag-pill">
            {tag}
          </div>
        ))}
        {/* Triplicate set for wider screens if needed */}
        {tags.map((tag, index) => (
          <div key={`triplicate-${index}`} className="tag-pill">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlideTags;
