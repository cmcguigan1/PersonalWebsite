import React, {useEffect} from 'react';
import './Description.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Description(){
    const location=useLocation();
    const { data }= location.state;

    useEffect(() => {
        console.log(data);
    });

    return (
        <div id='description'>
            <h1>Hi</h1>
            { data && <h1>{data}</h1>}
        </div>
    );
}