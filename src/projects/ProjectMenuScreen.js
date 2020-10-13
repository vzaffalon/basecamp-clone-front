import React from 'react';
import styled from 'styled-components';
import 'App';
import { useHistory } from "react-router-dom";
import { Row, Column, Card, AlignCenter } from 'AppStyles';
import { useParams } from "react-router-dom";
import { TextField, Breadcrumbs, Link, Typography, Button } from '@material-ui/core';
import calendar_ic from 'images/calendar_ic.png';
import docs_ic from 'images/docs_ic.png';
import message_board_ic from 'images/message_board_ic.png';
import todo_ic from 'images/todo_ic.png';

function ProjectMenuScreen(){
    let history = useHistory();
   let params = useParams();
    const { id } = params

    const goToMessageBoardsScreen = () => {
        history.push(`/projects/${id}/message_boards`)
    }

    const goToTodoListScreen = () => {
        history.push(`/projects/${id}/todo_lists`)
    }

    const goToCalendarScreen = () => {
        history.push(`/projects/${id}/calendar`)
    }

    const goToDocumentsScreen = () => {
        history.push(`/projects/${id}/documents`)
    }

    return (
        <AlignCenterFullHeight>
            <MenuCard>
                <MenuCardMargin>
                    <BreadcrumbBottomBorder>
                        <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" onClick={() => {history.goBack();}}>
                                    Projetos
                                </Link>
                                <Typography color="textPrimary">Menu</Typography>
                        </Breadcrumbs>
                    </BreadcrumbBottomBorder>
                    <ProjectTitle>Nome do Projeto</ProjectTitle>
                    <Column>
                        <ResponsiveRow>
                            <ToolCard onClick={(e) => goToMessageBoardsScreen()}>
                                <ToolTitle>Meu mural</ToolTitle>
                                <MenuIcon src={message_board_ic} alt="Logo" />
                            </ToolCard>
                            <ToolCard onClick={(e) => goToTodoListScreen()}>
                                <ToolTitle>Listas To-dos</ToolTitle>
                                <MenuIcon src={todo_ic} alt="Logo" />
                            </ToolCard>
                        </ResponsiveRow>

                        <ResponsiveRow>
                            <ToolCard onClick={(e) => goToDocumentsScreen()}>
                                <ToolTitle>Documentos & Arquivos</ToolTitle>
                                <MenuIcon src={docs_ic} alt="Logo" />
                            </ToolCard>

                    
                            <ToolCard onClick={(e) => goToCalendarScreen()}>
                                <ToolTitle>Agenda</ToolTitle>
                                <MenuIcon src={calendar_ic} alt="Logo" />
                            </ToolCard>
                        </ResponsiveRow>
                    </Column>
                </MenuCardMargin>
            </MenuCard>
        </AlignCenterFullHeight>
    );
}

const BreadcrumbBottomBorder = styled.div`
    padding: 15px;
    border-bottom: 1px solid rgba(0,0,0,0.03);
`


const MenuIcon = styled.img`
    width: 67px;
    margin-top: 5px;
`

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
        align-items: center;
        display: flex;
        flex-direction: column;
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