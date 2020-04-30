import React from 'react';
import styled from 'styled-components';
import 'App';
import { useHistory } from "react-router-dom";

function ProjectMenuScreen(){
    let history = useHistory();

    const goToProjectScreen = () => {
        history.push("/message_board")
    }


    return (
        <AlignCenter>
            <MenuCard>
                    <ProjectTitle>Project Name</ProjectTitle>
                    <Column>
                        <Row>
                            <ToolCard onClick={(e) => goToProjectScreen()}>
                                <ToolTitle>Message Board</ToolTitle>
                            </ToolCard>
                            <ToolCard>
                                <ToolTitle>To-dos</ToolTitle>
                            </ToolCard>
                        </Row>

                        <Row>
                            <ToolCard>
                                <ToolTitle>Docs & Files</ToolTitle>
                            </ToolCard>

                    
                            <ToolCard>
                                <ToolTitle>Schedule</ToolTitle>
                            </ToolCard>
                        </Row>
                    </Column>
            </MenuCard>
        </AlignCenter>
    );
}

const AlignCenter = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    height: 100%;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MenuCard = styled.div`
    border-radius: 3px;
    background: #fff;
    width: 800px;
    height: 800px;
    margin-top: 20px;
    box-shadow: 0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1);
`

const ToolCard = styled.div`
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
        border-radius: 0.6rem;
        box-shadow: 0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1);
        background: #fff;
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