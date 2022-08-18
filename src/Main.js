import React from 'react';
import HornedBeast from './Hornedbeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Main.css';

class Main extends React.Component {
  render() {
    let beastArr = this.props.data.map((beast, idx) => {
      return <HornedBeast
        beast={beast}
        imageURL={beast.image_url}
        handleClick={this.props.handleClick}
        handleShowModal={this.props.handleShowModal}
        key={idx}
        title={beast.title}
        />
    });
    return (
      <main>
        <Container>
          <Row lg={4}>
            {beastArr}
          </Row>
        </Container>
      </main>
    )
  }
}
export default Main;