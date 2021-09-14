import { Component } from 'react';
//import itchy from './images/itchy'
//import images here


class Main extends Component {
    render() {
        
        return( 
        <> 
        <HorenBeast title={} imgURL={} description={''}/>
        <HorenBeast title={} imgURL={} description={''}/>
        </>
            )
    }
}

class HornedBeast extends Component {
    render() {
        return (
            <>
            <h2>This horned beast is known as {this.props.title}</h2>
            <img src={this.props.imgURL} alt='hornedBeast_img' title={this.props.title} />
            <p>{this.props.description</p>
            </>
        )
    }
}


export default Main;