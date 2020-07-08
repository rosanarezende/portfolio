import React from "react"

import {
    EducationContainer, Title,
    Left, Center, Rigth,
    SubTitle, Text, Bold, Underline, ExternalLink, Line
} from "./styles"
import IconDown from "../../components/IconDown"

function Education() {

    return (
        <>
            <EducationContainer id="education">
                <Title>Educação</Title>
                <Left>
                    <SubTitle>AceleraDev React, na Codenation</SubTitle>
                    <Text>
                        Programa de formação de profissionais da área de desenvolvimento de software, com carga horária de 80 horas, com exercícios práticos de programação focados na realidade do mercado.
                    </Text>
                    <Text>
                        <Underline>Temas abordados</Underline>: HTML, CSS, Atomic Desig, Javascript (Funcional e Orientado a Objetos), React, Hooks, Redux, Router, Componentização, Lifecycle, Testes, CI/CD, PWA, Build e Deploy, etc.
                    </Text>
                    <Text>
                        <Underline>Repositório</Underline>: <ExternalLink href="https://github.com/rosanarezende/Codenation-Fashionista-Ecommerce" target="_blank" rel="noopener noreferrer">projeto prático</ExternalLink>
                    </Text>
                </Left>
                <Center>
                    <SubTitle>Desenvolvimento Web Full-Stack, na Labenu</SubTitle>
                    <Text>
                        Bootcamp com duração de 6 meses em período integral (mais de 1000 horas de código), focado no desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.
                    </Text>
                    <Text>
                        <Underline>Temas abordados</Underline>:<br />
                        <Line><Bold>No front-end</Bold>: HTML, CSS, Javascript, Node, React, Redux, Redux-Thunk, React Router, Material UI, Styled-components, Formulários com validação, Autenticação e autorização, Teste unitário, de lógica e de componentes, Responsividade e adaptação de aplicação web para front.</Line>
                        <Line><Bold>No backend</Bold>: Node, Typescript, Arquitetura MVC, MySQL, Knex, Express, Dotenv, UUID, Bcryptjs, Jsonwebtoken, Jest.</Line>
                        <Line><Bold>Infraestrutura</Bold>: Serviços Cloud AWS (EC2 - para o banco de dados | Lambda e API Gateway - para o banckend), Surge.sh (para o front).</Line>
                    </Text>
                    <Text>
                        <Underline>Repositório</Underline>: <ExternalLink href="https://github.com/future4code/Rosana-Rezende" target="_blank" rel="noopener noreferrer">projetos desenvolvidos</ExternalLink>
                    </Text>
                </Center>
                <Rigth>
                    <SubTitle>MBA em gestão: inteligência de negócios digitais, na FGV</SubTitle>
                    <Text>
                        O MBA, desenvolvido pela Fundação Getúlio Vargas, visa boas práticas às plataformas digitais, suas implicações nas organizações e no comportamento dos consumidores.
                    </Text>
                    <Text>
                        <Underline>NÚCLEO GESTÃO</Underline>:<br/>
                        Gestão Estratégica, Gestão de Pessoas na Sociedade do Conhecimento, Matemática Financeira, Contabilidade Financeira, Economia Empresarial, Fundamentos de Gerenciamento de Projetos, Marketing, Negociação e Administração de Conflitos, Jogos de Negócios.
                    </Text>
                    <Text>
                        <Underline>NÚCLEO INTELIGÊNCIA EM NEGÓCIOS DIGITAIS</Underline>:<br/>
                        Métodos de Pesquisa para Internet e Consumer Insights, Gestão de Projetos Digitais, Inteligência Competitiva e Modelos de Negócios Digitais, Digital Branding, Advocacy, Relações de Consumo e Propriedade Intelectual, Gestão das Tecnologias Digitais, Gestão de Conteúdo em Mídias Digitais, Web Analytics e Inteligência Competitiva em Ambientes de Big Data, Desenvolvimento de Carreira.
                    </Text>
                    <Text>
                    <Underline>Nota parcial</Underline> (curso em andamento): <ExternalLink href="https://mmurad.com.br/cursos/pos-graduacao-mba/inteligencia-em-negocios-digitais/" target="_blank" rel="noopener noreferrer">9.3</ExternalLink>
                    </Text>
                </Rigth>
                <IconDown link="#projects" />
            </EducationContainer>
        </>
    )
}

export default Education