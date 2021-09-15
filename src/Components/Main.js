import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class Main extends Component {
    render() {  
        
        const bios = this.props.HornedBeast;

        return (
            <Container>
              <h2>{this.props.message}</h2>

        <Row>
            <Col><BeastImage bio={bios[0]} /></Col>
            <Col><BeastImage bio={bios[1]} /></Col>
        </Row>

        <Row>
            <Col><BeastImage bio={bios[2]} /></Col>
            <Col><BeastImage bio={bios[3]} /></Col>
        </Row>

        <Row>
            <Col><BeastImage bio={bios[4]} /></Col>
            <Col><BeastImage bio={bios[5]} /></Col>
        </Row>
      
            </Container>
          );
        }
      }
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


export default Main;