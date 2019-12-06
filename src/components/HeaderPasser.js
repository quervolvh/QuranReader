import React, { Component } from 'react';
import Header from '../components/Header';
import Filter from '../components/filter';
import Requests from '../actions/request';
import Surah from '../components/Surah';
import '../css/header.css';
import '../css/filter.css';
import debounce from 'lodash.debounce';
import Data from '../data/data.json';
import { handleClick } from '../actions/events';

export class HeaderPasser extends Component {
    constructor(props) {
        super(props);
        this.handleClick = handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    state = {
        surah: Data.data,
        show: 'none'
    }

    searcher = this.state.surah;

    emitChange(value) {
        console.log(this.searcher);
        this.setState({
            surah: this.searcher.filter(surahh => {
                if (surahh.englishName.toLowerCase().includes(value.toLowerCase())) {
                    return true;
                }
                return false;
            })
        }
        );
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.emitChangeDebounced(event.target.value);
    };

    async componentDidMount() {
        this.emitChangeDebounced = debounce(this.emitChange, 150);
    }
    componentWillUnmount() {
        this.emitChangeDebounced.cancel();
    }

    render() {
        return (
            <div>
                <Header onChange={this.handleChange} visibility={this.state.show} onClick={() => this.handleClick()} />
            </div>
        );
    }
}
export default HeaderPasser;