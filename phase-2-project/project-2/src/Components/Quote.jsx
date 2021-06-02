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

    render() {
      // console.log(this.props.quote)
      let {author, image, quote, source, likes, favorite} = this.props.quote
        return (
          <Card className="quote_card" onClick={this.toggleShowingFront}>
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
            <Card.Description className="likes">
              <button>♡</button>
              {likes}
              <button>delete</button>
            </Card.Description>
          </Card>
            
            
       
    
       )
    }


}
