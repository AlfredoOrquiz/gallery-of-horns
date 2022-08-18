import React from 'react';
import Image from "react-bootstrap/Image";
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {
  render () {
    return (
      <Modal show={this.props.handleShowModal} onHide={this.props.handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.beast.title}
          </Modal.Title>
        </Modal.Header>
        <Image src={this.props.beast.imgURL} />
        <p>{this.props.beast.description}</p>
      </Modal>
    )
  }
}

export default SelectedBeast;