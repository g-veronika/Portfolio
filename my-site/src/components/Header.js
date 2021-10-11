import React from 'react'
import { AiTwotoneHeart } from "react-icons/ai";
import styled from 'styled-components/macro'



const Header = () => {
    return (
        <Nav>
            <Logo><AiTwotoneHeart /></Logo>
            <Menu>
                <li>About</li>
                <li>Experience</li>
                <li>Work</li>
                <li>Contact</li>   
                <MyBtn>Resume</MyBtn>
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


    li {
        list-style: none;
        margin: 0 1rem;
    }
`
const Logo = styled.div`
    color: #64FFDA;
    font-size: 2rem;
    padding: 2rem 2.7rem;

`

const MyBtn = styled.button`
    margin: -0.8rem 1rem;
    padding: 0.6rem 0.5rem;
    background: #0A192F;
    color: #64FFDA;
    border-color: #64FFDA;
    border-radius: 0.3rem;
    cursor: pointer;
`
