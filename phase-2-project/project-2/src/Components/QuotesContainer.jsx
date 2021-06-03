import React from 'react';
import Quote from './Quote';

const QuotesContainer = (props) => {
// console.log(props.updateFavoriteOnState)
  let arrayOfComp = props.arrayOfQuotes.map(quoteObj => {
    return < Quote key={quoteObj.id} quote={quoteObj} deleteQuote={props.deleteQuote} updateLikesOnState={props.updateLikesOnState} updateFavoriteOnState={props.updateFavoriteOnState} />
  });

  return (
  <div>
    <h3>Click on quote for to see source details</h3>
    <ul className="cards">    
      {arrayOfComp}
    </ul>
  </div>  
  );
};
   
export default QuotesContainer;