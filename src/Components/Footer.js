import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

class Footer extends Component {

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>

                            {this.props.text}
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        );
    }

}

export default Footer;