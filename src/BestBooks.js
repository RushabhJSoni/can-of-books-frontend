import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Book from './Book.js'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async()=>{
    let url = `http://localhost:3001/books`;
    const response = await axios.get(url);
    this.setState({books:response.data})
  }
 
  componentDidMount(){
    this.getBooks();
  }

  render() {
return (
        <Container style={{display: "flex", flexDirection:"column", justifyContent:"center", width:"50%"}}>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 ? (
          <Carousel>
         {this.state.books.map(book => (<Carousel.Item key ={book._id} ><Book book={{book}}/>
          </Carousel.Item>))}
          {/* {this.state.books.map(book => (<Book key={book._id} book={book}/>))} */}
        </Carousel>
        ) : (<h3>No Books Found :</h3>)}
        </Container>

      )
  }
}

export default BestBooks;
