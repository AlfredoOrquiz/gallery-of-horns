import React from 'react';

class HornedBeast extends React.Component {
  render() {
    console.log(this.props);
    return (
      <article>
        <h3>{this.props.title}</h3>
        <img src={this.props.imageUrl} alt={this.props.description}></img>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;