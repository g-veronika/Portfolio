import React from 'react'
import Header from "./components/Header";
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

