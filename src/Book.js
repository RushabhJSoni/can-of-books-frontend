import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

export default class Book extends React.Component {
 
  render() {

    /* TODO: render user's books in a Carousel */

    return (
        <Carousel.Item>
          <img
      src="frosted-cookie.jpg"
      alt="First slide"/>
         <Carousel.Caption>
        <h3>{this.props.book.title}</h3>
        <p>{this.props.description}</p>
        </Carousel.Caption>
          </Carousel.Item>
     )
  }
}

