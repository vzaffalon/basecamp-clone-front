import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'App';
import { useHistory, useParams } from "react-router-dom";
import { Row, Column, Card, AlignCenter, PrimaryButton } from 'AppStyles';
import { TextField, Breadcrumbs, Link, Typography, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { MessageBoard } from 'models'
import DeleteIcon from '@material-ui/icons/Delete';
import 'trix';
import 'trix/dist/trix.css';

function NewMessageBoardScreen(){
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const [message, setMessage] = useState(null)
   let params = useParams();

    const editMessageBoard = (values) => {
        const { id } = params
        MessageBoard.update(id,values).then((response) => {
            history.goBack()
        })
    }


    const deleteMessageBoard = () => {
        const { id } = params
        MessageBoard.destroy(id).then((response) => {
            history.goBack()
            history.goBack();
        })
    }

    const getMessage = () => {
        const { id } = params
        MessageBoard.show(id).then((response) => {
            setMessage(response.data)
        })
    }

    useEffect(() => {
        getMessage()
    },[])


    console.log(message)
    return (
        <AlignCenterFullHeight>
            <MenuCard>
                <BreadcrumbBottomBorder>
                    <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" onClick={() => {history.goBack(); history.goBack(); history.goBack();}}>
                                Projetos
                            </Link>
                            <Link color="inherit" onClick={() => {history.goBack(); history.goBack();}}>
                                Menu
                            </Link>
                            <Link color="inherit" onClick={() => {history.goBack()}}>
                                Mural
                            </Link>
                            <Typography color="textPrimary">Editar</Typography>
                    </Breadcrumbs>
                </BreadcrumbBottomBorder>
            {message && <form onSubmit={handleSubmit(editMessageBoard)}>
                <div>
                    <TextFieldMargin>
                        <TextField fullWidth id="standard-basic" label="Titulo" id="title" name="title" inputRef={register({ required: true })}  variant="outlined"
                                    size="small" defaultValue={message.title} />
                    </TextFieldMargin>

                    <ProjectDescriptionLabel>Descrição</ProjectDescriptionLabel>
                    <input id="description" value={message.description} type="hidden" ref={register({ required: true })} name="description"></input>
                    <trix-editor input="description"></trix-editor>
                    
                    <PrimaryButtonMargin>
                        <Button type="submit" variant="contained" color="primary">
                            Salvar
                        </Button>
                    </PrimaryButtonMargin>


                    <DestroyButtonMargin>
                        <Button onClick={() => { deleteMessageBoard() }} variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}>
                            Excluir mural
                        </Button>
                    </DestroyButtonMargin>
                </div>
            </form>}
            </MenuCard>
        </AlignCenterFullHeight>
    );
}


const DestroyButtonMargin = styled.div`
    margin-top: 60px;
`

const BreadcrumbBottomBorder = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.03);
`


const TextFieldMargin = styled.div`
    margin-bottom: 20px;
    margin-top: 10px;
    text-align: left;
`

const PrimaryButtonMargin = styled.div`
    margin-top: 10px;
`

const ProjectDescriptionLabel = styled.div`
    color: #283C46;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;
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
    max-width: 300px;

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

export default NewMessageBoardScreen