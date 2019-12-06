import React from 'react';
import Landing from '../components/Landing';
import '../css/header.css';
import '../css/login.css';
import Header from '../components/Header';

export function LandingPage() {
    return (
        <div>
            <Header />
            <Landing />
        </div>
    );
}
export default LandingPage;