import React from 'react';
import HornedBeast from './Hornedbeast';
import data from './data.json';
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
        {beastArr}
      </main>
    )
  }
}
export default Main;