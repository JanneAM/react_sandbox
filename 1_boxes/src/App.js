import React from 'react';
import './App.css';
import Box from './Box';
import Header from './Header';


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
