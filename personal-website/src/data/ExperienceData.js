import RBC from '../assests/images/RBC_icon.jpg';
import WDSLogo from '../assests/images/WDS.jpg';
import Bell from '../assests/images/BellLogo.png';
import WETT from '../assests/images/WETT.jpg';
import WesternOrientation from '../assests/images/WesternOWeek.png';
import WesternUniversity from '../assests/images/WesternLogo.png';
import MCGLaw from '../assests/images/MCGLawLogo.png';

export const professional = [
    {
        id: 1,
        type: 'work',
        logoImgURL: RBC, 
        title: "Machine Learning Platform Developer, RBC", 
        date: "September 2023 - December 2023",
        location: 'Calgary, AB',
        company: 'Royal Bank of Canada',
        companyDescription: `A Canadian multinational financial services company and the largest 
        bank in Canada by market capitalization`,
        description: `Worked on RBC Brain's on-premises MLOps platform team to develop their chargeback 
        infrastructure and to help App Code owners understand and limit their resource wastage on the platform. 
        Using big data tools like Spark and Hadoop, I automated the processing of the OCP pod data 
        to calculate the total cost for each App Code on a monthly basis. Used similar tools to calculate the 
        actual resource usage of our users on the platform, and present those as insights to our App Code owners 
        so they can in turn limit their resource wastage on the platform. 
        My term project involved planning my tasks and synching them with the team's bi-weekly sprints, and 
        collaborating with other team members to ensure high quality work.`,
        skills: 'Collaboration, Agile Sprint Planning',
        technologies: 'Spark, Jupyter Notebooks, Airflow, SQL',
        link: '',
        keyPoints: [
            `Worked with big data tools like Spark and Hadoop to automate tasks for data pulls, and processing of chargeback data from OCP`,
            `Developed the chargeback infrastructure for the MLOps team which was a key factor of success for their next quarter`,
            `Used similar tools to calculate the actual resource usage of users on the platform to limit resource wastage`,
            `Planed my own sprints and synched them with the team's agile bi-weekly sprints`,
            `Placed top 5 out of 17 teams in the co-ops case competition with 4 other co-op students`
        ],
        images: []
    },
    {
        id: 2,
        type: 'work',
        logoImgURL: RBC, 
        title: "Developer, RBC Amplify", 
        date: "May 2023 - August 2023",
        location: 'Toronto, ON',
        company: 'Royal Bank of Canada',
        companyDescription: `A Canadian multinational financial services company and the largest 
        bank in Canada by market capitalization`,
        description: `RBC's Amplify program is a summer internship 
        where students are put into groups of 4 and given challenge 
        prompts to solve over the summer. My team was challenged with
        innovating the Avion Rewards shopping experience and differentiating
        our rewards program from others out there today. Together, my team and I went
        through all the phases of the software development process; 
        from breaking down the problem statement, researching the problem,
        brainstoring potential solutions, designing, implementing, and finally pitching our solution
        at the end of the summer.`,
        skills: 'Design Thinking, Product Ideation, Pitching and Presenting, Leadership',
        technologies: 'React, TailwindCSS, MongoDB, OpenShift',
        link: 'https://www.youtube.com/watch?v=-DMvTIxqB-o',
        keyPoints: [
            `Worked in a cross-functional team of 4`,
            `Implement our chosen solution that projected $87MM in revenue and 17% increase in new users over 5 years`,
            `Completed research to refine, define the scope, and reframe our challenge`,
            `Continously present progress, roadblocks, and opportunities to relevant stakeholder`,
            `Pitch our project at the end of the summer at the AmpExpo`
        ],
        images: []
    },
    {
        id: 3,
        type: 'work',
        logoImgURL: Bell, 
        title: "Access Network Engineering Student", 
        date: "May 2022 - December 2022", 
        location: 'London, ON',
        company: 'Bell Canada',
        companyDescription: `Canada's largest telecommunications company, providing Mobile phone, TV, 
        high speed and wireless Internet, and residential Home phone services`,
        description: `Co-Lead Developer of Cobra, a web app for Bell's Contractor Management Team for them
        to manage vendor contracts, manage contract SKUs, tracking contractor's access to Bell sites, onboard
        new vendors, view SKU statistics and compare SKU prices.`,
        skills: 'Leadership, Software Development LifeCycle, Agile sprint planning, Communication',
        technologies: 'Django, Python, Javascript, HTML, CSS, MySQL, Git, Unix',
        link: '',
        keyPoints: [
            `Co-lead and developed Cobra along with another summer intern`,
            `Planned agile sprints and decided which features to include in each sprint`,
            `Participated in daily stand-ups to present progress, roadblocks and goals`,
            `Continously implemented, tested and deployed key features`,
            `Deployed the application on an Ubuntu server`,
            `Worked full-time on Cobra for the summer and stayed on part-time from September 
            to December while at school`
        ],
        images: []
    },
    {
        id: 4,
        type: 'work',
        logoImgURL: MCGLaw, 
        title: "Summer Student", 
        date: "May 2021 - August 2021", 
        location: 'Calgary, AB',
        company: 'MCG Law',
        companyDescription: `A boutique class action litigation, personal injury, commercial real estate law
        firm in downtown Calgary`,
        description: `Resigned and streamlined the interface of a law firm's client facing website using SquareSpace `,
        skills: 'Problem solving, data analysis, critical thinking',
        technologies: 'UX/UI Design, Square Space, Photoshop, Figma',
        link: 'https://www.mcglaw.ca/',
        keyPoints: [
            `Responsible for redesigning and reimagining the firm's website`,
            `Utilized data analytics such as clicks per page, and drop off rate to empower UI modification desisions`
        ],
        images: []
    }
]

export const extraCurr = [
    {
        id: 1,
        type: 'club',
        logoImgURL: WDSLogo, 
        title: "Developer Team Lead", 
        date: "Oct 2022 - April 2023", 
        location: 'London, ON',
        company: 'Western Developers Society',
        companyDescription: `A Western University club that pairs developer teams with organizations needing
        web services`,
        description: `Team Lead of a group of 8 developers for a club
        at Western University that pairs groups of developers with
        non-profits that need help developing their websites and other
        software development related services. As Team Lead, I was responsible
        for developing high level timelines, communicating with stakeholders,
        requirements elicitations and ensuring my team stayed on track 
        to meet deadlines`,
        skills: 'Project Management, Agile Workflow, Leadership, High Level Timelines, Communication',
        technologies: 'Jira, Figma, Lucid Chart, Figma, React, JavaScript, HTML, CSS',
        link: 'https://london-bridges.vercel.app/home',
        keyPoints: [
            `Co-lead a team of 8 developers`,
            `Communicated with stakeholders`,
            `Produced high-level timelines`,
            `Tracked and monitored developers progress to meet deadlines`,
            `NOTE: the site has yet to be populated with the club's information. The link will take 
            you to the site that has temporary placeholder content`
        ],
        images: []
    },
    {
        id: 2,
        type: 'club',
        logoImgURL: WETT,
        title: "Head of Development",
        date: "Oct 2022 - Present",
        location: 'London, ON',
        company: 'Western Engineering Tobogganing Team',
        companyDescription: `A Western University club that constructs wire framed and concrete toboggans 
        and competes in The Great Northern Concrete Toboggan Race (GNCTR), a multinational toboggan race`,
        description: `Head of software development for Western Engineering Tobogganing Team, 
        a Western University engineering club. Includes developing and redesigning the club's 
        website and managing a team of developers.`,
        skills: 'Leadership, UI/UX Design',
        technologies: '',
        link: 'https://wetterisbetter.ca/',
        keyPoints: [
            `Western Engineering Toboganing Team (WETT) is one of Western's largest engineering clubs `,
            `Focused on UX/UI design of the website, and maintaining the site`
        ],
        images: []
    },
    {
        id: 3,
        type: 'club',
        logoImgURL: WesternOrientation,
        title: "Engineering Student Orientation Leader",
        date: "Sept 2022 - April 2023",
        location: 'London, ON',
        company: 'Western University',
        companyDescription: `Western University, located in London, Onatrio`,
        description: `A volunteer leadership program at Western University designed to support and guide 
        new students through their first year of engineering, all while promoting an inclusive, collaborative, 
        and safe environment`,
        skills: 'Leadership, Communication, Mentorship',
        technologies: '',
        link: 'https://www.oweek.ca/sophs/',
        keyPoints: [
            `Underwent a week of training to learn how to identify, and properly respond to sensitive 
            situations such as mental health crises, discrimination, sexual misconduct...etc.`,
            `Was responsible for 13 first year engineering students throughout the academic year`,
            `Supported my first years by acting as a mentor, and providing them ressources and support they
            needed to be successful in their first year of schooling`,
            `Fostered an inclusive and positive while promoting culture and tradition for all first year students`
        ],
        images: []
    },
    {
        id: 4,
        type: 'club',
        logoImgURL: WesternUniversity,
        title: "Mentor",
        date: "Sept 2020 - April 2023",
        location: 'London, ON',
        company: 'Women in Engineering',
        companyDescription: `A club at Western University that encourages innovation and strives to create 
        a supportive community, and provide women in engineering a unique opportunity for team building and support`,
        description: `Mentorship program at Western University designed to help, support, and encourage 
        young women in engineering navigate the world of STEM, offer them unique oppportunities for support, and 
        create a supportive community for all`,
        skills: 'Leadership',
        technologies: '',
        link: 'https://www.eng.uwo.ca/women-in-engineering/',
        keyPoints: [
            `Was paired with an incoming female first year engineering student each academic year`,
            `As a mentor, was responsible for supporting, ecouraging and guiding mentees with any help or advice they required`
        ],
        images: []
    }
]