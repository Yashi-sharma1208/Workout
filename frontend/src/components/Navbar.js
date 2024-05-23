import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {

  const { logout }=useLogout()
  const { user }=useAuthContext()

  const handleClick=()=>{
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>

        
        <nav>
          {user && (
            <div className='logout'>
              <span className='email'>{user.email}</span>
              <button className='button1' onClick={handleClick}>Logout</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/signup">
                <button>Signup</button>
              </Link>
            </div>
          )}
              <Link to="/">
                <button>Home</button>
              </Link>
              <Link to="/Articles">
                <button>Articles</button>
              </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
