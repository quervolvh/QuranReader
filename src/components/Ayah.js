import React from 'react';
import '../css/ayah.css';


export function Ayah(props) {
    const { ayah } = props;
    const { number } = props;
    const { transliteration } = props;
    const { arabic } = props;
    return (
        <div>
            <div className='ayah'>
                <div className='arabic' dir="rtl"> <p> {arabic.text} </p> </div>
                <div className='ayah_transliteration'> <p> {transliteration.text} </p> </div>
                <div className='title'> <p> {number+1}. {ayah.text} </p> </div>
                {/* <div className='ayahs'> {surah.numberOfAyahs} ayahs </div> */}
            </div>
        </div>
    );
}
export default Ayah;