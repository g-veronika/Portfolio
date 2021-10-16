import React, { useEffect, useState } from 'react';
import { AiTwotoneHeart } from "react-icons/ai";
import styled from 'styled-components/macro'
import {Link} from 'react-scroll'
import {BiMenuAltRight} from "react-icons/bi";
import {ImCross} from "react-icons/im"; 
import {Animated} from "react-animated-css";




const Header = (props) => {
    
    const [animAcceuil, setAnimAcceuil] = useState(false);
    const [animExp, setAnimExp] = useState(false);
    const [animProj, setAnimProj] = useState(false);
    const [active, setActive] = useState(false);
    const[animatedButton, setAnimatedButton] = useState(false);


    const handleClick = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        } 
    }


    const visibleEffect = () => {
        if(window.scrollY > 500) {
            setAnimatedButton(false)
          }
          else {
            setAnimatedButton(true)
          }
    }
    document.addEventListener('scroll', visibleEffect);


    useEffect(() => {
        setTimeout(() => {
            setAnimAcceuil(true)
        }, 400)
        setTimeout(() => {
            setAnimExp(true)
        }, 600)
        setTimeout(() => {
            setAnimProj(true)
        }, 800)
        setTimeout(() => {
            setAnimatedButton(true)
        }, 800)
    }, [])



    return (
        <Nav small={props.smallHeader}>
            
            <Logo to="accueil" smooth={true} offset={-100}><AiTwotoneHeart /></Logo>
            <LogoMobile onClick={handleClick}><BiMenuAltRight /></LogoMobile>
            <Menu>             
            <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration={2000} animationOutDuration={1000} isVisible={animAcceuil}>
                <ScrollLink to="accueil" smooth={true} offset={-100}><li>Accueil</li></ScrollLink>
            </Animated>    
            <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration={2000} animationOutDuration={1000} isVisible={animExp}>    
                <ScrollLink to="experiences" smooth={true} offset={-120}><li>Expériences</li></ScrollLink>
            </Animated>
            <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration={2000} animationOutDuration={1000} isVisible={animProj}>    
                <ScrollLink to="projets" smooth={true} offset={-120}><li>Projets</li></ScrollLink>
            </Animated>    
                <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration={2000} animationOutDuration={1000} isVisible={animatedButton}>
                    <MyBtn><ScrollLink to="contact" smooth={true} offset={-100}><li>Contact</li></ScrollLink></MyBtn>
                </Animated>
            </Menu>
            <MenuMobile active={active}>
                <Close onClick={handleClick}><ImCross /></Close>
                <Links>
                    <MobileLink to="accueil" smooth={true} offset={-100} onClick={handleClick}>Accueil</MobileLink>
                    <MobileLink to="experiences" smooth={true} offset={-120} onClick={handleClick}>Expériences</MobileLink>
                    <MobileLink to="projets" smooth={true} offset={-120} onClick={handleClick}>Projets</MobileLink>
                    <MobileLink to="projets" smooth={true} offset={-120} onClick={handleClick}>Projets</MobileLink>
                </Links>
            </MenuMobile>
        </Nav>
    )
}

export default Header;

const Nav = styled.div`
    height: ${({small}) => small ? '60px' : '100px'};
    background: #0A192F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    transition: all 0.6s ease;
`
const Menu = styled.nav`
    color: #CCD6F6;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;



    li {
        list-style: none;
        margin: 0 1rem;
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

const MenuMobile = styled.div`
    display: ${({active}) => active ? 'flex' : 'none'};

    @media screen and (max-width:768px){
        z-index: 10;
        background: #0A192F;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        color: white;
    }
`

const Logo = styled(Link)`
    color: #64FFDA;
    font-size: 2rem;
    padding: 2rem 2.7rem;
    cursor: pointer;

    svg {
        transition: all 0.3s ease-in-out;

        &:hover {
            transform: translateY(-3px);
            transition: all 0.3s ease-in-out;
        }
    }

    
    
`

const LogoMobile = styled.div`
    display:none;
    color: white;
    margin: 0 2rem;
    font-size: 3rem;
    cursor: pointer;

    @media screen and (max-width:768px){
        display: flex;
    }
`

const MyBtn = styled.button`
    margin: -0.8rem 1rem;
    padding: 0.6rem 0.5rem;
    background: #0A192F;
    color: #64FFDA;
    border-color: #64FFDA;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;


    &:hover {
            color: #64FFDA;
            transform: translateY(-3px);
            transition: all 0.3s ease-in-out;
        }
`

const ScrollLink = styled(Link)`

`

const MobileLink = styled(Link)`
    cursor: pointer;
    font-size: 2rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #64FFDA;
        transition: all 0.3s ease-in-out;
    }
`
const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    
`

const Close = styled.div`
    cursor: pointer;
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: 3rem;
`