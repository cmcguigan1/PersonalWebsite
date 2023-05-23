import React from 'react';
import './Project.css';

export default function Project(props){
    return (
        <div className='project'>
            <div className='project-name'>{props.proj.name}</div>
            <div className='project-desc'>{props.proj.description}</div>
        </div>
    );
}