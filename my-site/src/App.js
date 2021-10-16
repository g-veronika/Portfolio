import React, { useState } from 'react'
import Header from "./components/Header";
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import styled from 'styled-components';



function App() {

  const [primaryColor, setPrimaryColor] = useState(true)
  const [smallHeader, setSmallHeader] = useState(false)

  const changeHeader = () => {
    if(window.scrollY > 500) {
      setSmallHeader(true)
    }
    else {
      setSmallHeader(false)
    }
  }

  document.addEventListener('scroll', changeHeader)
  

  return (
    <Main primaryColor={primaryColor}>
      {/* {console.log(window.scrollY)} */}
      <Header smallHeader={smallHeader}/>
      <Home />
      <Experience />
      <Work />
      <Contact />
      <Footer primaryColor={primaryColor} setPrimaryColor={setPrimaryColor}/>
    </Main>
  );
}

export default App;

const Main = styled.div`
  background: ${({primaryColor}) => primaryColor ? '#0A192F' : '#3e6eb5'};
  transition: all 0.8s ease-in-out;
  overflow: hidden;
`

