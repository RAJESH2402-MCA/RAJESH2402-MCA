import React from 'react';
import "./Article.css"

const Article = () => {
  return (
    <article>
      <div className="example">
      <iframe src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_p4TQIkRo8ZLEkrLfT-b3jLTPGPsVRswpMg&s" height="150" width="300"  title="Iframe Example"></iframe>
      <h2>Article Title</h2>
      <p>Qatar's population is a diverse mix of locals and expatriates,
      witha strong emphasis on maintaining culturals traditions alongside modern development.
      the country's infrastructure is state-of-art, featuring iconic structures like the Museum of islamic Art and the futuristic 
      skyline of Doha
    </p>
      <p>This is the main content of the article.</p>
      </div>
    </article>
  );
}

export default Article;