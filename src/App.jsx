import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MakeInIndia from './components/MakeInIndia';
import Milestones from './components/Milestones';
import Features from './components/Features';
import Procedure from './components/Procedure';
import Calculator from './components/Calculator';
import UseCases from './components/UseCases';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <MakeInIndia />
      <Milestones />
      <Features />
      <Procedure />
      <Calculator />
      <UseCases />
      <Footer />
    </div>
  );
}

export default App;
