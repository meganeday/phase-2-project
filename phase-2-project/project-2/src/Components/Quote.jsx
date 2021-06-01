import React, { Component } from 'react'

export default class Quote extends Component {



    render() {
      // console.log(this.props.quote)
      let {author, image, quote, source, likes, favorite} = this.props.quote
        return (

            <li className="cards__item">
            <div className="card">
              <div>
                <p className="card__title">"{quote}"</p>
                <p className="card__text"><em>{source}</em></p>
                <button>♡</button>
                <p>{likes}</p>
              </div>
              
              <div className="card__content">
                <p className="card__text">-{author}</p>
                <img src={image} alt={author} className="card__image" />
                <div className="card__detail">
                  
                  <br></br>
                  <div></div>
                  {/* <p>{PLACEHOLDER FOR POSSIBLE USE} </p> */}
                  <br></br>
                  <div></div>
                  <br></br>
                  {/* <p>{PLACEHOLDER FOR POSSIBLE USE }</p> */}
                </div>
              </div>
            </div>
          </li>
            
    

    
    
       )
    }


}
