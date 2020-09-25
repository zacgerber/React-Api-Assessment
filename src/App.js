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
                <h1>Brand Name: </h1><ul><h3>{s.brand_name}</h3></ul>
                <h1>Manufacturer: </h1><ul><h3>{s.manufacturer}</h3></ul>
                <h1>Shoe Type: </h1><ul><h3>{s.shoe_type}</h3></ul>
                <h1>Shoe Color: </h1><ul><h3>{s.color}</h3></ul>
                <h1>Material:</h1> <ul><h3>{s.material}</h3></ul>
                <h1>Shoe Size: </h1><ul><h3>{s.size}</h3></ul>
                <h1>Fasten Type:</h1> <ul><h3>{s.fasten_type}</h3></ul>
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
