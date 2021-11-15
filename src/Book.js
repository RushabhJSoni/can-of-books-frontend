import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from './ferrari.jpg'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';

export default class Book extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showNow : false
    }
  }

    handleClick = () =>{
      this.props.delBooks(this.props.book._id)
    }

       handleSubmit = (e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const description = e.target.description.value;
      const id = this.props.book._id;
      console.log(title,description)
      this.props.putBook(id,{title,description})
      this   .closeModal()
    }

    openModal = () => {
      this.setState({showNow: true});
    }

    closeModal = () => {
      this.setState({showNow: false});
    }

  render() {
    return (
        
        <>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
         <Modal show={this.state.showNow} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Book !</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit = {this.handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter your book title here" />
          </Form.Group>
         <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows ={3} placeholder="Enter a short book description" />
          </Form.Group>
          <Button variant="primary" type="submit">
          edit BOOK !
         </Button>
         </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer> 
          </Modal>
        <Carousel.Caption>
          <h3>{this.props.book.title}</h3>
          <p>{this.props.book.description}</p>
          <Button onClick = {this.handleClick}> Delete Book</Button>
          <Button onClick = {this.openModal}> Put Book</Button>
          </Carousel.Caption>
        </>
      
      
      
      
    )
  }
}