import React from 'react';
import { Link } from "react-router-dom";

export function Register() {
    return (
        <div id='Login'>
            <div id='login_div'>
                <div className='login_wrapper'>
                    <p> email </p>
                    <input className='input_text' type="email" name="username" />
                </div>
                <div className='login_wrapper'>
                    <p> username </p>
                    <input className='input_text' type="text" name="username" />
                </div>
                <div className='login_wrapper'>
                    <p> password </p>
                    <input className='input_text' type="password" name="username" />
                </div>
                <div className='login_wrapper'>
                    <Link to="/home"> <button className='button_des'> Register </button> </Link> <Link to="/login"> <button className='button_des optB'> have account ? </button> </Link>
                </div>
            </div>
            <div className='pic_Left'></div>
        </div>
    );
}
export default Register;