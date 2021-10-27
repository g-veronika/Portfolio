import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Paris from '../photos/Paris.png'
import {Animated} from "react-animated-css";



function Work(props) {


    const[animatedWork, setAnimatedWork] = useState(false);
    const[animatedImg, setAnimatedImg] = useState(false);


    const visibleEffect = () => {
        if(window.scrollY > 1000 && window.scrollY < 1750) {
            setAnimatedWork(true)
          }
          else {
            setAnimatedWork(false)
          }
    }

    document.addEventListener('scroll', visibleEffect);


    const visibleImg = () => {
        if(window.scrollY > 1300 && window.scrollY < 7000) {
            setAnimatedImg(true)
          }
          else {
            setAnimatedImg(false)
          }
    }


    document.addEventListener('scroll', visibleImg);
    
    return (
        <Box>
            <Animated animationIn="fadeInRight" animationOut="fadeOutLeft" animationInDuration={850} animationOutDuration={850} isVisible={animatedWork}><Titre id="projets">Projets</Titre></Animated>
            <Imgtitre>Project 'Days In Paris'</Imgtitre>
            <Lien>
                <LinkUn href="https://daysinparis.netlify.app/" target="_blank" rel="noreferrer" >https://daysinparis.netlify.app/</LinkUn>
            </Lien>
            <Datetitre>juillet 2021 - août 2021</Datetitre>
            <Animated animationIn="fadeInUp" animationOut="fadeOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={animatedImg}>
                <a href="https://daysinparis.netlify.app/" target="_blank" rel="noreferrer"><Img src= {Paris} alt="image days in paris"/></a>
            </Animated>
            <Description>Le projet Days in Paris a pour but de créer une application qui permette à l’utilisateur d'organiser son séjour à Paris.
            L'utilisateur peut choisir des événements (expositions, concerts, spectacles, ...), des restaurants ou des monuments à visiter puis peut ensuite les répartir sur un calendrier pour avoir une bonne visibilité de son séjour et avoir une organisation optimale.
            </Description>
        </Box>
    )
}

export default Work

const Box = styled.div`
    background: inherit;
    color: #8892B0;
    padding: 2rem 2rem;
    text-align: center;
    font-size: 25px;
`
const Titre = styled.h1`
    color: white;
    text-align: center;
    font-size: 40px;
    margin-bottom: 5%;
`

const Img = styled.img`
    width: 50%;
`
const Imgtitre = styled.h2`
    margin: 2rem 0;
    font-size: 20px;
`
const Datetitre = styled.h3`
    font-size: 16px;
    margin: 1rem;
    padding: 0;
`

const Lien = styled.div`
    font-size: 20px;
    margin: 1rem 0 0 0;
    color: white !important;
    transition: all 0.3s ease-in-out;

    a {
        color: white;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover { 
            color: #64FFDA !important;
            transform: translateY(-3px);
            transition: all 0.3s ease-in-out;
        }
    
    }

   
`

const LinkUn = styled.a`
    text-decoration: none;
    cursor: pointer; 
    
`
const Description = styled.div`
    font-size: 20px;
    color: white;
    padding: 5% 10%;
    text-align: center;
`

