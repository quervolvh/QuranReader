import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";

export function AyahBox() {
    const [number, setNumber] = useState(1);
    
    const handleClick = (event) => {
        console.log('here')
    };

    const handleChange = (event) => {
        console.log(number + 'before');
        setNumber(event.target.value);
        console.log(number + 'after');
    }

    return (
        <div id='Login'>
            <div id='login_div'>
                <form onSubmit={handleClick}>
                    <div className='login_wrapper'>
                        <p> the Qurah consists of 6,236 ayahs! </p>
                        <p> select an ayah </p>
                    </div>
                    <div className='login_wrapper'>
                        <input id='ayahNumb' className='input_text' value={number} type="number" onChange={handleChange} name="username" max='6236' min='1' />
                    </div>
                    <div className='login_wrapper'>
                        <Link to={`/ayahPage/${number}`}><button className='button_des' onClick={handleClick}> Read Ayah </button></Link>
                    </div>
                </form>
            </div>
            <div className='pic_Left'></div>
        </div>
    );
}
export default AyahBox;