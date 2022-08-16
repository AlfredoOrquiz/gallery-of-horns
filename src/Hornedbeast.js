import React from 'react';
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
      <article className='hornedBeast'>
        <h3>{this.props.title}</h3>
        <p>💖{this.state.votes} Votes</p>
        <p onClick={this.favorite}>Vote for me</p>
        <img src={this.props.imageURL} alt={this.props.description}></img>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;