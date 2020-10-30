import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  state = {
    likes:0
  };

  addHandler = () =>{
    this.setState({likes: this.state.likes + 1})
  }
  removeHandler = () =>{
    if (!this.state.likes > 0)return
    this.setState({likes: this.state.likes - 1})
  }
  resetHandler = () =>{
    this.setState({likes: 0})
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="counter">
            <h2>Total likes: {this.state.likes}</h2>
          </div>
          <div className="buttons">
            <button onClick={this.addHandler}>Add a like</button>
            <button onClick={this.removeHandler}>Remove a like</button>
            <button onClick={this.resetHandler}>Reset counter</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;