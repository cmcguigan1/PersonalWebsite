import React from 'react';
import './Experience.css';

export default function Experience(props){
    return (
        <div onClick={() => props.navigateToDescription(props.exp)} className='experience'>
            <img className="experience-img" src={props.exp.logoImgURL}/>
            <div className="experience-text">
                <div className='experience-title'>{props.exp.title}</div>
                <div className="experience-description">{props.exp.description}</div>
            </div>
        </div>
    );
}