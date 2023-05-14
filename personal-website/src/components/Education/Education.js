import React from 'react';
import './Education.css';

export default function Education(){
    return (
        <div id="education-container">
            <div id="education-container-title">Education</div>
            <div className="education">
                <div className="education-topBar">
                    <div className="education-name">Western University</div>
                    <div className="education-dates">2020-2024</div>
                </div>
                <div className="education-subheading">BESc Software Engineering</div>
                <div className="education-description">
                    <div><span className="education-description-field">GPA:  </span>4.0</div>
                    <div><span className="education-description-field">Accolades:  </span>Dean's Honors List 2021 and 2022</div>
                    <div><span className="education-description-field">Notable Courses:  </span>
                        Web Technologies, Database Management Systems, Operating Systmes, Theoretical Foundations of Software Engineering
                    </div>
                </div>
            </div>
        </div>
    );
}