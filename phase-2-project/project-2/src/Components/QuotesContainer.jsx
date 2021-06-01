import React from 'react';
import Quote from './Quote';

const QuotesContainer = (props) => {
// console.log(props.arrayOfQuotes)
let arrayOfComp = props.arrayOfQuotes.map(quoteObj => {
  return < Quote key={quoteObj.id} quote={quoteObj} />
})


   
   
   
     return (
       <ul className="cards">
         {arrayOfComp}
       </ul>
     )
   
   };
   
   export default QuotesContainer;