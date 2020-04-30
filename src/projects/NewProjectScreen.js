import React from 'react';
import styled from 'styled-components';
import 'App';
import { useHistory } from "react-router-dom";
import { Row, Column, Card, AlignCenter } from 'AppStyles';

function ProjectMenuScreen(){
    let history = useHistory();

    const goToProjectScreen = () => {
        history.push("/message_board")
    }


    return (
        <AlignCenterFullHeight>
            <MenuCard>
                <div>Adicionar novo projeto</div>

                
            </MenuCard>
        </AlignCenterFullHeight>
    );
}

const AlignCenterFullHeight = styled(AlignCenter)`
    flex: 1;
    height: 100%;
`

const MenuCard = styled(Card)`
    width: 800px;
    height: 800px;
    margin-top: 20px;
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