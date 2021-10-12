import React from 'react'
import styled from 'styled-components/macro'
import { AiFillCaretRight } from "react-icons/ai";


function Experience() {
    return (
        <Box>
            <Formations>Experience</Formations> 
            <Line><NomEcole>O'clock</NomEcole><Description><Logo><AiFillCaretRight /></Logo>Réalisation de sites web dynamiques et responsives<br />
            <Logo><AiFillCaretRight /></Logo>Construction d'API sécurisée<br />
            <Logo><AiFillCaretRight /></Logo>Manipulation de BDD<br />
            <Logo><AiFillCaretRight /></Logo>Travail en équipe</Description></Line>
            <Line><NomEcole>Institut Supérieur d'Optique (ISO), Lyon</NomEcole><Description><Logo><AiFillCaretRight /></Logo>Mathématique et Optique Physique et Géométrique <br />
            <Logo><AiFillCaretRight /></Logo>Management et économie<br />
            <Logo><AiFillCaretRight /></Logo>Examen de vue, montage des verres, prise de
            mesures</Description></Line>
            <Line><NomEcole>Université d'État de l'aviation civile, Saint-Pétersbourg, Russie</NomEcole><Description><Logo><AiFillCaretRight /></Logo>Mathématiques et statistiques<br />
            <Logo><AiFillCaretRight /></Logo>Technologies modernes du traitement de
            l'information<br />
            <Logo><AiFillCaretRight /></Logo>Management de communication, marketing</Description></Line>
        </Box>
    )
}

export default Experience

const Box = styled.h2`
    background: #0A192F;
    color: #8892B0;
    padding: 2rem 2rem;
    text-align: center;
    font-size: 25px;
`

const Formations = styled.h2`
    margin-bottom: 2rem;
    color: #8892B0;
    text-align: center;
    font-size: 25px;
`

const NomEcole = styled.h3`
    font-size: 20px;
    color: #64FFDA;
    text-align: left;    
`
const Description = styled.div`
    font-size: 20px;
    color: #8892B0;
    text-align: center;
    list-style: none;
`
const Line = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: #8892B0;
`
const Logo = styled.div`
    color: #64FFDA;
    font-size: 15px;
`