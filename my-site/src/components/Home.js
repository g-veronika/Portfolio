import React, { useState } from 'react'
import styled from 'styled-components/macro'
import {Link} from 'react-scroll'
import {Animated} from "react-animated-css";

function Home(props) {

    const[animatedButton, setAnimatedButton] = useState(true);

    const visibleEffect = () => {
        if(window.scrollY > 500) {
            setAnimatedButton(false)
          }
        else {
        setAnimatedButton(true)
        }
    }

    let changeLinks = props.changeName ? "projets" : "experiences" 

    console.log(changeLinks)
    document.addEventListener('scroll', visibleEffect);


    return (
        <Box id="accueil">
            <ContentWrapper>
                <MyTitle>Bonjour, je m'appelle</MyTitle>
                <Name>{props.fullName ? 'Veronika Grebenshchikova.' : 'Veronika.'}</Name>
                <Things> Je crée des choses pour le web.</Things>
                <Txt>Après avoir travaillé dans le secteur paramédical, j'ai décidé de m'orienter et de me former dans le développement web. De la création d'interfaces dynamiques à la gestion complexe de bases de données, je m'épanouis en résolvant des problèmes et en apprenant de nouvelles choses.</Txt>
                
                <ScrollLink to={changeLinks} smooth={true} offset={-120}> 
                    <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration={2000} animationOutDuration={1000} isVisible={animatedButton}>
                        <MyButton>{props.changeName ? 'Projects' : 'Experiences'}</MyButton>
                    </Animated>
                </ScrollLink>
            </ContentWrapper>
        </Box>
    )
}

export default Home;

const Box = styled.div`
    height: calc(100vh + 20px);
    background: inherit;
    overflow: auto;
    padding: 10rem;
    margin-top: 100px;

    @media screen and (max-width:1000px){
        padding: 10rem 5rem;
    }
    @media screen and (max-width:768px){
        padding: 5rem 0rem;
    }
    @media screen and (max-width:400px){
        padding: 2rem;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: space-between;
    width: 80%;
    margin: auto;
`

const MyTitle = styled.h1`
    font-size: clamp(1.5rem, 2vw, 2rem);
    color: #64FFDA;
    margin: 2rem 7rem -4rem;
    padding: 4rem 2rem;

    @media screen and (max-width:1500px){
        padding: 0;
        margin: 0;
    }
`

const Name = styled.h1`
    color: #CCD6F6;
    font-size: clamp(2rem, 6vw, 3rem);
    margin: -2rem 8rem;
    padding: 15px;

    @media screen and (max-width:1500px){
        padding: 0;
        margin: 0;
    }

 `

const Txt = styled.section`
    color: #CCD6F6;
    margin: -1rem 8rem;
    padding: 1rem;
    text-align: left;

    @media screen and (max-width:1500px){
        padding: 0;
        margin: 0;
    }
`

const Things = styled.h1`
    color: #8892B0;
    font-size: clamp(1.5rem, 6vw, 3rem);
    margin: 1rem 9rem;
    padding: -2rem;

    @media screen and (max-width:1500px){
        padding: 0;
        margin: 0;
    }
    
`

const MyButton = styled.button`
    margin: 2rem 9rem;
    padding: 1.2rem;
    background: #0A192F;
    color: #64FFDA;
    border-color: #64FFDA;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
            transform: translateY(-1.5px);
            transition: all 0.3s ease-in-out;
            color: #0A192F;
            background: #64FFDA;
    }

    @media screen and (max-width:1500px){
        margin: 2rem 0;
    }
`

const ScrollLink = styled(Link)`
    width: fit-content;
`
