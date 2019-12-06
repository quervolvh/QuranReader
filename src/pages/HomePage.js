import React, { Component } from 'react';
import Filter from '../components/filter';
import Requests from '../actions/request';
import Surah from '../components/Surah';
import '../css/header.css';
import '../css/filter.css';
import debounce from 'lodash.debounce';
import Data from '../data/data.json';
import { handleClick } from '../actions/events';
import Header from '../components/Header';

export class HomePage extends Component {
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
    console.log(Data);
    return (
      <div>
        <Header onChange={this.handleChange} visibility={this.state.show} onClick={() => this.handleClick()} />
        <div id='HomePageSurahs'>
          {this.state.surah.map(surah =>
            <Surah key={surah.number} surah={surah} />)}
        </div>
      </div>
    );
  }
}
export default HomePage;