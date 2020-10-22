import React from 'react';
import './App.css';

function Box(props){
  return(
    <div className="Box">
      <h2>{props.name}</h2>
  <p>Title: {props.title}</p>
  <p>Age: {props.age}</p>
    </div>
  );
}

function Header(){
  return(
    <header className="Header">
      <h1 className="Logo">
        Boxes
      </h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Container">
    <Box name="John" title="CEO" age="55"/>
    <Box name="John" title="CEO" age="55"/>
    <Box name="John" title="CEO" age="55"/>
    <Box name="John" title="CEO" age="55"/>
    <Box name="John" title="CEO" age="55"/>
    </div>     
    </div>
  );
}

export default App;
