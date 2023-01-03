import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/navBar';
import ErrorPage from './ErrorPage';

function UserPage() {
    return (
        <>
            <h1>User's personal page</h1>
            <NavBar>
            </NavBar>
        </>

    );
}

export default UserPage;
