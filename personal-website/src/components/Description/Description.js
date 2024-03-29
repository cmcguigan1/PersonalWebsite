import React, {useEffect} from 'react';
import './Description.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Description(props){
    const location = useLocation();
    const { data } = location.state;

    useEffect(() => {
        document.title = 'Claire McGuigan';
        window.scrollTo(0, 0);
    });

    return (
        <div id='description'>
            <NavBar/>
            <div id='description-title-container'>
                <h1>{data.title}</h1>
                <div id='description-title'>{data.company}</div>
                <div className='horizontal-line'></div>
            </div>
            <div id='description-gray-background-container'>
                <div className='gray-background'>
                    <div className='heading-d1'>Description</div>
                    <div className='description-main-text'>{data.description}</div>
                    <br></br>
                    <div className='heading-d1'>Key Highlights</div>
                    <ul>
                        {
                            data.keyPoints.map((point) => {
                                return (
                                    <li className='description-main-text'>{point}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='gray-background'>
                    <div>
                        <div className='heading-d1'>Date</div>
                        <div className='description-main-text'>{data.date}</div>
                    </div>
                    <br></br>
                    { data.location &&
                        <div>
                            <div className='heading-d1'>Location</div>
                            <div className='description-main-text'>{data.location}</div>
                            <br></br>
                        </div>
                    }
                    { data.technologies &&
                        <div>
                            <div className='heading-d1'>Technologies</div>
                            <div className='description-main-text'>{data.technologies}</div>
                            <br></br>
                        </div>
                    }
                    { data.skills &&
                        <div>
                            <div className='heading-d1'>Skills</div>
                            <div className='description-main-text'>{data.skills}</div>
                            <br></br>
                        </div>
                    }
                    { data.link && 
                        <div>
                            <a className='link-to-product' target='_blank' href={data.link}>Link to Project</a>
                        </div>
                    }
                </div>
            </div>
            <div id='description-imgs-container'>
                { data.images &&
                    data.images.map((photo) => {
                        return (
                            <img className='description-photo' src={photo}/>
                        )
                    })
                }
            </div>
            <Footer/>
        </div>
    );
}