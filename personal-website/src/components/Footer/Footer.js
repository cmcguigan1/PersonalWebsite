import React from 'react';
import './Footer.css';
import linkedIn from '../../assests/images/linkedIn3.png';
import github from '../../assests/images/github.png';

export default function Footer(){
    return (
        <div id='footer'>
            <div className='footer-logo-container'>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <a href="mailto:mcguigan.claire@outlook.com" className="material-symbols-outlined">mail</a>
            </div>
            <div className='footer-logo-container'>
                <a href="https://www.linkedin.com/in/claire-mcguigan/" target="_blank"><img className="footer-img" src={linkedIn}/></a>
            </div>
            <div className='footer-logo-container'>
                <a href="https://github.com/cmcguigan1" target="_blank"><img className="footer-git-img" src={github}/></a>
            </div>
        </div>
    );
}