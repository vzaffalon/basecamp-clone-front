import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { Row, Column, Card, AlignCenter, PrimaryButton } from 'AppStyles';
import { useForm } from "react-hook-form";
import { Project } from 'models'
import { Button } from '@material-ui/core';

function NewProjectScreen(){
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();

    const createNewProject = (values) => {
        Project.create(values).then((response) => {
            history.goBack()
        })
    }


    return (
        <AlignCenterFullHeight>
            <MenuCard>
            <NewProjectTitle>Qual o nome do projeto?</NewProjectTitle>
            <form onSubmit={handleSubmit(createNewProject)}>
                <div>
                    <Input type="text" id="name" name="name" ref={register({ required: true })} ></Input>
                    <span>{errors.name && errors.name.message}</span>

                    <ProjectDescriptionLabel>Descrição do projeto</ProjectDescriptionLabel>
                    <Input type="text" id="description" name="description" ref={register({ required: true })} ></Input>
                    <span>{errors.name && errors.name.message}</span>
        
                    <Button type="submit" variant="contained" color="primary">
                        Criar projeto
                    </Button>
                </div>
            </form>
            </MenuCard>
        </AlignCenterFullHeight>
    );
}


const ProjectDescriptionLabel = styled.div`
    color: #283C46;
    font-weight: 500;
    margin-top: 10px;
    font-size: 16px;
    text-align: left;
`

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

export default NewProjectScreen