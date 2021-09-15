import Image from 'react-bootstrap/Image'
import { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class BeastImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: "Vote"
    }
  }

  handleClick = (event) => {
    // toggle the status between Yay and Nay
    this.setState({
      status: this.state.status === "Like" ? "Dislike" : "Like"
    });
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.bio.image_url} />
        <Card.Body>
          <Card.Title>{this.props.bio.title}</Card.Title>
          <Card.Text>
            {this.props.bio.description}
          </Card.Text>
          <Button onClick={this.handleClick} variant="primary">{this.state.status}</Button>
        </Card.Body>
      </Card>
    )
  }
}
export default BeastImage;