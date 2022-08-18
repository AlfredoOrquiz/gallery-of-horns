import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
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
    return (
      <Col className='mt4'>
      <Card 
        style={{ width: '18rem' }}>
        <Card.Img 
          variant="top" 
          src={this.props.beast.image_url} 
          alt={this.props.beast.description}
          onClick={() => this.props.handleShowModal(this.props.beast)}
          />
          <Card.Body>
            <Card.Title>{this.props.beast.title}</Card.Title>
            <Card.Text>
            {this.props.beast.description}
            </Card.Text>
            <Card.Text>
            <p onClick={this.favorite}>💖{this.state.votes} Votes</p>
            </Card.Text>
          </Card.Body>
      </Card>
      </Col>
    )
  }
}

export default HornedBeast;