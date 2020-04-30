import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { PrimaryButton, Card } from 'AppStyles'
import { Column, Row } from 'AppStyles';

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
        <Container>
            <SpaceBetweenRow>
                <Flex>
                    <TitleDivider></TitleDivider>
                </Flex>
                <Flex>
                    <ProjectsListTitle>Your Projects</ProjectsListTitle>
                </Flex>
                <Flex>
                    <RowCenterVertical>
                        <TitleDivider></TitleDivider>
                        <PrimaryButtonMargin>
                            <PrimaryButton>Novo</PrimaryButton>
                        </PrimaryButtonMargin>
                    </RowCenterVertical>
                </Flex>
            </SpaceBetweenRow>
            <ListContainer>
                <ProjectList></ProjectList>
            </ListContainer>
        </Container>
    );
}

const RowCenterVertical = styled(Row)`
    align-items: center;
`

const Flex = styled.div`
    flex: 1;
`;

const NoFlex = styled.div`
    flex: 0;
`;

const PrimaryButtonMargin = styled.div`
    margin-left: 10px;
`;

const TitleDivider = styled.div`
    height: 1px;
    width: 100%;
    background-color: #ddd9d7;
`;


const Container = styled.div`
    align-items: center;
    flex-direction: column;
    display: flex;
    flex: 1;
`;

const SpaceBetweenRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    width: 600px;
    justify-content: space-between;
`;

const MenuCard = styled(Card)`
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
    font-size: 28px;
    margin-right: 5px;
    margin-left: 5px;
    font-weight: 700;
`

export default ProjectsListScreen