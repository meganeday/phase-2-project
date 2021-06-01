import React, { Component } from 'react'

export default class Quote extends Component {



   state ={       

      showingFront : true

   }


  toggleShowingFront = () => {
       this.setState({
         
          showingFront: !this.state.showingFront

       })
  }






    render() {
      // console.log(this.props.quote)
      let {author, image, quote, source, likes, favorite} = this.props.quote
        return (
            //CARD FRONT
            
              <div onClick={this.toggleShowingFront}>
                {this.state.showingFront? <h1>"{quote}"</h1> : <img src={image}></img> }
                {this.state.showingFront? <button>♡</button>}
                <p>{likes}</p>
              </div>
            
            
       
    
       )
    }


}
