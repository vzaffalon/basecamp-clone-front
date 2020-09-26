import React from 'react';
import styled from 'styled-components';
import 'App';
import { useHistory } from "react-router-dom";
import { Row, Column, Card, AlignCenter } from 'AppStyles';

function ProjectMenuScreen(){
    let history = useHistory();

    const goToProjectScreen = () => {
        history.push("/message_boards")
    }

    const goToTodoListScreen = () => {
        history.push("/todo_lists")
    }

    return (
        <AlignCenterFullHeight>
            <MenuCard>
                <MenuCardMargin>
                    <ProjectTitle>Nome do Projeto</ProjectTitle>
                    <Column>
                        <ResponsiveRow>
                            <ToolCard onClick={(e) => goToProjectScreen()}>
                                <ToolTitle>Meu mural</ToolTitle>
                            </ToolCard>
                            <ToolCard onClick={(e) => goToTodoListScreen()}>
                                <ToolTitle>Listas To-dos</ToolTitle>
                            </ToolCard>
                        </ResponsiveRow>

                        <ResponsiveRow>
                            <ToolCard>
                                <ToolTitle>Documentos & Arquivos</ToolTitle>
                            </ToolCard>

                    
                            <ToolCard>
                                <ToolTitle>Agenda</ToolTitle>
                            </ToolCard>
                        </ResponsiveRow>
                    </Column>
                </MenuCardMargin>
            </MenuCard>
        </AlignCenterFullHeight>
    );
}

const ResponsiveRow = styled(Row)`
@media(max-width: 800px) {
  flex-direction: column
}
`

const AlignCenterFullHeight = styled(AlignCenter)`
    flex: 1;
    height: 100%;
`

const MenuCard = styled(Card)`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;

    @media(min-width: 800px) {
        width: 800px;
        height: 800px;
    }
`

const ToolCard = styled(Card)`
        position: relative;
        width: 240px;
        height: 240px;
        margin: 2%;
        vertical-align: top;
        font-size: 1.1rem;
        line-height: 1.3;
        text-align: left;
        text-rendering: optimizeLegibility;
        word-wrap: break-word;

        @media(max-width: 800px) {
            height: 180px;
        }
`;

const MenuCardMargin = styled.div`
    margin-bottom: 20px;
`;

const ProjectTitle = styled.div`
    font-size: 22px;
    color: #283C46;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ToolTitle = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export default ProjectMenuScreen