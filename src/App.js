import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import HornedBeast from './data.json';
//import SelectedBeast from './Components/SelectedBeast';

function App() {
  return  (
    <Container>
      <Header title="Horned Animals"/>
      <Main message="Make Your Beast Opinion Known" hornedBeast = {HornedBeast} />
      <Footer text="Your Opinion Counts!"/>
    </Container>
  );
}

 
export default App;
