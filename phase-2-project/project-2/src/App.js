
import './App.css';

import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import QuotesContainer from './Components/QuotesContainer';
import AddQuote from './Components/AddQuote';


export default class App extends Component {

  state = {
    quotes: [],
    filter: ""
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

  //The Below funtion updates the filter in the state above
  
  updateFilterState= (value) => {
     this.setState({
       filter: value
     })
  }
  


  render() {
    let arrayOfQuotes = this.state.quotes
    //Line 63 and 64 filter by source and author
    let newArrayofQuotes = arrayOfQuotes.filter((arrayObj) => { 
    return (arrayObj.author.toLowerCase().includes(this.state.filter.toLowerCase()) || arrayObj.source.toLowerCase().includes(this.state.filter.toLowerCase()))
    })
    



    return (
      <div>
      <Header />
      <SearchBar filter={this.state.filter} updateFilterState={this.updateFilterState} />
      <AddQuote addQuoteToEndOfState={this.addQuoteToEndOfState} />
      <QuotesContainer arrayOfQuotes={newArrayofQuotes} deleteQuote={this.deleteQuote} />  
      </div>
    )
  }
}
