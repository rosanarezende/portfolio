import React from "react"

import {
    HomeContainer, HomeContent,
    ImageBackdrop, ProfileImage,
    SocialContent, SocialIcon,
    Title, SubTitle, Text
} from "./styles"
import IconDown from "../../components/IconDown"

function Home() {

    return (
        <>
            <HomeContainer id="home">
                <ProfileImage />
                <ImageBackdrop />
                <HomeContent>
                    <Title>Eu sou</Title>
                    <Title>Rosana Rezende</Title>
                    <SubTitle>Desenvolvedora Web Full Stack</SubTitle>
                    <Text>Apaixonada por tecnologia e programação</Text>

                </HomeContent>
                <SocialContent>
                    <SocialIcon
                        src="https://user-images.githubusercontent.com/45580434/86546047-1ff54500-bf09-11ea-8d5c-cc69243528e4.png" alt="linkedin"
                        onClick={() => window.open('https://www.linkedin.com/in/rosanarezende/', '_blank')}
                    />
                    <SocialIcon
                        src="https://user-images.githubusercontent.com/45580434/86546051-24b9f900-bf09-11ea-8d74-119dbfd88d11.png" alt="whatsapp"
                        onClick={() => window.open('https://web.whatsapp.com/send?phone=+5527999672118', '_blank')}
                    />
                    <SocialIcon
                        src="https://user-images.githubusercontent.com/45580434/86546052-25528f80-bf09-11ea-8931-7c52658182d6.png" alt="github"
                        onClick={() => window.open('https://github.com/rosanarezende', '_blank')}
                    />
                    <SocialIcon
                        src="https://user-images.githubusercontent.com/45580434/86546054-25eb2600-bf09-11ea-8ac0-8c9d5d43dd45.png" alt="twitter"
                        onClick={() => window.open('https://twitter.com/rosanarezende_', '_blank')}
                    />
                    <SocialIcon
                        src="https://user-images.githubusercontent.com/45580434/86546055-25eb2600-bf09-11ea-9f7a-eb1c85bc73e6.png" alt="instagram"
                        onClick={() => window.open('https://www.instagram.com/rosanarezende_/', '_blank')}
                    />
                </SocialContent>
                <IconDown link="#about" />
            </HomeContainer>
        </>
    )

}

export default Home