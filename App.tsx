import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutLaw } from './components/AboutLaw';
import { Services } from './components/Services';
import { AboutMe } from './components/AboutMe';
import { Pricing } from './components/Pricing';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutLaw />
        <Services />
        <AboutMe />
        <Pricing />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;