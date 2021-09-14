import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';

function App() {
  return  (
    <div>
      <Header />
      <Main />
      <Footer />
      
    </div>
  );
}


class HornedBeast extends Component {
  render() {
    return <h1>I am a horned beast with the title of {'this.props.title'}</h1>;
  }
}
 
export default App;
