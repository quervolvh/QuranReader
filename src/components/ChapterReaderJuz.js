import React from 'react';
import '../css/surah.css';
import Ayah from '../components/Ayah';


export function ChapterReaderJuz(props) {
    const style = {height: '50px', position: 'absolute', marginTop: '0px'}
    const { transliteration, arabic, juz } = props;
    return (
        <div>
            <div className='ChapterReader'>
                <div className='titleChapter'> <div className='Holder' style={style}> Juz {juz.number} </div> </div>
                {juz.ayahs.map((ayah, index) =>
            
                <Ayah key={ayah.number} number={index} ayah={ayah} arabic={arabic.ayahs[index]} transliteration={transliteration.ayahs[index]} />)}
            </div>
        </div>
    );
}
export default ChapterReaderJuz;