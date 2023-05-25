import React from 'react';
import './AboutMe.css';
import LinkedInPhoto from '../../assests/images/LinkedIn Photo.png';

export default function AboutMe(){
    return (
        <div id="aboutme-container">
            <img id="linkedin-photo" src={LinkedInPhoto}/>
            <div id="aboutme-content">
                <div id="aboutme-intro">Hi I'm <span className="aboutme-emp">Claire</span> and welcome to my personal website!</div>
                <div id="aboutme-descr">A bit about me: I'm a 3rd year software engineering student who is 
                    passionate about technology and innovation. What drew me into the world 
                    of software development was the endless learning opportunities
                    it offered. I've always been the type of person who's loved school
                    and loved learning new skills, and what I found in the tech industry 
                    was exactly that, a career path with no glass celing.
                    <br></br>
                    <br></br>
                    I'm an aspiring Full-Stack developer that is super interested in the world 
                    of Machine Learning and AI
                    <br></br>
                    <br></br>
                    When I'm not beind a computer I like to paint, weightlift, read and cook! 
                </div>
            </div>
        </div>
    );
}