import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Challenge from './pages/Challenge';
import Contact from './pages/Contact';
import { Values } from './pages/Values';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-auto font-sans">
        <div className='max-w-screen-2xl overflow-hidden'>
          <Layout />
          <Home />
          <About />
          <Challenge />
          <Values />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
