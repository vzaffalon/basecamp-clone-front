import React from 'react';
import styled from 'styled-components';
import 'App';

function MessageBoardListScreen(){

    const MessagesList = () => {
        const messages = [
            {
                title: 'Ideias para a carreira',
                message: 'Esse projeto é um projeto de teste'
            },
            {
                title: 'Amazon interview questions',
                description: 'Esse projeto é um projeto de teste'
            },
            {
                title: 'Stack basecamp',
                description: 'Esse projeto é um projeto de teste'
            },
        ];
    
            return messages.map((message) => {
                const { title, description } = message 
                return (
                    <div>
                        <MessageTitle>{title}</MessageTitle>
                        <MessageDescription>{description}</MessageDescription>
                        <MessageDivider></MessageDivider>
                    </div>)
            }
        )
    }

    return (
        <AlignCenter>
            <MenuCard>
                    <ProjectTitle>Message Board</ProjectTitle>
                    <AlignCenter>
                        <LineDivider></LineDivider>
                    </AlignCenter>
                    <MessagesList></MessagesList>
            </MenuCard>
        </AlignCenter>
    );
}


const MessageTitle = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const MessageDescription = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const MessageDivider = styled.div`
    width: 60%;
    height: 1px;
    background-color: #f2f2f2;
`

const LineDivider = styled.div`
    width: 90%;
    height: 3px;
    background-color: #283c46;
`

const AlignCenter = styled.div`
    display: flex;
    justify-content: center;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MenuCard = styled.div`
    border-radius: 3px;
    padding: 15px;
    background: #fff;
    width: 800px;
    height: 800px;
    margin-top: 20px;
    box-shadow: 0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1);
`

const ToolCard = styled.div`
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
        border-radius: 0.6rem;
        box-shadow: 0 0 2px rgba(0,0,0,0.35), 0 1px 3px rgba(0,0,0,0.1);
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