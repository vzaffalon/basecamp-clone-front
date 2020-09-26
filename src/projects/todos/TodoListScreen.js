import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { Card, AlignCenter, PrimaryButton, Row } from 'AppStyles';
import { useForm } from "react-hook-form";
import { TodoList } from 'models';

function TodoListScreen(){
    let history = useHistory();
    const [new_todo_layout_visibility, setNewTodoLayoutVisibility] = useState([]);

    const TodoListList = () => {
        const [todo_lists, setTodoLists] = useState([]);

        const getTodoListLists = () => {
            TodoList.list().then( response => {
                setTodoLists(response.data)
            })
        }
    
        useEffect(() => {
            getTodoListLists();
        },[]);  
    
            return todo_lists.map((todo_list) => {
                const { name } = todo_list 
                return (
                    <div>
                        <MessageTitle>{name}</MessageTitle>
                        <MessageDivider></MessageDivider>
                    </div>)
            }
        )
    }


    const AddNewTodoListInput = () => {
        const { register, handleSubmit, watch, errors } = useForm();

        const createNewTodoList = (values) => {
            TodoList.create(values).then((response) => {
                history.goBack()
            })
        }

        return <form onSubmit={handleSubmit(createNewTodoList)}>
        <div>
            <Input type="text" id="name" name="name" ref={register({ required: true })} ></Input>
            <span>{errors.name && errors.name.message}</span>

            <PrimaryButton type="submit">Adicionar essa lista</PrimaryButton>
        </div>
    </form>
    }

    return (
        <AlignCenter>
            <MenuCard>
                    <RowCenter>
                            <LeftMarginButton>
                                <ProjectTitle>Lista de Afazeres</ProjectTitle>
                            </LeftMarginButton>
                            <LeftMarginButton>
                                <PrimaryButton onClick={(e) => goToNewMessageBoardScreen()}>Novo</PrimaryButton>
                            </LeftMarginButton>
                    </RowCenter>
                    <AlignCenter>
                        <LineDivider></LineDivider>
                    </AlignCenter>

                    <AddNewTodoListInput></AddNewTodoListInput>
                    <TodoListList></TodoListList>
            </MenuCard>
        </AlignCenter>
    );
}

const LeftMarginButton = styled.div`
    margin-left: 10px;
`

const RowCenter = styled(Row)`
    align-items: center;
    justify-content: center;
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

export default TodoListScreen