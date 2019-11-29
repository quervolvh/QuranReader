import React from 'react';
import { Link } from "react-router-dom";
import '../css/surah.css';
import { withRouter } from "react-router";


export function Surah(props) {
    const { surah } = props;
    return (
        <div>
            <Link to={`/ChapterPage/${surah.number}`}>
                <div className='Surah'>
                    <div className='arabic_title' dir="rtl" lang="ar">  {surah.name} </div>
                    <div className='title'> <p> {surah.number}. {surah.englishName} ({surah.englishNameTranslation}) </p> </div>
                    <div className='ayahs'> {surah.numberOfAyahs} ayahs </div>
                </div>
            </Link>
        </div>
    );
}
export default withRouter(Surah);