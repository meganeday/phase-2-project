
import './App.css';

import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import QuotesContainer from './Components/QuotesContainer';
import AddQuote from './Components/AddQuote';


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

  addQuoteToEndOfState = (newQuote) => {
    let newArr = [...this.state.quotes, newQuote]
    this.setState({
      quotes: newArr
    })
  }

  deleteQuote = () => {
    fetch("http://localhost:4000/quotes", {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          quotes: ""
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
      <AddQuote addQuoteToEndOfState={this.addQuoteToEndOfState} />
      <QuotesContainer arrayOfQuotes={arrayOfQuotes} deleteQuote={this.deleteQuote} />  
      </div>
    )
  }
}
