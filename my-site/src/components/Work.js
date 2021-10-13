import React from 'react'
import styled from 'styled-components/macro'
import Paris from '../photos/Paris.png'

function Work() {
    return (
        <Box>
            <Titre>Work</Titre>
            <Imgtitre>Project 'Days In Paris'</Imgtitre>
            <Lien><Link href="https://days-in-paris.netlify.app/" target="_blank">https://days-in-paris.netlify.app/</Link></Lien>
            <Datetitre>juillet 2021 - août 2021</Datetitre>
            <Img src= {Paris} alt="image days in paris"/>
            <Description>Le projet Days in Paris a pour but de créer une application qui permette à l’utilisateur d'organiser son séjour à Paris.
            L'utilisateur peut choisir des événements (expositions, concerts, spectacles, ...), des restaurants ou des monuments à visiter puis peut ensuite les répartir sur un calendrier pour avoir une bonne visibilité de son séjour et avoir une organisation optimale.
            </Description>
        </Box>
    )
}

export default Work

const Box = styled.div`
    background: #0A192F;
    color: #8892B0;
    padding: 2rem 2rem;
    text-align: center;
    font-size: 25px;
`
const Titre = styled.h1`
    margin-bottom: 2rem;
    color: #8892B0;
    text-align: center;
    font-size: 30px;
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

const Lien = styled.h1`
    font-size: 20px;
    margin: 1rem 0 0 0;
    color: #64FFDA;
    
`

const Link = styled.a`
    font-size: 20px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
`
const Description = styled.div`
    font-size: 20px;
    color: white;
    padding: 5% 10%;
    text-align: center;
`
