import React, { useState, useEffect } from 'react';
import './NavBar.css';

export default function NavBar(){

    return (
        <div id="navbar">
            <div id="logo">Claire McGuigan</div>
            <div id="nav-options">
                <a href="#education-container">Education</a>
                <a href='#experience-container'>Experience</a>
                <a href="#projects-container">Projects</a>
            </div>
        </div>
    );
}