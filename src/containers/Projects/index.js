import React from "react"

import { 
    ProjectsContainer,
    Title, Project, Image, 
    Model01, Model02, 
    ProjectTitle, Subtitle, Text, Button, ExternalLink, Bold
} from "./styles"

function Projects(){

    const myProjects = [
        {
            img: "https://user-images.githubusercontent.com/45580434/86523046-d9d2af80-be3c-11ea-8c6a-cd072f9cd4d6.gif",
            title: "Spotenu",
            subtitle: "Full-Stack",
            text1: "O Spotenu é um projeto que visa facilitar o acesso a músicas pelo mundo.",
            text2: "No front-end: HTML, CSS, Javascript, Node, React, Redux, Redux-Thunk, React Router, Material UI, Styled-components, Formulários com validação, Autenticação e autorização, Teste unitário, de lógica e de componentes, Responsividade e adaptação de aplicação web para front. No backend: Node, Typescript, Arquitetura MVC, MySQL, Knex, Express, Dotenv, UUID, Bcryptjs, Jsonwebtoken, Jest. Infraestrutura: Serviços Cloud AWS (EC2 - para o banco de dados | Lambda e API Gateway - para o banckend), Surge.sh (para o front).",
            cor: "#f2c12e",
            repositorio: "https://github.com/rosanarezende/Labenu-Projeto-FullStack",
            deploy: "http://spotenu.surge.sh/"
        },
        {
            img: "https://user-images.githubusercontent.com/45580434/79641732-bd917180-816f-11ea-810b-59ee03a3367b.gif",
            title: "iFuture",
            subtitle: "Front-end",
            text1: "Plataforma de delivery online.",
            text2: "HTML, CSS, Javascript, Node, React, Redux, Redux-Thunk, React Router, Material UI, Styled-components, Formulários com validação, Autenticação e autorização, Teste unitário, de lógica e de componentes, Responsividade e adaptação de aplicação web para front.",
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
            text1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa minima sit atque illo, totam facilis pariatur accusantium voluptatum ut rem sint, necessitatibus voluptas a cupiditate mollitia? Quasi, magni quisquam?",
            text2: "hahauihaia huahauhauilç dldldflfplf´f hsdhdjdkdld",
            cor: "#f2c12e",
            repositorio: "https://github.com/rosanarezende/Labenu-Projeto-BackEnd-LaBook"
        }
    ]

    return (
        <>
            <ProjectsContainer>
                <Title>Meus projetos</Title>

                {myProjects.map((item, index) => {
                    let model
                    if(index % 2 === 0){
                        model = (<Project>
                                <Image
                                    src={item.img}
                                    alt="Project"
                                />
                                <Model01>
                                    <ProjectTitle>{item.title}</ProjectTitle>
                                    <Subtitle>{item.subtitle}</Subtitle>
                                    <Text>{item.text1}</Text>
                                    {item.text2 && <Text><Bold>Principais linguagens, tecnologias e ferramentas utilizadas:</Bold><br/> {item.text2}</Text>}
                                    {item.deploy && <ExternalLink href={item.deploy} target="_blank" rel="noopener noreferrer">Deploy</ExternalLink>}
                                    <Button cor={item.cor}>
                                        <ExternalLink href={item.repositorio} target="_blank" rel="noopener noreferrer" cor="#ffff">
                                            ver no GitHub
                                        </ExternalLink>
                                    </Button>
                                </Model01>
                            </Project>)
                    }
                    else {
                        model = (<Project direcao="column">
                                <Model02>
                                    <ProjectTitle>{item.title}</ProjectTitle>
                                    <Subtitle>{item.subtitle}</Subtitle>
                                    <Text>{item.text1}</Text>
                                    {item.text2 && <Text><Bold>Principais linguagens, tecnologias e ferramentas utilizadas:</Bold><br/> {item.text2}</Text>}
                                    {item.deploy && <ExternalLink href={item.deploy} target="_blank" rel="noopener noreferrer">Deploy</ExternalLink>}
                                    <Button cor={item.cor}>
                                        <ExternalLink href={item.repositorio} target="_blank" rel="noopener noreferrer" cor="#ffff">
                                            ver no GitHub
                                        </ExternalLink>
                                    </Button>
                                </Model02>
                                <Image
                                    src={item.img}
                                    alt="Project"
                                />
                            </Project>)
                    }

                    return model
                })}

                <div>
                    <Button cor="#60a080">
                        <ExternalLink href="https://github.com/rosanarezende" target="_blank" rel="noopener noreferrer" cor="#ffff">
                            mais projetos
                        </ExternalLink>
                    </Button>
                </div>

            </ProjectsContainer>
        </>
    )
}

export default Projects