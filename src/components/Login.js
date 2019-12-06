import React from 'react';
import { Link } from "react-router-dom";

export function Login() {
    return (
        <div id='Login'>
            <div id='login_div'>
                <div className='login_wrapper'>
                    <p> username </p>
                    <input className='input_text' type="text" name="username" />
                </div>
                <div className='login_wrapper'>
                    <p> password </p>
                    <input className='input_text' type="password" name="username" />
                </div>
                <div className='login_wrapper'>
                <Link to="/home"> <button className='button_des'> Login </button> </Link> <Link to="/register"> <button className='button_des optB'> Unregistered ? </button> </Link>
                </div>
            </div>
            <div className='pic_Left'></div>
        </div>
    );
}
export default Login;