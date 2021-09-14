import { Component } from 'react';
import markhor from './img/markhor.jpg';
import saiga from './img/saiga.jpg';


class Main extends Component {
    render() {
        
        return( 
        <> 
        <HorenBeast title={'Markhor'} imgURL={'markhor'} description={'Lives in the mountains of central Asia'}/>
        <HorenBeast title={'Saiga'} imgURL={'saiga'} description={'Native to the dusty steppes of Kazakhstan, Russia'}/>
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
            <p>{this.props.description}</p>
            </>
        )
    }
}


export default Main;