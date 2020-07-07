import React from "react"

import {
    AboutContainer,
    AboutContent, AboutTitle, AboutText,
    WordsContainer, Word, Separator,
    CVButton,
    ImageContent, Image
} from "./styles"

function About() {

    const words = ["JavaScript", "TypeScript", "SQL", "Node", "React", "Redux", "Rest API"]

    return (
        <>
            <AboutContainer id="about">
                <AboutContent>
                    <AboutTitle>Sobre mim</AboutTitle>
                    <AboutText>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quia totam deserunt esse error, quas tempore veniam harum quidem? Ex sapiente officiis deleniti minus accusamus, natus in rem? Nemo, nesciunt.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rerum earum consequuntur distinctio cupiditate reiciendis nisi dolore architecto doloremque nobis fugit veniam, quibusdam facilis, inventore aperiam officia. Saepe, non repellendus.
                </AboutText>
                    <WordsContainer>
                        {words.map(item => (
                            <div key={item}>
                                <Separator>I</Separator>
                                <Word>{item}</Word>
                            </div>
                        ))}
                    </WordsContainer>
                    <div>
                        <CVButton>CV em PDF</CVButton>
                    </div>
                </AboutContent>
                <ImageContent>
                    <Image
                        src="https://user-images.githubusercontent.com/45580434/86611887-b23b2e80-bf85-11ea-87ad-14fcddb8d2de.png"
                        alt="Rosana"
                    />
                </ImageContent>
            </AboutContainer>
        </>
    )
}

export default About