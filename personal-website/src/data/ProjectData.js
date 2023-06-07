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

import CoLiving1 from '../assests/images/CoLiving/CoLiving1.png';
import CoLiving2 from '../assests/images/CoLiving/CoLiving2.png';
import CoLiving3 from '../assests/images/CoLiving/CoLiving3.png';
import CoLiving4 from '../assests/images/CoLiving/CoLiving4.png';
import CoLiving5 from '../assests/images/CoLiving/CoLiving5.png';
import CoLiving6 from '../assests/images/CoLiving/CoLiving6.png';

import COMT1 from '../assests/images/CourseOutlineManagementTool/COMT1.png';
import COMT15 from '../assests/images/CourseOutlineManagementTool/COMT15.png';
import COMT16 from '../assests/images/CourseOutlineManagementTool/COMT16.png';
import COMT10 from '../assests/images/CourseOutlineManagementTool/COMT10.png';
import COMT11 from '../assests/images/CourseOutlineManagementTool/COMT11.png';
import COMT12 from '../assests/images/CourseOutlineManagementTool/COMT12.png';
import COMT13 from '../assests/images/CourseOutlineManagementTool/COMT13.png';
import COMT17 from '../assests/images/CourseOutlineManagementTool/COMT17.png';
import COMT19 from '../assests/images/CourseOutlineManagementTool/COMT19.png';
import COMT22 from '../assests/images/CourseOutlineManagementTool/COMT22.png';
import COMT23 from '../assests/images/CourseOutlineManagementTool/COMT23.png';
import COMT24 from '../assests/images/CourseOutlineManagementTool/COMT24.png';
import COMT2 from '../assests/images/CourseOutlineManagementTool/COMT2.png';
import COMT4 from '../assests/images/CourseOutlineManagementTool/COMT4.png';
import COMT20 from '../assests/images/CourseOutlineManagementTool/COMT20.png';
import COMT21 from '../assests/images/CourseOutlineManagementTool/COMT21.png';
import COMT5 from '../assests/images/CourseOutlineManagementTool/COMT5.png';
import COMT6 from '../assests/images/CourseOutlineManagementTool/COMT6.png';
import COMT7 from '../assests/images/CourseOutlineManagementTool/COMT7.png';


export const projects = [
    {
        id: 1,
        type: 'school',
        title: 'Course Outline Management Tool',
        date: "January 2023 - April 2023",
        location: '',
        company: 'Project - Software Engineering Design Project course',
        companyDescription: `Completed 3350B Software Engineering Design course in second semester of 3rd year 
        of software engineering. Course was a project based course where team had to iterate all stages of
        the software development lifecycle`,
        description: `A web app created in my 3350B project based course that is a course outline management tool
        for instructors and admin personnel. Intructors can create outlines for courses they are assigned to, view 
        previous course outlines for that course, keep version history, and submit outlines to admin to be approved.
        Once outlines are approved, they can then print of the approved versions. Admin can assign instructors to courses,
        view submitted outlines and either approve or send it back to the instructor with comments`,
        technologies: 'React, Node.js, Express.js, MySQL, GCP',
        link: '',
        keyPoints: [
            `Worked in a team with 5 other students`,
            `Planned and executed bi-weekly sprints`,
            `Participated in weekly stand-ups in front of team members and stakeholders to discuss progress, roadblocks and concerns`,
            `Iterated all steps of the software development lifecycle including requirements elicitaiton, 
            requirments analysis, system design, object design, implementation, and testing`,
            `Received an overall mark of 90% in the course`
        ],
        images: [COMT1, COMT15, COMT16, COMT10, COMT11, COMT12, COMT13, COMT17, COMT19, COMT22, COMT23, COMT24, COMT2, COMT4, COMT20, COMT21, COMT5, COMT6, COMT7]
    },
    {
        id: 2,
        type: 'school',
        title: 'Teamify',
        date: "December 2022",
        location: '',
        company: 'Final Project - Web Technologies course',
        companyDescription: `Completed 3316A Web Technologies course in first semester of 3rd year 
        of software engineering. Course covered topics about building full-stack applications with a 
        proper REST API, proper authentication, and security`,
        description: `Designed, implemented, tested, and deployed a 
        full stack React app music streaming platform. Users are able to search 
        through tracks, make playlists, view public playlists and leave 
        ratings. Utilized Express Node.js backend, MySQL database and 
        deployed on AWS`,
        technologies: 'React, Node.js, Express.js, MySQL, AWS, Firebase',
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
        id: 3,
        type: 'hackathon',
        title: 'MangoHealth',
        date: "Febuary 2022",
        location: 'Remote',
        company: 'CalgaryHacks Hackathon',
        companyDescription: `Remote 24-hour sprint Hackathon based in Calgary, AB`,
        description: `At CalgaryHacks 2022 Hackathon, developed a React Native 
        app that scans food item barcodes and uses the EDAMAM Food Database API to get its 
        nutrition facts. Comparisons are then made to help the user truly understand what, 
        for example, 20g of sugar is in comparison to a can of pop. Developed with both a Flask 
        and Node.js server, and a React Native application front-end.`,
        technologies: 'React, Flask, python, HTML, SCSS, CSS',
        link: '',
        keyPoints: [
            `Worked in a team of 5 developers with different software development backgrounds`,
            `Pitched and presented our technical solution and idea in front of a pannel of judges`
        ],
        images: []
    },
    {
        id: 4,
        type: 'hackathon',
        title: 'Co-Living',
        date: "January 2022",
        location: 'Remote',
        company: 'SheHacks Hackathon',
        companyDescription: `Canada's biggest all-female and non-binary 36-hour hackathon`,
        description: `At SheHacks 6 2021 Hackathon, developed an organizational 
        living website for roommates to keep track of shared 
        expenses, joint and individual grocery lists and a chore chart that randomly assigns
        roommates to customizable chores`,
        technologies: 'Javascript, HTML, CSS',
        link: 'https://github.com/cmcguigan1/CoLiving-SheHacks2022',
        keyPoints: [
            `Worked in a team with 3 other developers`,
            `The first hackthon I fully competed in`,
            `Pitched and presented our project to a pannel of judges`
        ],
        images: [CoLiving1, CoLiving2, CoLiving3, CoLiving4, CoLiving5, CoLiving6]
    },
    {
        id: 5,
        type: 'hackathon',
        title: 'Code4ACause',
        date: "Febuary 2022",
        location: 'London, ON',
        company: 'eHacks Hackathon',
        companyDescription: `24-hr Hackathon where teams are composed of 2 technical and 2 business memebers to 
        build a solution to a business problem`,
        description: `At eHacks 2022 Hackathon, developed a website that connects young programmers looking to 
        develop their skills with non-profits looking for help with website building, app creation or other 
        software services`,
        technologies: 'Javascript, HTML, CSS',
        link: '',
        keyPoints: [
            `Worked in a cross-functional team of 4 with 2 non-technical memebers and 1 other technical member`,
            `My first hackathon that had a business pitch as well as a technical pitch`,
            `Pitched and presented our concept, along with the business plan of how we would fund the project, as well as our technical solution`
        ],
        images: []
    },
]