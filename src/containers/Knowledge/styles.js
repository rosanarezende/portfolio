import styled from "styled-components"

export const KnowledgeContainer = styled.div`
    min-height: 72vh;
    margin: 0;
    padding: 8vh 20vw 6vh;
    background-color: #04c0ad;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
    @media screen and (max-device-width: 1200px){
        padding: 8vh 5vw 6vh;
    }
`

export const Title = styled.h2`
    font-size: 3.5em;
    margin-bottom: 7vh;
    @media screen and (max-device-width: 1200px){
        margin-bottom: 1vh;
        font-size: 1.5em;
    }
`

export const KnowledgeContent = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-device-width: 1200px){
        flex-direction: column;
    }
`

export const Type = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    @media screen and (max-device-width: 1200px){
        width: 100%;
        margin: 2.5vh 0;
    }
`

export const SubTitle = styled.h3`
    font-size: 5em;
    font-weight: bold;
    margin-bottom: 3.5vh;
    text-align: center;
    @media screen and (max-device-width: 1200px){
        margin-bottom: 2vh;
        font-size: 2em;
    }
`

export const WordsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Word = styled.button`
    width: auto;
    padding: 0 1vw;
    margin: 1vh 1vw;

    outline: 0;
    background: #ffff;
    color: #5a3b3b;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 8px;
    font-size: 1em;
    height: 3vh;

    &:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.9);
        font-weight: bold;
    }

    @media screen and (max-device-width: 1200px){
        font-size: 0.9em;
        padding: 0 2vw;
    }
`