import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default class Quote extends Component {
  state = {       
    showingFront : true
  }

  toggleShowingFront = () => {
    this.setState({
      showingFront: !this.state.showingFront
    })
  }

  likeIncreaser = () => {
    this.props.quote.likes += 1
    let data = {likes: this.props.quote.likes}
    fetch(`http://localhost:4000/quotes/${this.props.quote.id}`, {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      })
      .then((r) => r.json())
      .then((quoteObj) => this.props.updateLikesOnState(quoteObj));
  }



    render() {
      
      let {author, image, quote, source, likes, favorite} = this.props.quote
        return (
          <Card className="quote_card">
            <div onClick={this.toggleShowingFront}>
            {this.state.showingFront?
                <Card.Content>
                  <Card.Header className="quote">"{quote}"</Card.Header>
                </Card.Content>
            :
                <Card.Content className="card_back">
                  <Image className="author_img" src={image} wrapped ui={false} alt={author}></Image>
                  <div className="author_info">
                    <Card.Header>{author}</Card.Header>
                    <Card.Description><em>{source}</em></Card.Description>
                  </div>
                </Card.Content>
            }
            </div>
            
            <Card.Description className="likes">
              <button onClick={this.likeIncreaser}>♡</button>
              {likes}
              <button onClick={console.log("Deleted")}>delete</button>
            </Card.Description>

          </Card>
            
            
       
    
       )
    }


}
