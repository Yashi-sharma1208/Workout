// Home.js

import { Link } from 'react-router-dom';
import backgroundImage from './assests/image.jpg'; // Import the image file
import './Home2.css'; // Import the CSS file for Home component styling

const Home = () => {
  return (
    <div className="home-container" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="overlay"></div> {/* A semi-transparent overlay for better readability */}
      <div className="welcome-message">
        <h2>Welcome to Yashi's Workout App</h2>
        <p>Let's get started on your fitness journey!</p>
      </div>
      <div className="get-started-button">
        <Link to="/home">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
