import React from 'react';
import styled from 'styled-components';
import 'App';
import { useHistory } from "react-router-dom";
import { Row, Column, Card, AlignCenter, PrimaryButton } from 'AppStyles';

function ProjectMenuScreen(){
    let history = useHistory();

    const createNewProject = () => {
        history.push("/")
    }


    return (
        <AlignCenterFullHeight>
            <MenuCard>
                <NewProjectTitle>Qual o nome do projeto que você quer criar?</NewProjectTitle>
                <div>
                    <Input type="text" id="fname" name="fname"></Input>
                    <PrimaryButton onClick={(e) => createNewProject()}>Criar projeto</PrimaryButton>
                </div>
            </MenuCard>
        </AlignCenterFullHeight>
    );
}

const NewProjectTitle = styled.div`
    color: #283C46;
    font-weight: 500;
    font-size: 20px;
    text-align: left;
`

const Input = styled.input`
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 100%;
    width: 100%;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 0.4rem;
    line-height: 1.5;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-sizing: border-box;
`

const AlignCenterFullHeight = styled(AlignCenter)`
    flex: 1;
    height: 100%;
`

const MenuCard = styled(Card)`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 20px;
    margin-right: 20px;
    margin-left: 20px;

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