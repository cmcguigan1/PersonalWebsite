import RBC from '../assests/images/RBC_icon.jpg';
import WDSLogo from '../assests/images/WDS.jpg';
import Bell from '../assests/images/Bell.png';
import WETT from '../assests/images/WETT.jpg';

export const professional = [
    {
        id: 1,
        type: 'work',
        logoImgURL: RBC, 
        title: "Developer, RBC Amplify", 
        date: "May 2023 - August 2023",
        company: 'Royal Bank of Canada',
        companyDescription: `A Canadian multinational financial services company and the largest 
        bank in Canada by market capitalization`,
        description: `RBC's Amplify program is a summer internship 
        where students are put into groups of 4 and given challenge 
        prompts to solve over the summer. Together, my team and I went
        through all the phases of the software development process, 
        from breaking down the problem statement, researching the problem,
        brainstoring potential solutions, designing, and implementing.`,
        skills: '',
        link: 'https://www.youtube.com/watch?v=-DMvTIxqB-o',
        keyPoints: [
            `Worked in a cross-functional team of 4`,
            `Completed research to refine, define the scope, and reframe our challenge`,
            `Continously present progress, roadblocks, and opportunities to relevant stakeholder`,
            `Implement our chosen solution`,
            `Pitch our project at the end of the summer at the AmpExpo`
        ],
        images: []
    },
    {
        id: 2,
        type: 'work',
        logoImgURL: Bell, 
        title: "Access Network Engineering Student", 
        date: "May 2022 - December 2022", 
        company: 'Bell Canada',
        companyDescription: `Canada's largest telecommunications company, providing Mobile phone, TV, 
        high speed and wireless Internet, and residential Home phone services`,
        description: `Co-Lead Developer of Cobra, a web app for Bell's Contractor Management Team for them
        to manage vendor contracts, manage contract SKUs, tracking contractor's access to Bell sites, onboard
        new vendors, view SKU statistics and compare SKU prices.`,
        skills: 'Django, Python, Javascript, HTML, CSS, MySQL, Git, Unix',
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
    }
]

export const extraCurr = [
    {
        id: 1,
        type: 'club',
        logoImgURL: WDSLogo, 
        title: "Developer Team Lead", 
        date: "Oct 2022 - April 2023", 
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
        skills: 'Project Management, Agile Workflow, Leadership, Jira, High Level Timelines, Communication',
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
        date: "Oct 2022 - April 2023",
        company: 'Western Engineering Tobogganing Team',
        companyDescription: `A Western University club that constructs wire framed and concrete toboggans 
        and competes in The Great Northern Concrete Toboggan Race (GNCTR), a multinational toboggan race`,
        description: `Head of software development for Western Engineering Tobogganing Team, 
        a Western University engineering club. Includes developing and redesigning the club's 
        website and managing a team of developers.`,
        skills: 'Leadership, UI/UX Design',
        link: 'https://wetterisbetter.ca/',
        keyPoints: [
            `Western Engineering Toboganing Team (WETT) is one of Western's largest engineering clubs `,
            `Focused on UX/UI design of the website, and maintaining the site`
        ],
        images: []
    }
]