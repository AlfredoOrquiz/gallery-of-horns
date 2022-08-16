import React from 'react';
import Card from 'react-bootstrap/Card';
import './Hornedbeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    }
  }

  favorite = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  };

  render() {
    console.log(this.props);
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.imageURL} alt={this.props.description}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.description}
            </Card.Text>
            <Card.Text>
            <p onClick={this.favorite}>💖{this.state.votes} Votes</p>
            </Card.Text>
          </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;