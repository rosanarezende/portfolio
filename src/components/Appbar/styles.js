import styled from "styled-components"
import { AppBar } from "@material-ui/core"

export const AppBarStyled = styled(AppBar)`
    justify-content: center;
    height: 8vh;
    padding: 0 2vw;
    margin: 0;
`

export const Logo = styled.img`
    height: 6.5vh;
    margin-top: 1vh;
    filter: brightness(5);
    cursor: pointer;
`

export const DivGrow = styled.div`
    display: flex;
    flex-grow: 1;
`

export const SectionDesktop = styled.div`
    display: flex;

    @media screen and (max-device-width: 1200px){
        display: none;
    }
`

export const SectionMobile = styled.div`
    display: none;

    @media screen and (max-device-width: 1200px){
        display: flex;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-device-width: 1200px){
        flex-direction: column;
    }
`

export const LinkStyled = styled.a`
    color: #5a3b3b;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5em;
    margin-left: 2vw;

    &:hover, &:active {
        color: whitesmoke; 
    }

    @media screen and (max-device-width: 1200px){
        font-size: 1em;
        margin: 1vh 1vw;
        padding: 1vh 1vw;
    }
`
