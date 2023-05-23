import React from 'react';
import './Footer.css';
import LinkedIn from '../../assests/images/LinkedIn.jpg';

export default function Footer(){
    return (
        <div id='footer'>
            <div id='main-footer'>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <a href="mailto:mcguigan.claire@outlook.com" className="material-symbols-outlined">mail</a>
            </div>
            <div id='linkedin-footer'>
                <a href="https://www.linkedin.com/in/claire-mcguigan/" target="_blank">{LinkedIn}</a>
            </div>
            <div id='github-footer'>
                <a href="" target="_blank"></a>
            </div>
        </div>
    );
}