import React, { Component } from 'react';
import Filter from '../components/filter';
import Holder from '../components/Holder';
import { Link } from "react-router-dom";
import { handleClick } from "../actions/events";
import Header from '../components/Header';

export class JuzPage extends Component {
    constructor(props){
        super(props);
        this.handleClick = handleClick.bind(this);
    }

    state= {
        juz: [{number: 0},],
        show: 'none'
    }

    render() {
        const holders = [];
        for(var i = 1; i < 31; i++){
            console.log(i);
            holders.push(
                <Link to={`/Juzreader/${i}`}>
                    <Holder number={i}> </Holder>
                </Link>
            );
        }
        return (
            <div>
                <Header/>
                <div id='holderDiv'>
                    {holders}
                </div>
            </div>
        );
    }
}
export default JuzPage;