import Teamify1 from '../assests/images/TeamifyPhotos/Teamify1.png';
import Teamify2 from '../assests/images/TeamifyPhotos/Teamify2.png';
import Teamify3 from '../assests/images/TeamifyPhotos/Teamify3.png';
import Teamify4 from '../assests/images/TeamifyPhotos/Teamify4.png';
import Teamify5 from '../assests/images/TeamifyPhotos/Teamify5.png';
import Teamify6 from '../assests/images/TeamifyPhotos/Teamify6.png';
import Teamify7 from '../assests/images/TeamifyPhotos/Teamify7.png';
import Teamify8 from '../assests/images/TeamifyPhotos/Teamify8.png';
import Teamify9 from '../assests/images/TeamifyPhotos/Teamify9.png';
import Teamify10 from '../assests/images/TeamifyPhotos/Teamify10.png';
import Teamify11 from '../assests/images/TeamifyPhotos/Teamify11.png';

export const projects = [
    {
        id: 1,
        type: 'school',
        title: 'Teamify',
        date: "December 2022",
        company: 'Final Project - Web Technologies course',
        companyDescription: `Completed 3316A Web Technologies course in first semester of 3rd year 
        of software engineering. Course covered topics about building full-stack applications with a 
        proper REST API, proper authentication, and security`,
        description: `Designed, implemented, tested, and deployed a 
        full stack React app music streaming platform. Users are able to search 
        through tracks, make playlists, view public playlists and leave 
        ratings. Utilized Express Node.js backend, MySQL database and 
        deployed on AWS. Link to Project`,
        skills: 'React, Node.js, Express.js, MySQL, AWS, Firebase',
        link: 'https://github.com/cmcguigan1/Teamify',
        keyPoints: [
            `Worked with a partner, another software engineering student`,
            `Worked on the front end, developed the backend API, database, and deployment`,
            `Partner worked on integrating the Firebase authentication and the login page front end`,
            `Received an overall mark of 120% on the project`
        ],
        images: [Teamify1, Teamify2, Teamify3, Teamify4, Teamify5, Teamify6, Teamify7, Teamify8, Teamify9, Teamify10, Teamify11]
    },
    {
        id: 2,
        type: 'hackathon',
        title: 'MangoHealth',
        date: "Febuary 2022",
        company: 'CalgaryHacks Hackathon',
        companyDescription: `Remote 24-hour sprint Hackathon based in Calgary, AB`,
        description: `At CalgaryHacks 2022 Hackathon, in a team of 5, developed a React Native 
        app that scans food item barcodes and uses the EDAMAM Food Database API to get its 
        nutrition facts. Comparisons are then made to help the user truly understand what, 
        for example, 20g of sugar is in comparison to a can of pop. Developed with both a Flask 
        and Node.js server, and a React Native application front-end.`,
        skills: 'React, Flask, python, HTML, SCSS, CSS',
        link: '',
        keyPoints: [
            ``,
        ],
        images: []
    },
    {
        id: 3,
        type: 'hackathon',
        title: 'Co-Living',
        date: "January 2022",
        company: 'SheHacks Hackathon',
        companyDescription: `Canada's biggest all-female and non-binary 36-hour hackathon`,
        description: `In a team of 4, at SheHacks 6, 2021 Hackathon, developed an organizational 
        living website using JavaScript, HTML and CSS for roommates to keep track of shared 
        expenses, joint and individual grocery lists and a chore chart that randomly assigns
        roommates to customizable chores`,
        skills: 'Javascript, HTML, CSS',
        link: '',
        keyPoints: [
            ``,
        ],
        images: []
    },
    {
        id: 4,
        type: 'hackathon',
        title: 'Code4ACause',
        date: "Febuary 2022",
        company: 'eHacks Hackathon',
        companyDescription: `24-hr Hackathon where teams are composed of 2 technical and 2 business memebers to 
        build a solution to a business problem`,
        description: `In a team of 4 at eHacks 2022 Hackathon, developed a website using HTML, 
        CSS and JavaScript that connects young programmers looking to develop their skills with 
        non-profits looking for help with website building, app creation…etc.`,
        skills: 'Javascript, HTML, CSS',
        link: '',
        keyPoints: [
            ``,
        ],
        images: []
    },
]