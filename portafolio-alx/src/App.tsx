import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Newsletter from './components/Newsletter';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Banner />
        <Skills />
        <Projects />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
