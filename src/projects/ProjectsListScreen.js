import React from 'react';
import './ProjectsListScreen.css'


function ProjectList(){
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

    }


    return projects.map((project) => 
        <div className="card" onClick={(e) => goToProjectScreen()}>
            <div className="card-container">
                <div className="card-title">{project.title}</div>
                <div className="card-description">{project.description}</div>
            </div>
        </div>
    )
}

function ProjectsListScreen() {

    return (
        <div>
            <div className="title">Your Projects</div>
            <div className="list-container"><ProjectList></ProjectList></div>
        </div>
    );
}

export default ProjectsListScreen