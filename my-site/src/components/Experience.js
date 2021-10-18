import React, {  useState } from 'react';
import styled from 'styled-components/macro'
import { AiFillCaretRight } from "react-icons/ai";
import {Animated} from "react-animated-css";



function Experience() {

    const[animatedTitle, setAnimatedTitle] = useState(false);


    const visibleEffect = () => {
        if(window.scrollY > 300 && window.scrollY < 1200) {
            setAnimatedTitle(true)
          }
          else {
            setAnimatedTitle(false)
          }
    }

    document.addEventListener('scroll', visibleEffect)


    return (
        <Box>
            <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={850} animationOutDuration={850} isVisible={animatedTitle}><Formations id="experiences">Expériences</Formations></Animated> 
            <BigBox>
                <Line>
                    <About>
                        <NomEcole>O'clock</NomEcole>
                        <Date>février 2021 - août 2021</Date>
                    </About>
                    <Description>
                        <Liste><Logo><AiFillCaretRight /></Logo>Réalisation de sites web dynamiques et responsives</Liste>
                        <Liste><Logo><AiFillCaretRight /></Logo>Construction d'API sécurisée</Liste>
                        <Liste><Logo><AiFillCaretRight /></Logo>Manipulation de BDD</Liste>
                        <Liste><Logo><AiFillCaretRight /></Logo>Travail en équipe</Liste>
                    </Description>
                </Line>
                <Line>
                    <About>
                        <NomEcole>Institut Supérieur d'Optique (ISO), Lyon</NomEcole>
                        <Date>septembre 2016 - juillet 2018</Date>
                    </About>
                    <Description>
                        <Liste><Logo><AiFillCaretRight /></Logo>Mathématique et Optique Physique et Géométrique</Liste> 
                        <Liste><Logo><AiFillCaretRight /></Logo>Management et économie</Liste>
                        <Liste><Logo><AiFillCaretRight /></Logo>Examen de vue, montage des verres, prise de
                        mesures</Liste>
                    </Description>
                </Line>
                <Line>
                    <About>
                        <NomEcole>Université d'État de l'aviation civile, Saint-Pétersbourg, Russie</NomEcole>
                        <Date>septembre 2011 - juillet 2015</Date>
                    </About>
                    <Description>
                        <Liste><Logo><AiFillCaretRight /></Logo>Mathématiques et statistiques</Liste>
                        <Liste><Logo><AiFillCaretRight /></Logo>Technologies modernes du traitement de l'information</Liste>
                        <Liste><Logo><AiFillCaretRight /></Logo>Management de communication, marketing</Liste>
                    </Description>
                </Line>
            </BigBox>
        </Box>
    )
}

export default Experience

const Box = styled.div`
    background: inherit;
    color: #8892B0;
    padding: 2rem 2rem;
    text-align: center;
    font-size: 25px;
`
const BigBox = styled.div`
    display: grid;
`

const Formations = styled.h1`
    color: white;
    text-align: center;
    font-size: 40px;
    margin-bottom: 5%;
`

const NomEcole = styled.h3`
    font-size: 17px;
    align-self: center;
    color: #64FFDA;
    text-align: left;    
    padding-right: 2rem;
`

const Date = styled.h4`
    color: #8892B0;
    font-size: 14px;
    text-align: left;
    font-style: italic;
    margin-top:5%
`

const Description = styled.div`
    font-size: 17px;
    color: #8892B0;
    text-align: center;
    list-style: none;
`

const About = styled.div`
    color: #8892B0;
    padding: 0rem 2rem;
`

const Line = styled.div`
    grid-template-columns: 1fr 1fr;
    display: grid;
    justify-content: center;
    margin: 2rem auto;
    color: #8892B0;
    width: 60vw;

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }
`

const Liste = styled.li`
    list-style: none;
    display: flex;
    text-align: left;
    padding: 0 0.5rem 0.5rem 0;
`
const Logo = styled.div`
    color: #64FFDA;
    font-size: 15px;
    align-items: center;
    padding: 0 0.5rem 0rem 0;
`