import React, {Component} from 'react';
import Animal from './components/animal/animal';
import './App.css'

class App extends Component {
  state = {
    animals: [
      {animal:'Tiger', img:'https://static.scientificamerican.com/sciam/cache/file/5C51E427-1715-44E6-9B14D9487D7B7F2D_source.jpg?w=690&h=930&EA562668-5B43-4B0F-8F081C64132DE4F6'},
      {animal:'Cat', img:'https://static.scientificamerican.com/sciam/cache/file/5C51E427-1715-44E6-9B14D9487D7B7F2D_source.jpg?w=690&h=930&EA562668-5B43-4B0F-8F081C64132DE4F6'},
      {animal:'Feline', img:'https://static.scientificamerican.com/sciam/cache/file/5C51E427-1715-44E6-9B14D9487D7B7F2D_source.jpg?w=690&h=930&EA562668-5B43-4B0F-8F081C64132DE4F6'}
    ],
  };

  render(){
      return(
    <div className="cardGrid">
      <Animal animal={this.state.animals[0].animal} img={this.state.animals[0].img}/>
      <Animal animal={this.state.animals[1].animal} img={this.state.animals[1].img}/>
      <Animal animal={this.state.animals[2].animal} img={this.state.animals[2].img}/>
    </div>
    );
  }
}


export default App;