import React, {useEffect} from 'react';
import './Description.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Description(props){
    const location = useLocation();
    const { data } = location.state;

    useEffect(() => {
        console.log(data);
    });

    return (
        <div id='description'>
            <NavBar/>
            <div id='description-title-container'>
                <h1>{data.company}</h1>
                <div id='description-title'>{data.title}</div>
                <div className='horizontal-line'></div>
            </div>
            <div id='description-gray-background-container'>
                <div className='gray-background'>
                    {data.description}
                </div>
                <div className='gray-background'>
                    <div>
                        <div className='heading-d1'>Date</div>
                        <div>{data.date}</div>
                    </div>
                    <div>
                        <div className='heading-d1'>Technologies</div>
                        <div>{data.skills}</div>
                    </div>
                </div>
            </div>
            <div id='description-imgs-container'>

            </div>
            <Footer/>
        </div>
    );
}