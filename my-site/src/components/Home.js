import React from 'react'
import styled from 'styled-components/macro'
import {Link} from 'react-scroll'

function Home() {
    return (
        <Box id="accueil">
            <ContentWrapper>
                <MyTitle>Bonjour, je m'appelle</MyTitle>
                <Name>Veronika.</Name>
                <Things> Je crée des choses pour le web.</Things>
                <Txt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Txt>
                <ScrollLink to="experiences" smooth={true} offset={-120}><MyButton>Expériences</MyButton></ScrollLink>
            </ContentWrapper>
        </Box>
    )
}

export default Home;

const Box = styled.div`
    height: calc(100vh + 20px);
    background: #0A192F;
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

`
