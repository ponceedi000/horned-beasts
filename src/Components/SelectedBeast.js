import { Component } from 'react'
import BeastImage from './BeastImage';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';



class SelectedBeast extends Component {
  render() {
console.log(this.props)
    return (
      <Modal show={this.props.show} onHide={this.props.closeModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{this.props.selectedBeast.title}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>          
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default SelectedBeast;