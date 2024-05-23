import React, { useState } from 'react';
// import { useAuthContext } from '../hooks/useAuthContext';
import img from './assests/fitness.png';

const Footer = () => {
  // const { user } = useAuthContext();
  const [feedback, setFeedback] = useState({ name: '', email: '', text: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback); // Log the feedback data
    setSubmitted(true);
    setFeedback({ name: '', email: '', text: '' });
    alert('Thanks for your feedback!');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="app-logo">
          <img className='img' src={img} alt="Bench Press" />
            <span className='name'>Yashi Workout App</span>
            <p className='p11'>&copy; 2024 Yashi Workout App. All rights reserved.</p>
          </div>
          <div className="feedback-section">
            <h3>Feedback</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" value={feedback.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={feedback.email} onChange={handleChange} required />
              {/* Ensure the name attribute is set to "email" */}
              <textarea name="text" placeholder="Your feedback" value={feedback.text} onChange={handleChange} required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import React, { useState } from 'react';
// import axios from 'axios';

// const Footer = () => {
//   const [feedback, setFeedback] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFeedback(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/send-feedback', feedback);
//       alert('Thanks for your feedback!');
//       // Clear the form after submission
//       setFeedback({
//         name: '',
//         email: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       alert('An error occurred while submitting your feedback. Please try again later.');
//     }
//   };

//   return (
//     <footer>
//       <div className="container">
//         <div className="app-logo">Your App Logo</div>
//         <div className="app-name">Yashi Workout App</div>
//         <div className="feedback-form">
//           <h3>Feedback</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={feedback.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={feedback.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 value={feedback.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
