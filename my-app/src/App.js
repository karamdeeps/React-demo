import React from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends React.Component{
  constructor(props){
    super(props);
    let firstName = this.props.name.split(" ")[0]
    let lastName = this.props.name.split(" ")[1]
    
    this.state = {
      name: firstName,
      last: lastName
    }
  }

  render(){
  return <h1>Hello, {this.state.name} {this.state.last}!</h1>
  }
}
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello name="karamdeep singh" />
      </header>
    </div>
  );
}

export default App;
