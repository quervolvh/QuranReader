import React from 'react';
import { Link } from "react-router-dom";
import '../css/surah.css';
import { withRouter } from "react-router";

export function Holder(props) {
    const { number } = props;
    return (
        <div className='Holder'>
            <div className='title'> <p> Juz {number} </p> </div>
        </div>
    );
}
export default Holder;