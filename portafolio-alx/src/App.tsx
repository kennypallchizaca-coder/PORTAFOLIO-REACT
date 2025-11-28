import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Newsletter from './components/Newsletter';
import Portfolios from './components/Portfolios';
import Projects from './components/Projects';
import Roles from './components/Roles';
import Skills from './components/Skills';
import Advisories from './components/Advisories';
import AdminPanel from './components/AdminPanel';
import { PortfolioProvider } from './context/PortfolioContext';

function App() {
  return (
    <PortfolioProvider>
      <div className="app">
        <NavBar />
        <main>
          <Banner />
          <Roles />
          <AdminPanel />
          <Skills />
          <Portfolios />
          <Advisories />
          <Projects />
          <Newsletter />
          <Contact />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
