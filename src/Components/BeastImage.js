//import Image from 'react-bootstrap/Image';
import { Component } from 'react';
import SelectedBeast from './SelectedBeast';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BeastData from '../data.json'



class BeastImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: "Vote", 
      show: false,  
      selectedBeast: {},
      data: BeastData   
    }
  }

  handleClick = (event) => {
    // toggle the status between Yay and Nay
    this.setState({
      status: this.state.status === "Like" ? "Dislike" : "Like"
    });
    this.openModal(this.props.bio.title)
  }

  openModal = (name) => {
    const selectedBeast = BeastData.find(beast => beast.title === name);
    this.setState ({
      show: true,
      selectedBeast 
    })
  }

  closeModal = () => {
    this.setState ({
     show: false 
    })
  }



  render() {
    return (
      <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.bio.image_url}/>
        <Card.Body>
          <Card.Title>{this.props.bio.title}</Card.Title>
          <Card.Text>
            {this.props.bio.description}
          </Card.Text>
          <Button onClick={this.handleClick} variant="primary">{this.state.status}</Button>
        </Card.Body>
      </Card>
      <SelectedBeast closeModal={this.closeModal} show={this.state.show} selectedBeast ={this.state.selectedBeast}/>
      </div>
    )
  }
}
export default BeastImage;