import React from "react"

import { HireMeContainer, HireMeTitle, Text, SocialContent, SocialIcon, Email } from "./styles"

function HireMe() {

    return (
        <>
            <HireMeContainer id="hireme">
                <HireMeTitle>Contrate-me!</HireMeTitle>
                <Text>Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver e evoluir na minha carreira profissional.</Text>
                <Text>
                    Email para contato: <Email onClick={() => window.open('mailto:contato@rosanarezende.com', '_self')}>rezende_rosana@hotmail.com</Email><br />
                    Celular: (27) 99967-2118
                </Text>
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
            </HireMeContainer>
        </>
    )
}

export default HireMe