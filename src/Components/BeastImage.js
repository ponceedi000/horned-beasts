import { Component } from 'react';
import SelectedBeast from './SelectedBeast';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BeastData from '../data.json'


class BeastImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'Vote', 
      votes: 0,
      show: false,  
      selectedBeast: {},
      data: BeastData   
    }
  }

  handleClick = (event) => {
    // add vote by increment of one
    this.setState({
      votes: this.state.votes + 1     
    });
  }

  openModal = () => {
    const selectedBeast = this.props.bio;
    this.setState ({
      show: true,
      selectedBeast: selectedBeast
    })
    console.log(this.state.selectedBeast)
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
        <Card.Img variant="top" src={this.props.bio.image_url}  onClick={this.openModal} />
        <Card.Body>
          <Card.Title>{this.props.bio.title}</Card.Title>
          <Card.Text>
            {this.props.bio.description}
          </Card.Text>
          <Button onClick={this.handleClick} variant="primary">{this.state.status}: {this.state.votes} </Button>
        </Card.Body>
      </Card>
      <SelectedBeast closeModal={this.closeModal} show={this.state.show} selectedBeast ={this.state.selectedBeast}/>
      </div>
    )
  }
}
export default BeastImage;