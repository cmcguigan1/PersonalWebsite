import React, { useState, useEffect } from 'react';
import './NavBar.css';

export default function NavBar(){

    return (
        <div id="navbar">
            <div id="logo">Claire McGuigan</div>
            <div id="nav-options">
                <span>Experience</span>
                <span>Education</span>
                <span>Projects</span>
            </div>
        </div>
    );
}