import Image from 'react-bootstrap/Image'
import { Component } from 'react'

class BeastImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: "Like"
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
      <div>
        <Image onClick={this.handleClick} src={this.props.bio.image_url} alt="some horned beast" rounded fluid />
        <h3>{this.state.status}</h3>
      </div>
    )
  }
}
export default BeastImage;