import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useHistory,useLocation } from "react-router-dom";
import { Card, AlignCenter, PrimaryButton, Row } from 'AppStyles';
import { MessageBoard } from 'models';
import { Button, Breadcrumbs, Link, Typography } from '@material-ui/core';

function MessageBoardListScreen(){
    let history = useHistory();
    const location = useLocation();

    const MessageBoardsList = () => {
        const [message_boards, setMessageBoards] = useState([]);

        const getMessageBoards = () => {
            const { id } = location.state
            MessageBoard.list({project_id: id}).then( response => {
                setMessageBoards(response.data)
            })
        }

        const goToShowMessageBoardScreen = (id) => {
            history.push("/show_message_board", { id: id })
        }
    
        useEffect(() => {
            getMessageBoards();
        },[]);  
    
            return message_boards.map((message_board) => {
                const { title, description, id } = message_board 
                return (
                    <a onClick={() => {goToShowMessageBoardScreen(id)}}>
                        <MessageTitle>{title}</MessageTitle>
                        <MessageDescription dangerouslySetInnerHTML={{__html: description}}></MessageDescription>
                        <MessageDivider></MessageDivider>
                    </a>)
            }
        )
    }

    const goToNewMessageBoardScreen = () => {
        const { id } = location.state
        history.push("/new_message_board", {id: id})
    }

    return (
        <AlignCenter>
            <MenuCard>
            <BreadcrumbBottomBorder>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" onClick={() => {history.goBack(); history.goBack();}}>
                            Projetos
                        </Link>
                        <Link color="inherit" onClick={() => {history.goBack()}}>
                            Menu
                        </Link>
                        <Typography color="textPrimary">Mural</Typography>
                    </Breadcrumbs>
                </BreadcrumbBottomBorder>
                    <RowCenter>
                            <LeftMarginButton>
                                <ProjectTitle>Meu Mural</ProjectTitle>
                            </LeftMarginButton>
                            <LeftMarginButton>
                                <Button size="small" onClick={(e) => goToNewMessageBoardScreen()} variant="contained" color="primary">
                                    Novo
                                </Button>
                            </LeftMarginButton>
                    </RowCenter>
                    <AlignCenter>
                        <LineDivider></LineDivider>
                    </AlignCenter>
                    <MessageBoardsList></MessageBoardsList>
            </MenuCard>
        </AlignCenter>
    );
}

const BreadcrumbBottomBorder = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.03);
`

const LeftMarginButton = styled.div`
    margin-left: 10px;
`

const RowCenter = styled(Row)`
    align-items: center;
    justify-content: center;
`


const MessageTitle = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 700;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 5px;
    margin-left: 10px;
`;

const MessageDescription = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 300;
    word-wrap: break-word;
    text-align: left;
    margin-left: 10px;
    margin-bottom: 10px;
`;

const MessageDivider = styled.div`
    height: 1px;
    background-color: #f2f2f2;
`

const LineDivider = styled.div`
    width: 90%;
    height: 3px;
    background-color: #283c46;
`

const MenuCard = styled(Card)`
    padding: 15px;
    margin-top: 20px;
    min-height: 400px;
    min-width: 300px;
    max-width: 300px;

    @media(min-width: 800px) {
        margin-top: 40px;
        width: 600px;
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

export default MessageBoardListScreen