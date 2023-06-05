import React from 'react';
import NavBar from './NavBar/NavBar';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';
import ExperienceSection from './Experience/ExperienceSection';
import ProjectsSection from './Projects/ProjectsSection';
import Footer from './Footer/Footer';
import { useLocation, useNavigate} from 'react-router-dom';

export default function MainPage(){
    const nav = useNavigate();

    const navigateToDescription = (data) => {
        nav('./Description',{state: {data: data}} )
    }

    return (
        <>
            <NavBar/>
            <AboutMe/>
            <Education/>
            <ExperienceSection navigateToDescription={navigateToDescription}/>
            <ProjectsSection navigateToDescription={navigateToDescription}/>
            <Footer/>
        </>
    );
}