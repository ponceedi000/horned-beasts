import './App.css';
// import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return  (
    <div>
      <Header />
      <Main />
      <Footer />
      <button></button>
    </div>
  );
}

// class Footer extends Component {
//   render() {
//     return <h1>I am a footer</h1>
//   }
// }

// class Main extends Component {
//   //needs to know the title pass in somehow....
//   render() {
//     return (
//     <>
//     <h1>I am a Mai my message is {this.props.message} </h1>
//     <HornedBeast title={'Rhino'}/>
//     </>
//     )
//   }
// }

class HornedBeast extends Component {
  render() {
    return <h1>I am a horned beast with the title of {'this.props.title'}</h1>
  }
}
 
export default App;
