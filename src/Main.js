import React from 'react';
import HornedBeast from './Hornedbeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Horns from './Horns.js';
import './Main.css';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sortedSelected: 0,
      filteredData: this.props.data
    }
  }

  handleSelect = (e) => {
    let selected = parseInt(e.target.value);
    this.setState({
      sortedSelected: selected
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.sortedSelected === 1) {
      let newData = this.props.data.filter(num => num.horns === 1);
      console.log(newData);
      this.setState({filteredData: newData});
    } else if (this.state.sortedSelected===2) {
      let newData = this.props.data.filter(num => num.horns === 2);
      this.setState({filteredData: newData});
    } else if (this.state.sortedSelected === 3) {
      let newData = this.props.data.filter(num => num.horns === 3);
      this.setState({filteredData: newData});
    } else if (this.state.sortedSelected === 100) {
      let newData = this.props.data.filter(num => num.horns === 100);
      this.setState({filteredData: newData});
    } else {
      this.setState({filteredData: this.props.data});
    }
  }
  

  render() {
    let beastArr = this.state.filteredData.map((beast) => {
    return <HornedBeast
      beast={beast}
      handleShowModal={this.props.handleShowModal}
      handleSelect={this.props.handleSelect}
      handleSubmit={this.props.handleSubmit}
      key={beast._id}
      title={beast.title}
      />
    });

    console.log(this.state.sortedSelected);
    console.log(this.state.filteredData);


    return (
      <main>
        <Horns 
        sortData = {this.props.data}
        onSubmit = {this.handleSubmit}
        onChange = {this.handleSelect}
        />
        <Container>
          <Row xs={1} sm={2} m={3} lg={4}>
            {beastArr}
          </Row>
        </Container>
      </main>
    )
  }
}
export default Main;