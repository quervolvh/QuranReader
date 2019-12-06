import React from 'react';
import Register from '../components/Register';
import Header from '../components/Header';
import '../css/header.css';


export function RegisterPage() {
    return (
        <div>
            <Header />
            <Register />
        </div>
    );
}
export default RegisterPage;