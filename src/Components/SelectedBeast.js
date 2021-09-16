import { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';



class SelectedBeast extends Component {
  render() {
    // console.log(this.props)
    return (
      <Modal show={this.props.show} onHide={this.props.closeModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <img src={this.props.selectedBeast.image_url} className="img-fluid" alt={''}></img>

          </Modal.Body>

          <Modal.Footer>
            <p>{this.props.selectedBeast.description}</p>
            <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default SelectedBeast;