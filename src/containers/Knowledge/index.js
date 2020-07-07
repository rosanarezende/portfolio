import React from "react"

import {
    KnowledgeContainer, Title, KnowledgeContent, Type, SubTitle, Text
} from "./styles"

function Knowledge(){

    return (
        <>
            <KnowledgeContainer>
                <Title>Meus conhecimentos</Title>
                <KnowledgeContent>
                    <Type>
                        <SubTitle>Front-end</SubTitle>
                        <Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, ipsum! Incidunt exercitationem suscipit nemo voluptatem repellendus laborum!
                        </Text>
                        <Text>
                            Oie
                        </Text>
                    </Type>
                    
                    <Type>
                        <SubTitle>Back-end</SubTitle>
                        <Text>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, ipsum! Incidunt exercitationem suscipit nemo voluptatem repellendus laborum ea, aliquid dolores repudiandae assumenda sunt iusto. Reiciendis eligendi recusandae aperiam saepe voluptatum!
                        </Text>
                    </Type>
                </KnowledgeContent>
            </KnowledgeContainer>
        </>
    )
}

export default Knowledge