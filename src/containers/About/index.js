import React from "react"

import {
    AboutContainer,
    AboutContent, AboutTitle, AboutText,
    WordsContainer, Word, Separator,
    CVButton,
    ImageContent, Image,
    Underline, Bold
} from "./styles"
import IconDown from "../../components/IconDown"

function About() {

    const words = ["Git", "GitHub", "HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL", "Node", "React", "Redux", "Rest API", "AWS"]

    return (
        <>
            <AboutContainer id="about">
                <AboutContent>
                    <AboutTitle>Sobre mim</AboutTitle>
                    <AboutText>Com background jurídico (advocacia empresarial por 9 anos) e tendo experimentado a fotografia profissional (2 anos), descobri na tecnologia ferramentas capazes de transformar realidades.</AboutText>
                    <AboutText>A transição de carreira tem sido recheada de <Bold>estudo</Bold> e <Bold>experiências práticas</Bold>.</AboutText>
                    <AboutText>Estudiosa ávida, iniciei muitos MOOCs, finalizei alguns, porque decidi que precisaria experimentar um pouco de cada área de interesse para descobrir como fazer diferença no mundo e ao mesmo tempo ser feliz.</AboutText>
                    <AboutText>Mais recentemente, concluí o <Underline>AceleraDev React da Codenation</Underline> e estou finalizando o bootcamp de <Underline>Desenvolvimento Web Full Stack na Labenu</Underline> (quase 1000 horas de código, muitas conquistas e aprendizados que levarei para a vida), além de estar cursando o <Underline>MBA de gestão: inteligência de negócios digitais, na FGV</Underline>.</AboutText>
                    <AboutText>Acredito que o <Bold>aprendizado contínuo</Bold> é um processo cada vez mais real nas nossas vidas, e no ambiente tecnológico tenho encontrado muitos pares que se interessam por ensinar e aprender tanto quanto eu.</AboutText>
                    <AboutText>Procuro retribuir o quanto tenho ganhado com tantas pessoas e experiências nessa jornada. Vamos juntos!
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
                        <CVButton onClick={() => window.open('https://github.com/rosanarezende/portfolio/files/4885956/curriculo-Rosana.Carolino.Rezende.pdf', '_blank')}>CV em PDF</CVButton>
                    </div>
                </AboutContent>
                <ImageContent>
                    <Image
                        src="https://user-images.githubusercontent.com/45580434/86611887-b23b2e80-bf85-11ea-87ad-14fcddb8d2de.png"
                        alt="Rosana"
                    />
                </ImageContent>
                <IconDown link="#knowledge"/>
            </AboutContainer>
        </>
    )
}

export default About