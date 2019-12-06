import React from 'react';
import { Link } from "react-router-dom";

function Filter(props){
    const { visibility } = props;
     
        return (
            <div id='Filter'>
                <div id='search'>
                    <div id='search_icon'></div>
                    <input id='count_search' type='class' placeholder='search for a Surah' onChange={props.onChange}/>
                </div>
                <div id='filter' onClick={props.onClick}>
                    <p id='filter_p'> filter by </p>
                    <div id='drop_down'></div>
                    <div id='filter_results_box' style={{display:visibility}}>
                        <Link to={`/home`}><p> Surah </p> </Link>
                        <Link to={`/juzPage`}> <p> Juz </p> </Link>
                        <Link to="/ayahPage"> <p> Ayah </p> </Link>
                    </div>
                </div>
            </div>
        );
    }


export default Filter;