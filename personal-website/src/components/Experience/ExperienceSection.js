import React, { useState } from 'react';
import Experience from './Experience';
import './ExperienceSection.css';
import AmplifyLogo from '../../assests/images/AmplifyLogo.webp';
import WDSLogo from '../../assests/images/WDS.jpg';

export default function ExperienceSection(){
  const [isToggled, setIsToggled] = useState(false);
  const [professional, setProfessional] = useState([
    {
      imgURL: {AmplifyLogo}, 
      title: "Developer, RBC Amplify", 
      date: "May 2023 - August 2023", 
      description: `RBC's Amplify program is a summer internship 
      where students are put into groups of 4 and given challenge 
      prompts to solve over the summer. Together, my team and I went
      through all the phases of the software development process, 
      from breaking down the problem statement, researching the problem,
      brainstoring potential solutions, designing, and implementing.`,
      link: ''
    }
  ]);
  const [extraCurr, setExtraCurr] = useState([
    {
      imgURL: {WDSLogo}, 
      title: "Developer Team Lead, Western Developers Society", 
      date: "Oct 2022 - April 2023", 
      description: `Team Lead of a group of 8 developers for a club
      at Western University that pairs groups of developers with
      non-profits that need help developing their websites and other
      software development related services. As Team Lead, I was responsible
      for developing high level timelines, communicating with stakeholders,
      requirements elicitations and ensuring my team stayed on track 
      to meet deadlines`         
    }
  ]);

  const toggleExperience = () => {
    setIsToggled((prev) => !prev);
  }

  return(
    <div id="experience-container">
      <div id="experience-container-title">Experience</div>
      <div id="exp-toggle">
        <label class="switch">
          <input onClick={toggleExperience} type="checkbox"/>
          <span class="slider round"></span>
        </label> 
        { !isToggled && <div id="experience-toggle-title">Professional</div> }  
        { isToggled && <div id="experience-toggle-title">Extra Curricular</div> }
      </div>
      <div>
        { !isToggled && professional &&
          professional.map((e) => {
            return <Experience exp={e}/>
          })
        }
        { isToggled && extraCurr &&
          extraCurr.map((e) => {
            return <Experience exp={e}/>
          })
        }
      </div>
    </div>  
  );
}