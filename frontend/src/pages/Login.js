// import { useState } from "react"
// import { useLogin } from "../hooks/useLogin"

// const Login = () => {
//   const[email, setEmail]=useState('')
//   const[password, setPassword]=useState('')
//   const{login,error,isLoading}= useLogin()

//   const handleSubmit = async (e) => 
//   {
//     e.preventDefault()
//     // console.log(email, password)
//     await login(email,password)
//   }

//   return (
//     <form className="login" onSubmit={handleSubmit}>
//       <h3>Log In</h3>
      
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

//       <button disabled={isLoading}>Log in</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   )
// }

// export default Login




// Login.js
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRobot, setIsRobot] = useState(false);
  const { login, error, isLoading } = useLogin();

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
    await login(email, password);
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
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
        sitekey="6LdzsnUpAAAAAGVonY3qtzd5H3ouzQJ62FjHVQu0"
        onChange={handleCaptchaChange}
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </form>
  );
};

export default Login;
