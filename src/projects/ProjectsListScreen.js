import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const ProjectList = () => {
    let history = useHistory();
    const projects = [
        {
            title: 'Title 1',
            description: 'Esse projeto é um projeto de teste'
        },
        {
            title: 'Title 2',
            description: 'Esse projeto é um projeto de teste'
        },
        {
            title: 'Title 3',
            description: 'Esse projeto é um projeto de teste'
        },
    ];

    const goToProjectScreen = () => {
        history.push("/project_menu")
    }


    return projects.map((project) => 
        <MenuCard onClick={(e) => goToProjectScreen()}>
            <CardContainer>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardContainer>
        </MenuCard>
    )
}

function ProjectsListScreen() {

    return (
        <div>
            <ProjectsListTitle>Your Projects</ProjectsListTitle>
            <ListContainer>
                <ProjectList></ProjectList>
            </ListContainer>
        </div>
    );
}

const MenuCard = styled.div`
    border-radius: 0.6rem;
    box-shadow: 0 0 1px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.1);
    background: #fff;
    width: 600px;
    height: 200px;
    margin-top: 20px;
`;

const CardContainer = styled.div`
    padding: 20px;
`;

const CardTitle = styled.div`
    font-size: 22px;
    color: #283C46;
    font-weight: 700;
    text-align: left;
`;

const CardDescription = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #283C46;
    text-align: left;
`

const ListContainer = styled.div`
    align-items: center;
    flex-direction: column;
    display: flex;
    flex: 1;
    margin-bottom: 40px;
`

const ProjectsListTitle = styled.div`
    color: #283c46;
    font-size: 32px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-weight: 700;
`

export default ProjectsListScreen