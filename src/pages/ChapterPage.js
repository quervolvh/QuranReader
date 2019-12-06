import React, { Component } from 'react';
import Filter from '../components/filter';
import Requests from '../actions/request';
import ChapterReader from '../components/ChapterReader';
import '../css/header.css';
import '../css/filter.css';
import '../css/chapterReader.css';
import Header from '../components/Header';

export class ChapterPage extends Component {
    state = {
        surah: '',
        transliteration: '',
        arabic: '',
        error: false
    }

    async componentDidMount() {
        const request = new Requests();
        const { surah } = this.props.match.params;
        const res = await request.getAll(surah).then(result => result);
        if (res[0] == undefined) {
            this.setState({ error: true })
        } else {
            this.setState({
                surah: res[0].data.data,
                transliteration: res[1].data.data,
                arabic: res[2].data.data
            });
        }
        console.log(this.state.transliteration);
    }

    componentWillUnmount() {

    }


    render() {
        console.log(this.error)
        return (
            <div>
                <Header />
                {this.state.error === true ? (<div id='load'> <div id='error_div'></div> <div> ERROR </div> </div>) :
                    this.state.surah.length === 0 ? (<div id='load'><div id='loader' /></div>) : (<ChapterReader surah={this.state.surah} transliteration={this.state.transliteration} arabic={this.state.arabic} />)}
            </div>
        );
    }
}
export default ChapterPage;