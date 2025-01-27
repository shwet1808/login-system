import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import IntroPage from './Pages/IntroPage';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Layout from './Layout';

function App() {
  const isLoggedIn = localStorage.getItem('token'); // Check if token exists (meaning the user is logged in)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IntroPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        
        {/* Protect the login route */}
        <Route
          path="login"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
        />
        
        <Route path="signup" element={<Signup />} />
        
        {/* Protect the home route */}
        <Route
          path="home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
      </Route>
    </Routes>
  );
}

export default App;
