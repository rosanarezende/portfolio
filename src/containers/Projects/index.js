import React from "react"

import { ProjectsContainer, Title, Project, Image, Model01, Model02, ProjectTitle, Subtitle, Text, Button, ExternalLink } from "./styles"
import IconDown from "../../components/IconDown"

function Projects() {

    const myProjects = [
        {
            img: "https://user-images.githubusercontent.com/45580434/86777054-1665fd00-c02f-11ea-93c3-3cdc4e9b0ae9.png",
            title: "Spotenu",
            subtitle: "Full-Stack",
            text1: "Projeto que visa facilitar o acesso a músicas pelo mundo.",
            cor: "#f2c12e",
            repositorio: "https://github.com/rosanarezende/Labenu-Projeto-FullStack",
            deploy: "http://spotenu.surge.sh/"
        },
        {
            img: "https://user-images.githubusercontent.com/45580434/79641732-bd917180-816f-11ea-810b-59ee03a3367b.gif",
            title: "iFuture",
            subtitle: "Front-end",
            text1: "Plataforma de delivery online.",
            cor: "#d9a87e",
            repositorio: "https://github.com/rosanarezende/Labenu-Projeto-FrontEnd-iFuture",
            deploy: "http://ifuture-sagan.surge.sh/"
        },
        {
            img: "https://user-images.githubusercontent.com/45580434/78464747-77de9e80-76c3-11ea-9329-1e083568e5b1.gif",
            title: "4eddit",
            subtitle: "Front-end",
            text1: "Rede social baseada no reddit.com.",
            cor: "#e28d8c",
            repositorio: "https://github.com/rosanarezende/Labenu-Projeto-FrontEnd-4eddit",
            deploy: "http://4eddit-sagan3.surge.sh/"
        },
        {
            img: "https://user-images.githubusercontent.com/45580434/86777054-1665fd00-c02f-11ea-93c3-3cdc4e9b0ae9.png",
            title: "LaBook",
            subtitle: "Backend-end",
            text1: "Rede social baseada no Facebook.",
            cor: "#f2c12e",
            repositorio: "https://github.com/rosanarezende/Labenu-Projeto-BackEnd-LaBook"
        }
    ]

    return (
        <>
            <ProjectsContainer id="projects">
                <Title>Meus projetos</Title>

                {myProjects.map((item, index) => {
                    if (index % 2 === 0) {
                        return (<Project key={index}>
                            <Image src={item.img} alt="Project"/>
                            <Model01>
                                <ProjectTitle>{item.title}</ProjectTitle>
                                <Subtitle>{item.subtitle}</Subtitle>
                                <Text>{item.text1}</Text>
                                {item.deploy && <ExternalLink href={item.deploy} target="_blank" rel="noopener noreferrer">Deploy</ExternalLink>}
                                <Button cor={item.cor} onClick={() => window.open(item.repositorio, '_blank')}>ver no GitHub</Button>
                            </Model01>
                        </Project>)
                    }
                    else {
                        return (<Project direcao="column" key={index}>
                            <Model02>
                                <ProjectTitle>{item.title}</ProjectTitle>
                                <Subtitle>{item.subtitle}</Subtitle>
                                <Text>{item.text1}</Text>
                                {item.deploy && <ExternalLink href={item.deploy} target="_blank" rel="noopener noreferrer">Deploy</ExternalLink>}
                                <Button cor={item.cor} onClick={() => window.open(item.repositorio, '_blank')}>ver no GitHub</Button>
                            </Model02>
                            <Image src={item.img} alt="Project"/>
                        </Project>)
                    }
                })}

                <Button cor="#60a080" onClick={() => window.open('https://github.com/rosanarezende', '_blank')}>
                    mais projetos
                </Button>
                <IconDown link="#hireme"/>
            </ProjectsContainer>
        </>
    )
}

export default Projects