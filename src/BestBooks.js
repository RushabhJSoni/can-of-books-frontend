import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async()=>{
    let url = `${process.env.DB_URL}/books?email=${this.props.email}`;
    const response = await axios.get(url);
    this.setState({books:response.data})
  }
 
  componentDidMount(){
    this.getBooks();
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (<BookCarousel books={this.state.books}/>
        ) : (
          <h3>No Books Found :(</h3>
        )}
       
      </>
    )
  }
}

export default BestBooks;
