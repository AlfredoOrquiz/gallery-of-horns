import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {},
      // description: '',
      // imageURL: '',
      // imgSize: '',
      // title: '',
    }
  }

  handleClick = () => {
    this.setState({
      description: this.state.description,
      imgURL: this.state.imgURL,
      imgSize: this.state.imgSize,
      title: this.state.title,
    })
    console.log(this.state);
  }

  handleShowModal = (beast) => {
    this.setState({
      showModal: true,
      beast: beast,
    })
    console.log(beast);
  }

  handleHideModal = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      <>
        <Header/>
        <Main
          data={data}
          img={this.state.img}
          handleClick={this.handleClick}
          handleShowModal={this.handleShowModal}
        />
        <footer>
        &copy; Alfredo Orquiz 2022
        </footer>
        <SelectedBeast
          beast={this.state.beast}
          handleShowModal={this.handleShowModal}
          handleHideModal={this.handleHideModal}
          show={this.state.showModal} 
          onHide={this.handleHideModal}
        ></SelectedBeast>

      </>
    );
  }

}

export default App;