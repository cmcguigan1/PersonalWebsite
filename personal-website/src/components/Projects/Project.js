import React from 'react';
import './Project.css';

export default function Project(props){
    return (
        <div onClick={() => props.navigateToDescription(props.proj)} className='project'>
            <div className='project-name'>{props.proj.title}</div>
            <div className='project-desc'>{props.proj.description}</div>
        </div>
    );
}