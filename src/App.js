import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import PostItem from './pages/Blog/PostItem';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/*' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/post/:id/' element={<PostItem />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
