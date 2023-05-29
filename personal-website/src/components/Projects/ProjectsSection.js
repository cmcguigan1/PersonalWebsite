import React from 'react';
import Project from './Project.js';
import './ProjectsSection.css';
import { projects } from '../../data/ProjectData.js';

export default function ProjectsSection(props){

    return (
        <div id='projects-container'>
            <div id='projects-container-title'>Projects</div>
            <div id='projects-list-container'>
                { projects &&
                    projects.map((p) => {
                        return <Project navigateToDescription={props.navigateToDescription} key={p.id} proj={p}/>
                    })
                }
            </div>
        </div>
    );
}