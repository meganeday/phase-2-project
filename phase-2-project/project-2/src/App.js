
import './App.css';

import React, { Component } from 'react'
import './App.css';

import Header from './Components/Header'
import SearchBar from './Components/SearchBar';
import QuotesContainer from './Components/QuotesContainer'


export default class App extends Component {




  render() {



    return (
      <div>
      <Header />
      <SearchBar />
      <QuotesContainer />  
      </div>
    )
  }
}
