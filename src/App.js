import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Skills from './Pages/Skills/Skills';
import Footer from './components/Footer/Footer';
import Projects from'./Pages/Projects/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
