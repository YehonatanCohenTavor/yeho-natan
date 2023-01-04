import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../App';

function Info() {
    const { activeUser } = useContext(UserContext);

    return ( 
        <div className='infoContainer'>
            <h1>Personal Information</h1>
            <p></p>
        </div>
     );
}

export default Info;