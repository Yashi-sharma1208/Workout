// import { useState } from "react"
// import { useSignup } from "../hooks/useSignup"

// const Signup = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const {signup, error, isLoading}=useSignup()
//   const handleSubmit = async (e) => 
//   {
//     e.preventDefault()
//     // console.log(email, password)
//     await signup(email,password)
//   }

//   return (
//     <form className="signup" onSubmit={handleSubmit}>
//       <h3>Sign Up</h3>
      
//       <label>Email address:</label>
//       <input 
//         type="email" 
//         onChange={(e) => setEmail(e.target.value)} 
//         value={email} 
//       />
//       <label>Password:</label>
//       <input 
//         type="password" 
//         onChange={(e) => setPassword(e.target.value)} 
//         value={password} 
//       />

//       <button disabled={isLoading}>Sign up</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   )
// }

// export default Signup







import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSignup } from '../hooks/useSignup'; // Import the correct hook
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA component

const Signup = () => {
  const [username, setUsername] = useState(''); // Add username state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRobot, setIsRobot] = useState(false); // Add state for reCAPTCHA
  const { signup, error, isLoading } = useSignup(); // Use the correct hook

  const handleCaptchaChange = (value) => {
    // Set the value of the reCAPTCHA checkbox
    setIsRobot(value); // value will be 'null' or 'string' if the user is verified
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if the user has checked the reCAPTCHA checkbox
    if (!isRobot) {
      alert("Please verify that you are not a robot.");
      return;
    }
    await signup(username, email, password); // Pass username to signup function
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Username:</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />


      <ReCAPTCHA
        sitekey="6LdzsnUpAAAAAGVonY3qtzd5H3ouzQJ62FjHVQu0" // Replace with your reCAPTCHA site key
        onChange={handleCaptchaChange}
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </form>
  );
};

export default Signup;
