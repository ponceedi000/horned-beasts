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

            </Container>
        );
    }
}

export default Main;