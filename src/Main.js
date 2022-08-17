import React from 'react';
import HornedBeast from './Hornedbeast';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Main.css';

class Main extends React.Component {
  render() {
    let beastArr = [];
    data.forEach((beast, idx) => {
      beastArr.push(
        <HornedBeast
        key={idx}
        title={beast.title}
        imageURL={beast.image_url}
        />
      )
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