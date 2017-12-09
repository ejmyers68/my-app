import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';

function Guitar(props) {
  return (
    <div className="Guitar">
      <li key={props.item.name}>
        <div className="Name">
          <h2>{props.item.name} {props.item.type} Guitar</h2>
        </div>
        <div className="Price">
          <h4>${props.item.price}</h4>
        </div>
        <img src={props.item.image} alt={props.item.name}/>
      </li>
    </div>

    );
}

export default Guitar;