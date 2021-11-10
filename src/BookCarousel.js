import React from 'react';
import { Carousel } from 'react-bootstrap';
import Book from './book.js'


export default class BookCarousel extends React.Component {

  render() {
    return (
        
        <Carousel>
          {this.state.books.map(books =>  <Carousel.Item key={books._id}> <Book books={this.props.books}/></Carousel.Item>)}
        <img
          className="d-block w-100"
          src="./src/ferrari.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.props.books.title}</h3>
          <p>{this.props.books.description}</p>
        </Carousel.Caption>
        </Carousel>
      
      
      
      
    )
  }
}