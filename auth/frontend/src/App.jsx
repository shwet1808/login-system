import { Routes, Route } from 'react-router-dom';
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
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IntroPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />


      </Route>
    </Routes>
  );
}

export default App;
