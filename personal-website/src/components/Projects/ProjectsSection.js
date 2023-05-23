import React, { useState } from 'react';
import Project from './Project.js';
import './ProjectsSection.css';

export default function ProjectsSection(){
    const [projects, setProjects] = useState([
        {
            name: 'MangoHealth',
            description: `At CalgaryHacks 2022 Hackathon, in a team of 5, developed a React Native 
            app that scans food item barcodes and uses the EDAMAM Food Database API to get its 
            nutrition facts. Comparisons are then made to help the user truly understand what, 
            for example, 20g of sugar is in comparison to a can of pop. Developed with both a Flask 
            and Node.js server, and a React Native application front-end.`
        },
        {
            name: 'Co-Living',
            description: `In a team of 4, at SheHacks 6, 2021 Hackathon, developed an organizational 
            living website using JavaScript, HTML and CSS for roommates to keep track of shared 
            expenses, joint and individual grocery lists and a chore chart that randomly assigns
            roommates to customizable chores`
        },
        {
            name: 'Code4ACause',
            description: `In a team of 4 at eHacks 2022 Hackathon, developed a website using HTML, 
            CSS and JavaScript that connects young programmers looking to develop their skills with 
            non-profits looking for help with website building, app creation…etc.`
        },
    ]);

    return (
        <div id='projects-container'>
            <div id='projects-container-title'>Projects</div>
            <div id='projects-list-container'>
                { projects &&
                    projects.map((p) => {
                        return <Project proj={p}/>
                    })
                }
            </div>
        </div>
    );
}