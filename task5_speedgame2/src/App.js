import React, { Component } from 'react';
import Circle from './components/circle/Circle';
import Gameover from './components/gameover/Gameover'

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    list: [],
    previous: 0,
    gameover: false,
    circles: [
      {id:1, color:"blue"},
      {id:2, color:"green"},
      {id:3, color:"red"},
      {id:4, color:"yellow"}
    ]
  }

  pace = 1500;
  timer = undefined;

  clickHandler = (id) => {
    
    if(this.state.list[0] !== id){
      this.stopHandler();
      return;
    }

    this.setState(state => {
      const [, ...rest] = state.list;
 
      return {
        list: rest,
      };
    });

    this.setState({
      score: this.state.score + 1
    });
  };

  nextCircle = () => {
    
    if(this.state.list.length > 5){
      this.stopHandler();
      return;
    }

    let nextActive = undefined;

    do{
        nextActive = getRndInteger(1,4);
    }

    while (nextActive === this.state.previous)
    
    this.setState({
      previous: nextActive 
    });

    this.setState(state => {
      const list = state.list.concat(nextActive);
 
      return {
        list
      }; 
    });

    if (this.pace>310){
      this.pace *= 0.95;
  }

    this.timer = setTimeout(this.nextCircle, this.pace)
  }

  startHandler = () =>{
    this.nextCircle();
  }

  stopHandler = () =>{
    clearTimeout(this.timer);

    this.setState({gameover: true});
  }

  render() {
    
    const circles = this.state.circles.map(item => {
      return (<Circle key={item.id}
                      color={item.color}
                      click={()=>this.clickHandler(item.id)}
                      active={this.state.list[this.state.list.length-1] === item.id}
                      />)
    });

    return (
      <div className="app">
        <h1>Speedgame 2.0</h1>
       {circles}
    <p>Your score is: {this.state.score}</p>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.stopHandler}>End</button>
        {this.state.gameover && <Gameover score={this.state.score}/>}
      </div>
    );
  }
}

export default App;