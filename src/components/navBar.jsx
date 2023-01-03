import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar(props) {
    return (
        <>
            <div>
                <NavLink to='info'>Personal Information</NavLink>
            </div>
            <div>
                <NavLink to='todos'>To Do List</NavLink>
            </div>
            <div>
                <NavLink to='posts'>Posts</NavLink>
            </div>
            <div>
                <NavLink to='albums'>Albums</NavLink>
            </div>
            <div>
                <NavLink to='login'>Logout</NavLink>
            </div>
        </>
    )
}

