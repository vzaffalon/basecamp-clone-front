




import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { Card, AlignCenter, PrimaryButton, Row } from 'AppStyles';
import { MessageBoard } from 'models';
import { Button, Breadcrumbs, Link, Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";

function ShowMessageBoardScreen(){
    let history = useHistory();
    const [message, setMessage] = useState(null)
   let params = useParams();

    const getMessage = () => {
        const { id } = params
        MessageBoard.show(id).then((response) => {
            setMessage(response.data)
        })
    }

    const goToEditMessageBoardScreen = () => {
        const { id } = params
        history.push(`/message_boards/${id}/edit_message_board`)
    }

    useEffect(() => {
        getMessage()
    },[])

    return (
        <AlignCenter>
            <MenuCard>
            <BreadcrumbBottomBorder>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" onClick={() => {history.goBack(); history.goBack(); history.goBack();}}>
                            Projetos
                        </Link>
                        <Link color="inherit" onClick={() => {history.goBack(); history.goBack()}}>
                            Menu
                        </Link>
                        <Link color="inherit" onClick={() => {history.goBack()}}>
                            Mural
                        </Link>
                        <Typography color="textPrimary">Mensagem</Typography>
                    </Breadcrumbs>
                </BreadcrumbBottomBorder>
                    {message && <div><RowCenter>
                        <ProjectTitle>{message.title}</ProjectTitle>
                        <ButtonMargin>
                            <Button size="small" onClick={() => {goToEditMessageBoardScreen()}} variant="contained" color="primary">
                                Editar
                            </Button>
                        </ButtonMargin>
                    </RowCenter>
                    <AlignCenter>
                        <LineDivider></LineDivider>
                    </AlignCenter>
                    <MessageMargin>
                        <MessageDescription dangerouslySetInnerHTML={{__html: message.description}}></MessageDescription>
                    </MessageMargin>
                    </div>}
            </MenuCard>
        </AlignCenter>
    );
}

const ButtonMargin = styled.div`
    margin-left: 10px;
`

const MessageMargin = styled.div`
    margin-top: 15px;
`

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
    min-height: 400px;
    margin: 20px;
    width: 100%;

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
    margin-left: 30px;
`;

const ToolTitle = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export default ShowMessageBoardScreen