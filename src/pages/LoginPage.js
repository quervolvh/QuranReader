import React from 'react';
import Login from '../components/Login';
import '../css/header.css';
import Header from '../components/Header';


export function LoginPage() {
    return (
        <div>
            <Header />
            <Login />
        </div>
    );
}
export default LoginPage;