import React from 'react';
import { Carousel } from 'react-bootstrap';



export default class Book extends React.Component {

  render() {
    return (
        
        <>
        <img
          className="d-block w-100"
          src="./src/ferrari.jpg"
          alt={this.props.book.title}
        />
        <Carousel.Caption>
          <h3>{this.props.books.title}</h3>
          <p>{this.props.books.description}</p>
        </Carousel.Caption>
        </>
      
      
      
      
    )
  }
}