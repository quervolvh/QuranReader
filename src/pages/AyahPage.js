import React, { Component } from 'react';
import AyahBox from '../components/AyahBox';
import Filter from '../components/filter';
import '../css/header.css';
import { handleClick } from '../actions/events';
import { Header } from '../components/Header';

export class AyahPage extends Component{
    constructor(props){
        super(props);
        this.handleClick = handleClick.bind(this);
    }
    state={
        show: 'block'
    }

    render() {
        return (
            <div>
                <Header />
                <AyahBox />
            </div>
        );
    }
}
export default AyahPage;