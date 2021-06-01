
import './App.css';

import React, { Component } from 'react'
import './App.css';

import Header from './Components/Header'
import SearchBar from './Components/SearchBar';
import QuotesContainer from './Components/QuotesContainer'


export default class App extends Component {

  state = {
    quotes: []
  }

  componentDidMount(){
    fetch("http://localhost:4000/quotes")
      .then(res => res.json())
      .then((quotesArr) => {
        // console.log(quotesArr)
        this.setState({
          quotes: quotesArr
        })
      })
  }



  render() {
    // console.log(this.state)
    let arrayOfQuotes = this.state.quotes

    return (
      <div>
      <Header />
      <SearchBar />
      <QuotesContainer arrayOfQuotes={arrayOfQuotes} />  
      </div>
    )
  }
}
