import React, { Component } from 'react';
import Header from '../components/Header';
import Filter from '../components/filter';
import Requests from '../actions/request';
import AyahReader from '../components/AyahReader';
import '../css/header.css';
import '../css/filter.css';
import '../css/chapterReader.css';

export class ChapterReaderAyah extends Component {
    state = {
        ayah: '',
        transliteration: '',
        arabic: '',
        errro: false
    }

    async componentDidMount() {
        const request = new Requests();
        const { ayah } = this.props.match.params;
        const res = await request.getAllAyah(ayah).then(result => result);
        if (res[0] == undefined) {
            this.setState({ error: true })
        } else {
            this.setState({
                ayah: res[0].data.data,
                transliteration: res[1].data.data,
                arabic: res[2].data.data
            });
        }
        // console.log(this.state.transliteration);
    }

    componentWillUnmount() {

    }


    render() {

        return (
            <div>
                <Header />
                {this.state.error === true ? (<div id='load'> Error </div>) :
                    this.state.ayah.length === 0 ? (<div id='load'><div id='loader' /></div>) : (<AyahReader ayah={this.state.ayah} transliteration={this.state.transliteration} arabic={this.state.arabic} />)}
            </div>
        );
    }
}
export default ChapterReaderAyah;