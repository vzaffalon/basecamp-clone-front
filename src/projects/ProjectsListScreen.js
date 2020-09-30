import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { PrimaryButton, Card } from 'AppStyles'
import { Column, Row } from 'AppStyles';
import { Project } from 'models/index.js';
import { Button } from '@material-ui/core';

const ProjectList = () => {
    let history = useHistory();
    const [projects, setProjects] = useState([]);
    

    const getProjects = () => {
        Project.list().then( response => {
            setProjects(response.data)
        })
    }

    useEffect(() => {
        getProjects();
    },[]);    

    const goToProjectScreen = () => {
        history.push("/project_menu")
    }


    return <div>
            {projects.map((project) => {
                const {name, description } = project
                return <MenuCard onClick={(e) => goToProjectScreen()}>
                        <CardContainer>
                            <CardTitle>{name}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardContainer>
                </MenuCard>
                }
            )}
        </div>
}

function ProjectsListScreen() {
    let history = useHistory();

    const goToNewProjectScreen = () => {
        history.push("/new_project")
    }

    return (
        <Container>
            {/* <GlobMargin>
                <img src="logo.png" alt="Girl in a jacket" width="40"></img>
                <div>
                    <GlobText>Oi, eu sou o Glob!</GlobText>
                    <GlobDescription>Seu organizador pesssoal</GlobDescription>
                </div>
            </GlobMargin> */}
            <SpaceBetweenRow>
                <Flex>
                    <img src="logo.png" alt="Girl in a jacket" width="55"></img>
                </Flex>
                <DoubleFlex>
                    <ProjectsListTitle>Seus Projetos</ProjectsListTitle>
                </DoubleFlex>
                <Flex>
                    <RowCenterVertical>
                        <TitleDivider></TitleDivider>
                        <PrimaryButtonMargin>
                            <Button size="small" onClick={(e) => goToNewProjectScreen()} variant="contained" color="primary">
                                Novo
                            </Button>
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
    font-size: 16px;
    margin-top: 5px;
    text-align: left;
    margin-left: 10px;
`;

const GlobDescription = styled.div`
    font-size: 14px;
    margin-top: 5px;
    text-align: left;
    margin-left: 10px;
`;

const GlobMargin = styled.div`
    margin-top: 15px;
    flex-direction: row;
    width: 100%;
    margin-left: 15px;
    display: flex;
    flex: 1;
    align-items: left;
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
    min-height: 90px;
    min-width: 300px;
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