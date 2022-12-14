import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: {},
      showModal: false,
    }
  }

  handleHideModal = () => {
    this.setState({
      showModal: false,
    })
  }

  handleShowModal = (beast) => {
    this.setState({
      showModal: true,
      beast: beast,
    })
    console.log(beast);
  }


  render() {
    return (
      <>
        <Header/>
        <Main
          data={data}
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
        />

      </>
    );
  }

}

export default App;