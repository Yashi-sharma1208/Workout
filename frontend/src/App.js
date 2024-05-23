import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import StrengthTrainingPage from './pages/StrengthTrainingPage';
import Article1 from './pages/article1';
import Article2 from './pages/article2';
import Article3 from './pages/article3';
import Articles from './pages/Articles';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/home" />} />
            <Route path="/article1" element={<Article1 />} />
            <Route path="/article2" element={<Article2 />} />
            <Route path="/article3" element={<Article3 />} />
            <Route path="/Articles" element={<Articles />} />
          </Routes>
          <StrengthTrainingPage />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
