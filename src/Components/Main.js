import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BeastImage from './BeastImage'
import OptionSelector from './OptionSelector'
import HornedBeasts from '../data.json'


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beastFilter: HornedBeasts
        }
    }

    handleSelect = (choice) => {
        console.log(typeof choice)
        // let updatedBeastFilter;

        if (choice) {
            let updatedBeastFilter = HornedBeasts.filter(beast => beast.horns === +choice)

            this.setState({
                beastFilter: updatedBeastFilter

            })
        }
        // } else if (choice === 2) {
        //     updatedBeastFilter = HornedBeasts.filter(beast => beast.horns === choice)
        // } else if (choice === 100) {
        //     updatedBeastFilter = HornedBeasts.filter(beast => beast.horns === choice)
        // } else {
        //     updatedBeastFilter = HornedBeasts
        // }

    }



    render() {

        const bios = this.state.beastFilter;
        console.log(this.state.beastFilter)
        return (
            <Container>
                <h2>{this.props.message}</h2>

                <OptionSelector handleSelect={this.handleSelect} />
                <Row>
                    {
                        bios.map((beast, idx) => (
                            <Col key={idx}>
                                <BeastImage bio={beast} />
                            </Col>
                        ))
                    }
                </Row>


                {/* <Row>
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

                <Row>
                    <Col><BeastImage bio={bios[6]} /></Col>
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
                    <Col><BeastImage bio={bios[12]} /></Col>
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
                </Row> */}

            </Container>
        );
    }
}

export default Main;