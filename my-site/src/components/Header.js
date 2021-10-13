import React from 'react'
import { AiTwotoneHeart } from "react-icons/ai";
import styled from 'styled-components/macro'
import {Link} from 'react-scroll'



const Header = () => {
    return (
        <Nav>
            <Logo><AiTwotoneHeart /></Logo>
            <Menu>
                <ScrollLink to="accueil" smooth={true} offset={-100}><li>Accueil</li></ScrollLink>
                <ScrollLink to="experiences" smooth={true} offset={-100}><li>Expériences</li></ScrollLink>
                <ScrollLink to="projets" smooth={true} offset={-100}><li>Projets</li></ScrollLink>
 
                <MyBtn>Contact</MyBtn>
            </Menu>
        </Nav>
    )
}

export default Header;

const Nav = styled.div`
    height: 100px;
    background: #0A192F;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

`
const Logo = styled.div`
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
