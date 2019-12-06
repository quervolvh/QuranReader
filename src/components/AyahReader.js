import React from 'react';
import '../css/login.css';
import Ayah from '../components/Ayah';


export function AyahReader(props) {
    const { ayah } = props;
    const { transliteration } = props;
    const { arabic } = props;
    return (
            <div id='Login'>
            <div id='login_div'>
                <div className='login_wrapper'>
                    <p> {ayah.number} </p>
                </div>
                <div className='login_wrapper arabic' dir="rtl">
                    <p> {arabic.text} </p>
                </div>
                <div className='login_wrapper title'>
                    <p> {ayah.text} </p>
                </div>
                <div className='login_wrapper ayah_transliteration'>
                    <p> {transliteration.text} </p>
                </div>
                
            </div>
            <div className='pic_Left'></div>
        </div>
    );
}
export default AyahReader;