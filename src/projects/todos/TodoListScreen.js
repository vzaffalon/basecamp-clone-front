import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from "react-router-dom";
import { Card, AlignCenter, SecondaryButton, PrimaryButton, Row } from 'AppStyles';
import { FormControlLabel, Checkbox, Button, TextField, Breadcrumbs, Link, Typography } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { TodoList, Todo } from 'models';

function TodoListScreen() {
    let history = useHistory();
    const location = useLocation();
    const [new_todo_list_layout_visibility, setNewTodoListLayoutVisibility] = useState(false);
    const [new_todo_layout_visibility, setNewTodoLayoutVisibility] = useState(false);
    const [new_todo_list_id, setNewTodoListId] = useState(null);
    const [todo_lists, setTodoLists] = useState([]);

    const TodoListList = ({ todo_lists_list = [], createNewTodo }) => {

        const AddNewTodoInput = () => {
            const { register, handleSubmit, watch, errors } = useForm();


            return <form onSubmit={handleSubmit(createNewTodo)}>
                <div>
                    <TextFieldMargin>
                        <TextField id="standard-basic" label="Nome da tarefa" id="name" name="name" inputRef={register({ required: true })}  variant="outlined"
                                size="small" />
                    </TextFieldMargin>

                    <Button size="small" type="submit" variant="contained" color="primary">
                        Adicionar essa tarefa
                    </Button>
                </div>
            </form>
        }

        const updateTodo = (id, done) => {
            Todo.update(id, { done: !done }).then((response) => {
                getTodoListLists();
                setNewTodoLayoutVisibility(false);
            })
        }


        
        return <AlignLeft>
                {todo_lists_list.map((todo_list, index) => {
                const {id, name , done, incomplete} = todo_list
                return (
                    <div>
                <MessageTitle>{name} - Feitas {done.length}/{done.length + incomplete.length}</MessageTitle>
                {incomplete.map((todo) => {
                    const { name, done } = todo
                    return <CheckBoxMargin>
                           <FormControlLabel
                                control={<Checkbox checked={done} color="primary" onChange={() => updateTodo(todo.id, done)} name="checkedA" />}
                                label={name}
                            />    
                        </CheckBoxMargin>
                })}
                 <Button size="small" onClick={() => {setNewTodoLayoutVisibility(!new_todo_layout_visibility); setNewTodoListId(id)}} type="submit" variant="outlined" color="primary">
                     Adicionar uma tarefa
                </Button>
                {new_todo_layout_visibility && new_todo_list_id == id && <AddNewTodoInput></AddNewTodoInput>}
                {done.map((todo) => {
                    const { name, done } = todo
                    return <CheckBoxMargin> <FormControlLabel
                    control={<Checkbox checked={done} color="primary" onChange={() => updateTodo(todo.id, done)} name="checkedA" />}
                    label={name}
                />   </CheckBoxMargin>
                })}
                <MessageDivider></MessageDivider>
            </div>)
            }
        )
        }
        </AlignLeft>
    }


    const AddNewTodoListInput = () => {
        const { register, handleSubmit, watch, errors } = useForm();
        const location = useLocation();

        const createNewTodoList = (values) => {
            const { id } = location.state
            values.project_id = id
            TodoList.create(values).then((response) => {
                getTodoListLists();
                setNewTodoListLayoutVisibility(false);
            })
        }

        return <form onSubmit={handleSubmit(createNewTodoList)} noValidate autoComplete="off">
            <div>
                <TextFieldMargin>
                    <TextField id="standard-basic" label="Nome da lista" id="name" name="name" inputRef={register({ required: true })}  variant="outlined"
                            size="small" />
                </TextFieldMargin>

                <Button size="small" type="submit" variant="contained" color="primary">
                    Adicionar essa lista
                </Button>
            </div>
        </form>
    }


    const getTodoListLists = () => {
        const { id } = location.state
        TodoList.list({project_id: id}).then(response => {
            setTodoLists(response.data)
            setNewTodoListLayoutVisibility(false)
        })
    }

    const createNewTodo = (values) => {
        Todo.create({todo_list_id: new_todo_list_id, name: values.name}).then((response) => {
            getTodoListLists();
            setNewTodoLayoutVisibility(false);
        })
    }

    useEffect(() => {
        getTodoListLists();
    }, []);

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
                        <Typography color="textPrimary">Todos</Typography>
                    </Breadcrumbs>
                </BreadcrumbBottomBorder>
                <RowCenter>
                    <LeftMarginButton>
                        <ProjectTitle>To-dos</ProjectTitle>
                    </LeftMarginButton>
                    <LeftMarginButton>
                        <Button size="small" onClick={(e) => setNewTodoListLayoutVisibility(!new_todo_list_layout_visibility)} variant="contained" color="primary">
                            Nova
                        </Button>
                    </LeftMarginButton>
                </RowCenter>
                <AlignCenter>
                    <LineDivider></LineDivider>
                </AlignCenter>

                {new_todo_list_layout_visibility && <AddNewTodoListInput></AddNewTodoListInput>}
                <TodoListList todo_lists_list={todo_lists} createNewTodo={createNewTodo}></TodoListList>
            </MenuCard>
        </AlignCenter>
    );
}

const BreadcrumbBottomBorder = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.03);
`

const TextFieldMargin = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
`

const CheckBoxMargin = styled.div`
`

const AlignLeft = styled.div`
    text-align: left;
`

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
    margin-top: 5px;
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