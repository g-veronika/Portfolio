import React from 'react'
import styled from 'styled-components/macro'


function Home() {
    return (
        <Box>
            <MyTitle>Hi, my name is</MyTitle>
            <Name>Veronika.</Name>
            <Things>I build things for the web.</Things>
            <Txt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Txt>
            <MyButton>Check out my cours!</MyButton>
        </Box>
    )
}

export default Home;

const Box = styled.div`
    height: calc(100vh - 100px);
    background: #0A192F;
    overflow: auto;
    padding: 6rem
`

const MyTitle = styled.h1`
    font-size: 20px;
    color: #64FFDA;
    margin: 2rem 7rem -4rem;
    padding: 4rem 2rem;
`

const Name = styled.h1`
    color: #CCD6F6;
    font-size: 50px;
    margin: -2rem 8rem;
    padding: 15px;

 `

const Txt = styled.section`
    color: #CCD6F6;
    margin: -1rem 8rem;
    padding: 1rem;
    text-align: left;
`

const Things = styled.h1`
    color: #8892B0;
    font-size: 50px;
    margin: 1rem 9rem;
    padding: -2rem;
    
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
`
