import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';


// import components

const App = () => {
  return (  <div>
  <Header />
  <Hero />
  <Brands />
  <About />
  <Skills />
  <Portfolio />
  <Service />
  {/* <Testimonials /> */}
  <Contact />
  <Footer />
  <BackToTopBtn />
  </div>
  );
};

export default App;
