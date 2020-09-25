import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shoes:[],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/shoe/")
    .then(res => res.json())
    .then(data => this.setState({shoes: data}));
  }

  render() {
    return (
    <div>
        <ul>
          {this.state.shoes.map(s => (
            <div>
            <li>
              <ul>
                <h2>Brand Name: {s.brand_name}</h2>
                <h2>Manufacturer: {s.manufacturer}</h2>
                <h2>Shoe Type: {s.shoe_type}</h2>
                <h2>Shoe Color: {s.color}</h2>
                <h2>Material: {s.material}</h2>
                <h2>Shoe Size: {s.size}</h2>
                <h2>Fasten Type: {s.fasten_type}</h2>
              </ul>
            </li>
            </div>
          ))}
        </ul>
    </div>
    );
  }
}

export default App;
