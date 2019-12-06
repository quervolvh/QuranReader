import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import HeaderPasser from './components/HeaderPasser';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import JuzPage from './pages/JuzPage';
import JuzReader from './pages/JuzReader';
import AyahPage from './pages/AyahPage';
import AyahSelectPage from './pages/AyahSelectPage';
import ChapterReaderAyah from './components/ChapterReaderAyah';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/ChapterPage/:surah" component={ChapterPage}/>
          <Route exact path="/juzPage" component={JuzPage}/>
          <Route exact path="/JuzReader/:juz" component={JuzReader}/>
          <Route exact path="/ayahPage" component={AyahSelectPage}/>
          {/* <Route exact path="/ayahPage" component={AyahPage}/> */}
          <Route exact path="/ayahPage/:ayah" component={ChapterReaderAyah}/>
        </Switch>
      </Router>
    );
  }
}

export default App;