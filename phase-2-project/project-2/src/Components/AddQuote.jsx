import React from 'react';
import { Button, Form, Card } from 'semantic-ui-react'

class AddQuote extends React.Component {

  state = {
    author: "",
    image: "",
    quote: "",
    source: "",
    likes: 0,
    favorite: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let formattedObj = {
      author: this.state.author,
      image: this.state.image,
      quote: this.state.quote,
      source: this.state.source,
      likes: 0,
      favorite: false
    }

    fetch(`http://localhost:4000/quotes`, {
      method: "POST",
      headers: {
        "Content-type" : "Application/json"
      },
      body: JSON.stringify(formattedObj)
    })
    .then(res => res.json())
    .then(newlyAddedQuote => {
      this.props.addQuoteToEndOfState(newlyAddedQuote)
      this.setState({
        author: "",
        image: "",
        quote: "",
        source: ""
      })
    })
  }

  render() {
    return (
      <Card className="addForm">
        <h3>Add your own quote to the collection!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Author  </label>
            <input 
              id="author"
              name="author"
              onChange={this.handleChange}
              value={this.state.author} 
              placeholder='Author Name' 
            />
          </Form.Field>
          <Form.Field>
            <label>Quote  </label>
            <input 
              id="quote" 
              name="quote" 
              onChange={this.handleChange}
              value={this.state.quote} 
              placeholder='Type Quote Here' 
            />
          </Form.Field>
          <Form.Field>
            <label>Source  </label>
            <input 
              id="source" 
              name="source" 
              onChange={this.handleChange}
              value={this.state.source} 
              placeholder="Book Title" 
            />
          </Form.Field>
          <Form.Field>
            <label>Author Photo  </label>
            <input 
              id="image" 
              name="image" 
              onChange={this.handleChange}
              value={this.state.image} 
              placeholder="Image URL"
            />
          </Form.Field>
          <Form.Button type='submit'>Submit</Form.Button>
        </Form>
      </Card>
    );
  }
}
  
export default AddQuote;
  