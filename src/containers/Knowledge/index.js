import React from "react"

import {
    KnowledgeContainer, Title, KnowledgeContent, Type, SubTitle, WordsContainer, Word
} from "./styles"
import IconDown from "../../components/IconDown"

function Knowledge(){

    const front = ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL", "Node", "React", "Redux", "Redux-Thunk", "React Router", "Material UI", "Styled-components", "Formulários com validação", "Autenticação", "Autorização", "Testes (unitário, de lógica e de componentes", "Responsividade", "Surge.sh", "Netlify"]

    const back = ["Node", "Typescript", "Arquitetura MVC", "MySQL", "Knex", "Express", "Dotenv", "UUID", "Bcryptjs", "Jsonwebtoken", "Jest", "Rest API", "AWS (EC2, Lambda e API Gateway)"]

    return (
        <>
            <KnowledgeContainer id="knowledge">
                <Title>Meus conhecimentos</Title>
                <KnowledgeContent>
                    <Type>
                        <SubTitle>Front-end</SubTitle>
                        <WordsContainer>
                            {front.map((word, index) => <Word key={index}>{word}</Word>)}
                        </WordsContainer>
                    </Type>
                    <Type>
                        <SubTitle>Back-end</SubTitle>
                        <WordsContainer>
                            {back.map((word, index) => <Word key={index}>{word}</Word>)}
                        </WordsContainer>
                    </Type>
                </KnowledgeContent>
                <IconDown link="#education"/>
            </KnowledgeContainer>
        </>
    )
}

export default Knowledge