import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Header from './containers/Header/Header';
import Endless from './containers/Home/Endless/Endless';
import Favorites from './containers/Favorites/Favorites';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/breed/:selectedDog' component={Endless} />
            <Route path='/favorites' component={Favorites} />
            <Route render={() => (<h1>404 нету такой страницу у нас, извинити</h1>)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedDog: state.dogs.selectedDog
  }
}

export default connect(mapStateToProps)(App);
