import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Horns extends React.Component {
  imageSubmit = (e) => {
    // this.props.handleSubmit
  }
  render () {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.Group className="userName" controlId="formUserName">
          <Form.Label htmlFor="yourName">User Name</Form.Label>
          <Form.Control type="User Name" placeholder="Enter user name" id="yourName"/>
          <Form.Text className="muted-text">
            Enter your first and last name.
          </Form.Text>
        </Form.Group>
        <Form.Select aria-label="Default select" onChange={this.props.onChange}>
          <option>Open this select menu</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
          <option value="All">All pictures</option>
        </Form.Select>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default Horns;