// Articles.js
import React from 'react';
import { Link } from 'react-router-dom';
import article1Image from './assests/article1.png';
import article2Image from './assests/article2.png';
import article3Image from './assests/article3.png';

const Articles = () => {
  return (
    <div className="container">
      <h1 className="center11">Some Recent Articles</h1>
      <div className="article-container">
        {/* Article 1 */}
        <div className="article-card">
          <img src={article1Image} alt="Article 1" className="article-image" />
          <h3>Best Home Workout for Men: 8 Recommendations for All Levels</h3>
          <Link to="/article1">
            <button className="see-more-button">See More</button>
          </Link>
        </div>

        {/* Article 2 */}
        <div className="article-card">
          <img src={article2Image} alt="Article 2" className="article-image" />
          <h3>5 Effective Exercises for Your Upper Abs Workout</h3>
          <Link to="/article2">
            <button className="see-more-button">See More</button>
          </Link>
        </div>

        {/* Article 3 */}
        <div className="article-card">
          <img src={article3Image} alt="Article 3" className="article-image" />
          <h3>How Long Should a Workout Be? 5 Things to Consider</h3>
          <Link to="/article3">
            <button className="see-more-button">See More</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Articles;
