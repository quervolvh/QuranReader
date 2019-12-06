import React from 'react';
import '../css/surah.css';
import Ayah from '../components/Ayah';


export function ChapterReader(props) {
    const { surah, transliteration, arabic } = props;

    return (
        <div>
            <div className='ChapterReader'>
                <div className='titleChapter'> <div> {surah.number} </div> <div> {surah.englishName} </div> <div> ({surah.englishNameTranslation}) </div> </div>
                {surah.ayahs.map((ayah, index) =>
            
                <Ayah key={ayah.number} arabic={arabic.ayahs[index]} number={index} ayah={ayah} transliteration={transliteration.ayahs[index]} />)}
            </div>
        </div>
    );
}
export default ChapterReader;