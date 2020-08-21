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
    let history = useHistory();

    const goToNewProjectScreen = () => {
        history.push("/new_project")
    }

    return (
        <Container>
            <GlobMargin>
                <img src="logo.png" alt="Girl in a jacket" width="60" height="60"></img>
                <div>
                    <GlobText>Oi eu sou o Glob</GlobText>
                    <GlobDescription>Seu organizador pesssoal</GlobDescription>
                </div>
            </GlobMargin>
            <SpaceBetweenRow>
                <Flex>
                </Flex>
                <DoubleFlex>
                    <ProjectsListTitle>Seus Projetos</ProjectsListTitle>
                </DoubleFlex>
                <Flex>
                    <RowCenterVertical>
                        <TitleDivider></TitleDivider>
                        <PrimaryButtonMargin>
                            <PrimaryButton onClick={(e) => goToNewProjectScreen()}>Novo</PrimaryButton>
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

const GlobText = styled.div`
    font-size: 20px;
    margin-top: 5px;
    text-align: left;
    margin-left: 10px;
`;

const GlobDescription = styled.div`
    font-size: 16px;
    margin-top: 5px;
    text-align: left;
    margin-left: 10px;
`;

const GlobMargin = styled.div`
    margin-top: 30px;
    flex-direction: row;
    display: flex;
    flex: 1;
    align-items: center;
    color: #283C46;
    font-weight: 500;
`;

const RowCenterVertical = styled(Row)`
    align-items: center;
`

const Flex = styled.div`
    flex: 1;
`;

const DoubleFlex = styled.div`
    flex: 2;
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
    justify-content: space-between;

    @media(mAX-width: 800px) {
        margin-top: 20px;
    }

    @media(min-width: 800px) {
        margin-top: 40px;
        width: 600px;
    }
`;

const MenuCard = styled(Card)`
    margin-top: 18px;

    @media(min-width: 800px) {
        width: 600px;
        height: 200px;
    }
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
    margin-right: 5px;
    margin-left: 5px;
    font-weight: 700;

    @media(min-width: 800px) {
        font-size: 20px;
        width: 600px;
    }

    @media(max-width: 800px) {
        font-size: 28px;
        flex-direction: column;
        position: relative;
    }
`

export default ProjectsListScreen