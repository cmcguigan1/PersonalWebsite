import React, { useState } from 'react';
import Experience from './Experience';
import './ExperienceSection.css';
import { extraCurr } from '../../data/ExperienceData';
import { professional } from '../../data/ExperienceData';

export default function ExperienceSection(props){
  const [isToggled, setIsToggled] = useState(false);

  const toggleExperience = () => {
    setIsToggled((prev) => !prev);
  }

  return(
    <div id="experience-container">
      <div id="experience-container-title">Experience</div>
      <div id="exp-toggle">
        <label className="switch">
          <input onClick={toggleExperience} type="checkbox"/>
          <span className="slider round"></span>
        </label> 
        { !isToggled && <div id="experience-toggle-title">Professional</div> }  
        { isToggled && <div id="experience-toggle-title">Extra Curricular</div> }
      </div>
      <div>
        { !isToggled && professional &&
          professional.map((e) => {
            return <Experience navigateToDescription={props.navigateToDescription} key={e.id} exp={e}/>
          })
        }
        { isToggled && extraCurr &&
          extraCurr.map((e) => {
            return <Experience navigateToDescription={props.navigateToDescription} key={e.id} exp={e}/>
          })
        }
      </div>
    </div>  
  );
}