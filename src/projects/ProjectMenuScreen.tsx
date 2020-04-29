import React from 'react';
import styled from 'styled-components';
import 'App';

function ProjectMenuScreen(){
    return (
        <MenuCard>
            <ProjectTitle>Project Name</ProjectTitle>
            <Row>
                <ToolCard>
                    <div>Message Board</div>
                </ToolCard>
                <ToolCard>
                    <div>To-dos</div>
                </ToolCard>

                <ToolCard>
                    <div>Docs & Files</div>
                </ToolCard>

                <ToolCard>
                    <div>Schedule</div>
                </ToolCard>
            </Row>
        </MenuCard>
    );
}

const Row = styled.div`
    display: flex;;
    flex-direction: row;
`

const MenuCard = styled.div`
    border-radius: 0.6rem;
    background: #fff;
    box-shadow: 0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1);
`

const ToolCard = styled.div`
        position: relative;
        width: 80px;
        height: 80px;
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
    text-align: left;
`;

export default ProjectMenuScreen