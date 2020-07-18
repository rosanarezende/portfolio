import styled from "styled-components"

export const HomeContainer = styled.div`
    height: 100vh;
    background-color: #da8b2a;
    display: flex;

    @media screen and (max-device-width: 1200px){
        flex-direction: column;
    }
`

export const ProfileImage = styled.div`
    background-image: url("https://user-images.githubusercontent.com/45580434/86545304-55e3fa80-bf04-11ea-94a3-a05827c972e5.jpg");
    /* background-image: url("https://user-images.githubusercontent.com/45580434/86545388-f0443e00-bf04-11ea-982e-386c93da696a.jpg"); */
    /* background-image: url("https://user-images.githubusercontent.com/45580434/86545454-7d879280-bf05-11ea-9f92-e8aad1389166.jpg"); */
    background-color: #da8b2a;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;
    position: relative;
    height: 100vh;
    width: 50vw;

    @media screen and (max-device-width: 1200px){
        width: 100vw;
    }
`

export const ImageBackdrop = styled.div`
    position: absolute;
    width: 50vw;
    height: 100vh;
    background-image: linear-gradient(to right, rgba(218, 139, 42, 0.41), #da8b2a);
    z-index: 1;

    @media screen and (max-device-width: 1200px){
        width: 100vw;
        background-image: linear-gradient(to bottom, rgba(218, 139, 42, 0.51), rgba(218, 139, 42, 0.85));
    }
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45vw;
    padding: 0 5vw 0 2vw;
    color: white;

    @media screen and (max-device-width: 1200px){
        position: absolute;
        margin-top: 18vh;
        height: 80vh;
        width: 100vw;
        padding: 0 5vw;
        z-index: 2;
    }
`

export const Title = styled.h1`
    font-size: 5em;
    font-weight: bold;
    @media screen and (max-device-width: 1200px){
        font-size: 2.5em;
    }
`

export const SubTitle = styled.h2`
    font-size: 3em;
    margin: 1vh 0 6vh;
    @media screen and (max-device-width: 1200px){
        font-size: 1.5em;
    }
`

export const Text = styled.h3`
    font-size: 1.5em;
    @media screen and (max-device-width: 1200px){
        font-size: 1em;
    }
`

export const SocialContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 5vw;
    height: 40vh;
    margin: auto 2vw auto 0;

    @media screen and (max-device-width: 1200px){
        flex-direction: row;
        position: absolute;
        margin-top: 10vh;
        height: 8vh;
        width: 100vw;
        padding: 0 10vw;
        z-index: 2;
    }
`

export const SocialIcon = styled.img`
    cursor: pointer;
    width: 2.5vw;

    @media screen and (max-device-width: 1200px){
        width: auto;
        height: 40%;
    }
`
