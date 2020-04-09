import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SplashPage from '../../components/SplashPage/SplashPage';
import Play from '../../components/Play/Play';
import Setup from '../../components/Setup/Setup';
import Round from '../../components/Round/Round';
import Next from '../../components/Next/Next';
import Instructions from '../../components/Instructions/Instructions';
import Loading from '../../components/Loading/Loading';
import Finish from '../../components/Finish/Finish';
import indexedDB from '../../indexedBD';
import * as api from '../../api/api';
import cardData from '../../data/cards';
import './App.css';

class App extends Component {
  async componentDidMount() {
    await this.cardsPGtoIDB();
  }

  cardsPGtoIDB = async () => {
    if (navigator.onLine) {
      // const cardsPG = await api.getCards();
      indexedDB.allCards.clear();
      indexedDB.allCards.bulkAdd(cardData);
    }
  };

  render() {
    return (
      <div>
        <Route path="/" exact={true} component={SplashPage} />
        <Route path="/instructions" exact={true} component={Instructions} />
        <Route path="/setup" exact={true} component={Setup} />
        <Route path="/play" exact={true} component={Play} />
        <Route path="/loading" exact={true} component={Loading} />
        <Route path="/round" exact={true} component={Round} />
        <Route path="/next" exact={true} component={Next} />
        <Route path="/finish" exact={true} component={Finish} />
      </div>
    );
  }
}

export default App;
