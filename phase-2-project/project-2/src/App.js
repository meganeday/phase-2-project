
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

  //the below function deletes a card off the page and off the backend
  deleteQuote = (id) => {
    fetch(`http://localhost:4000/quotes/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => {
       
       let arrayWithoutDeleted = this.state.quotes.filter((quoteObj) => { 
         return quoteObj.id !== id
             })
             this.setState({      
                 quotes: arrayWithoutDeleted

             })    
      })
  }

  //The Below funtion updates the filter in the state above
  
  updateFilterState= (value) => {
     this.setState({
       filter: value
     })
  }
  
  //The Below function updates the likes on the fron end
  updateLikesOnState =(updatedObj) =>{
    let copyOfQuotes = this.state.quotes.map((quoteObj) =>{
      if(quoteObj.id === updatedObj.id){
         return updatedObj  
      } else {
      return quoteObj
      }     
    })
    this.setState({
    quotes: copyOfQuotes
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
      <QuotesContainer arrayOfQuotes={newArrayofQuotes} deleteQuote={this.deleteQuote} updateLikesOnState={this.updateLikesOnState}/>  
      </div>
    )
  }
}
