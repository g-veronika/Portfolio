import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { IoColorPaletteSharp } from 'react-icons/io5';
import {Animated} from "react-animated-css";


function Footer(props) {

    const[animatedPalette, setAnimatedPalette] = useState(true);
    const[animatedGit, setAnimatedGit] = useState(false);
    const[animatedLinkedIn, setAnimatedLinkedIn] = useState(false);
    const[animatedInsta, setAnimatedInsta] = useState(false);
    const [visible, setVisible] = useState(false)

    const changeDark = (event) => {
        props.setPrimaryColor(true)
    }

    const changeLight = (event) => {
        props.setPrimaryColor(false)
    }


    
    const visibleEffect = () => {
            setAnimatedPalette(false)
    }
    document.addEventListener('scroll', visibleEffect)


    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
            setAnimatedGit(true)
        }, 400)
        setTimeout(() => {
            setAnimatedLinkedIn(true)
        }, 600)
        setTimeout(() => {
            setAnimatedInsta(true)
        }, 800)
    }, [])



    return (
        <Box>
            <Icons>

            <Animated animationIn="fadeInLeft" animationOut="fadeInLeft" animationInDuration={1400} animationOutDuration={1400} isVisible={animatedPalette}>        
                <ColorChoice>
                    <ColorPick onClick={changeDark}>< IoColorPaletteSharp css={'color: #0A192F'}/></ColorPick>
                    <ColorPick css={'color: #3e6eb5'}  onClick={changeLight}>< IoColorPaletteSharp/></ColorPick>
                 </ColorChoice>
            </Animated>
                {console.log(animatedGit)}
                <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={1400} animationOutDuration={1} isVisible={animatedGit}><Icon visible={visible}><Link href="https://github.com/g-veronika" target="_blank" rel="noreferrer"><AiFillGithub /></Link></Icon></Animated>
                <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={1400} animationOutDuration={1} isVisible={animatedLinkedIn}><Icon visible={visible}><a href="https://www.linkedin.com/in/veronika-grebenshchikova-735ba8214/" target="_blank" rel="noreferrer"><GrLinkedin /></a></Icon></Animated>
                <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" animationInDuration={1400} animationOutDuration={1} isVisible={animatedInsta}><Icon visible={visible}><a href="https://www.instagram.com/veronika.piletskaya/" target="_blank" rel="noreferrer"><GrInstagram /></a></Icon></Animated>           
            </Icons>
            <IconsMobile>
                <Icon><Link href="https://github.com/g-veronika" target="_blank" rel="noreferrer"><AiFillGithub /></Link></Icon>
                <Icon><a href="https://www.linkedin.com/in/veronika-grebenshchikova-735ba8214/" target="_blank" rel="noreferrer"><GrLinkedin /></a></Icon>
                <Icon><a href="https://www.instagram.com/veronika.piletskaya/" target="_blank" rel="noreferrer"><GrInstagram /></a></Icon>               
            </IconsMobile>
            <Mail><a href="mailto:gveronikaa@hotmail.com" rel="noreferrer">gveronikaa@hotmail.com</a></Mail>
            <MailMobile><a href="mailto:gveronikaa@hotmail.com" rel="noreferrer">gveronikaa@hotmail.com</a></MailMobile>
            Designed & Built by Veronika
        </Box>
    )
}

export default Footer

const Box = styled.div`
    background: #0A192F;
    color: #8892B0;
    padding: 2rem 2rem;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const ColorChoice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.7rem;
    border: 1px dotted #64FFDA;
    font-size: 1.2rem;
    background-color: rgb(95 237 224 / 70%);
    border-radius: 10px;
    
    svg {
        
    }
    
`

const ColorPick = styled.div`
    margin: 1rem 0;
    cursor: pointer;
`

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 10vh;
    color: #8892B0 !important;

    @media screen and (max-width:768px){
        display: none;
    }

`
const IconsMobile = styled.div`
    display: none;
    flex-direction: row;
    position: fixed;
    bottom: 10vh;
    color: #8892B0 !important;

    @media screen and (max-width:768px){
        display: flex;
        position: relative;
        justify-content: center;
        bottom: 0;
    }

`

const Icon = styled.div`
    display: flex ;
    visibility: ${({visible}) => visible ? 'visible' : 'hidden'};
    flex-direction: column;
    text-align: left;
    font-size: 1.5rem;
    padding: 0.7rem;
    cursor: pointer;
    
    transition: all 0.3s ease-in-out;
    color: #8892B0 !important;
    &:active {
        border: 1px dotted #64FFDA;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        }

    svg {
        color: #8892B0 ;
        transition: all 0.3s ease-in-out;
        &:hover {
        color: #64FFDA;
        transform: translateY(-3px);
        transition: all 0.3s ease-in-out;
        }
    }

`
const Mail = styled.div`
    color: #8892B0;
    display: flex;
    cursor: pointer;
    writing-mode: vertical-rl;
    transition: all 0.3s ease-in-out;
    flex-direction: column;
    position: fixed;
    bottom: 10vh;
    right: 0;
    margin-right: 2rem;
    
    a{ 
        color: #8892B0;
        text-decoration: none;
        font-size: 14px;
        font-family: Arial, Helvetica;
        transition: all 0.3s ease-in-out;

        &:hover {
        color: #64FFDA;
        transform: translateY(-3px);
        transition: all 0.3s ease-in-out;
        }
    }

    @media screen and (max-width:768px){
        display: none;
    }
`

const MailMobile = styled.div`
    color: #8892B0;
    display: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    flex-direction: column;
    position: fixed;
    margin: 1rem;
    
    a{ 
        color: #8892B0;
        text-decoration: none;
        font-size: 14px;
        font-family: Arial, Helvetica;
        transition: all 0.3s ease-in-out;

        &:hover {
        color: #64FFDA;
        transform: translateY(-3px);
        transition: all 0.3s ease-in-out;
        }
    }
    @media screen and (max-width:768px){
        display: flex;
        position: relative;
        justify-content: center;
        bottom: 0;
    }


`

const Link = styled.a`
`