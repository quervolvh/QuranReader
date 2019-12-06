import React, { Component } from 'react';
import Requests from '../actions/request';
import ChapterReader from '../components/ChapterReader';
import '../css/header.css';
import '../css/filter.css';
import '../css/chapterReader.css';
import ChapterReaderJuz from '../components/ChapterReaderJuz';
import Header from '../components/Header';

export class JuzReader extends Component {
    state = {
        juz: '',
        transliteration: '',
        arabic: '',
        error: false
    }

    async componentDidMount() {
        const request = new Requests();
        const { juz } = this.props.match.params;

        const res = await request.getAllJuz(juz).then(result => result);
        console.log(res);
        if (res[0] === undefined) {
            this.setState({ error: true })
        } else {
            this.setState({
                juz: res[0].data.data,
                transliteration: res[1].data.data,
                arabic: res[2].data.data
            });
        }
    }

    componentWillUnmount() {

    }


    render() {

        return (
            <div>
                <Header />
                {this.state.error === true ? (<div id='load'> <div id='error_div'></div> <div> ERROR </div> </div>) :
                this.state.juz.length === 0 ? (<div id='load'><div id='loader'/></div>) : (<ChapterReaderJuz juz={this.state.juz} arabic={this.state.arabic} transliteration={this.state.transliteration} />)}
            </div>
        );
    }
}
export default JuzReader;