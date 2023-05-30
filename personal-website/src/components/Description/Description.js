import React, {useEffect} from 'react';
import './Description.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Description(props){
    const location = useLocation();
    const { data } = location.state;

    useEffect(() => {
        console.log(location.state);
        console.log(data);
    });

    return (
        <div id='description'>
            <h1>{data.title}</h1>
        </div>
    );
}