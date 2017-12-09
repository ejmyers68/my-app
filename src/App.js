import React, { Component } from 'react';
import yamaha6 from './images/yamaha-acoustic6.png';
import rogue6 from './images/rogue-acoustic6.png';
import taylor6 from './images/taylor-acoustic6.png';
import gibson6 from './images/gibson-lespaul6.png';
import hendrix6 from './images/fender-jimi-hendrix6.png';
import telecaster6 from './images/telecaster6.png';
import strandberg7 from './images/strandberg7.png';
import ibanez7 from './images/ibanez7.png';
import schecter8 from './images/schecter8.png';
import prs8 from './images/prs8.png';
import breedlove12 from './images/breedlove-acoustic12.png';
import reverend12 from './images/reverend12.png';
import './App.css';
import FilteredList from './FilteredList';

const guitars = [
 {name: "Yamaha FG800 Folk", type: "Acoustic", strings: "6", price: 199.99, image: yamaha6},
 {name: "Rogue Starter", type: "Acoustic", strings: "6", price: 45.99, image: rogue6},
 {name: "Taylor 200 Series Deluxe 224C3-K Grand Auditorium", type: "Acoustic", strings: "6", price: 1499.00, image: taylor6},
 {name: "Gibson 2017 Les Paul Standard T", type: "Electric", strings: "6", price: 2519.00, image: gibson6},
 {name: "Fender Jimi Hendrix Monterey Stratocaster", type: "Electric", strings: "6", price: 899.99, image: hendrix6},
 {name: "Fender Standard Telecaster", type: "Electric", strings: "6", price: 599.99, image: telecaster6},
 {name: "Strandberg Boden Original 7-string", type: "Electric", strings: "7", price: 2045.00, image: strandberg7},
 {name: "Ibanez RG Series RG7420PB 7-string", type: "Electric", strings: "7", price: 599.99, image: ibanez7},
 {name: "Schecter Guitar Research OMEN 8-string", type: "Electric", strings: "8", price: 439.00, image: schecter8},
 {name: "PRS Private Stock Custom 24 8-string", type: "Electric", strings: "8", price: 11580.00, image: prs8},
 {name: "Breedlove Pursuit 12-string", type: "Acoustic", strings: "12", price: 549.00, image: breedlove12},
 {name: "Reverend Airwave 12-string", type: "Electric", strings: "12", price: 1199.00, image: reverend12},
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredList items={guitars} />
      </div>
    );
  }
}

export default App;
