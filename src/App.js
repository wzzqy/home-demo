import React, { Component } from 'react';
import './App.css';
import "babel-polyfill";
import Main from './component/main/Main';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            path="/"
            component={Main}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
