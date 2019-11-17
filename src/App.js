import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header';
import Listbox from './components/Listbox';
import './css/common.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Listbox>
        </Listbox>
      </div>
    );
  }
}

export default App;