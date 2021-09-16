import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BeastImage from './BeastImage'


class Main extends Component {
    render() {  
        
        const bios = this.props.hornedBeast;
         //console.log(this.props.hornedBeast)
        return (
            <Container>
              <h2>{this.props.message}</h2>

        <Row>
            <Col><BeastImage bio={bios[0]}/></Col>
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

        <Row>
            <Col><BeastImage bio={bios[6]}/></Col>
            <Col><BeastImage bio={bios[7]} /></Col>
        </Row>

        <Row>
            <Col><BeastImage bio={bios[8]} /></Col>
            <Col><BeastImage bio={bios[9]} /></Col>
        </Row>

        <Row>
            <Col><BeastImage bio={bios[10]} /></Col>
            <Col><BeastImage bio={bios[11]} /></Col>
        </Row>

        <Row>
            <Col><BeastImage bio={bios[12]}/></Col>
            <Col><BeastImage bio={bios[13]} /></Col>
        </Row>

        <Row>
            <Col><BeastImage bio={bios[14]} /></Col>
            <Col><BeastImage bio={bios[15]} /></Col>
        </Row>

        <Row>
            <Col><BeastImage bio={bios[16]} /></Col>
            <Col><BeastImage bio={bios[17]} /></Col>
        </Row>

        <Row>
            <Col><BeastImage bio={bios[18]} /></Col>
            <Col><BeastImage bio={bios[19]} /></Col>
        </Row>
      
            </Container>
          );
        }
      }

 export default Main;