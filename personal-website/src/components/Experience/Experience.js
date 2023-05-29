import React from 'react';
import './Experience.css';

export default function Experience(props){
    return (
        <div onClick={() => props.navigateToDescription(props.exp)} className='experience'>
            <img className="experience-img" src={props.exp.imgURL}/>
            <div className="experience-text">
                <div className='experience-title'>{props.exp.title}</div>
                <div className="experience-description">{props.exp.description}</div>
                { props.exp.link && <div>Check out more about the program <a href={props.exp.link}>here!</a></div> }
            </div>
        </div>
    );
}