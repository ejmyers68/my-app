import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
   constructor(props) {
       super(props);

       // The state is just a list of key/value pair (like a hashmap)
       this.state = {
           sort: "none",
           type: "all",
           strings: "all"
       };
   }

   // sorts the list if sort criteria is selected while maintaining other filter criteria
   sortList = () => {
    if(this.state.sort === "price")
      return <List items={this.props.items.filter(this.filterItem).sort((a, b) => a.price-b.price)} />;
    else
      return <List items={this.props.items.filter(this.filterItem)} />;

   }

   // filters items in the list based on type and strings
   filterItem = (item) => {
       var match = true;
       if(this.state.type !== "all")
          match = match && item.type === this.state.type;
        if(this.state.strings !== "all")
          match = match && item.strings === this.state.strings;
      return match;

   }

   // changes state of type filter
   onTypeSelection = (eventKey, event) => {
    this.setState({ type: eventKey });
   }

   // changes state of strings filter
   onStringSelection = (eventKey, event) => {
    this.setState({ strings: eventKey });
   }

   // changes state of sort criteria
   onSortSelection = (eventKey, event) => {
    this.setState({ sort: eventKey });
   }

   render() {
       return (
           <div className="filter-list">
               <h1>Guitar Search</h1>
               <DropdownButton id="typeDropdown" title={"Type"}>
                 <MenuItem eventKey="all" onSelect={ this.onTypeSelection }>All</MenuItem>
                 <MenuItem eventKey="Electric" onSelect={ this.onTypeSelection }>Electric</MenuItem>
                 <MenuItem eventKey="Acoustic" onSelect={ this.onTypeSelection }>Acoustic</MenuItem>
               </DropdownButton>
               <DropdownButton id="stringsDropdown" title={"Strings"}>
                 <MenuItem eventKey="all" onSelect={ this.onStringSelection }>All</MenuItem>
                 <MenuItem eventKey="6" onSelect={ this.onStringSelection }>6-string</MenuItem>
                 <MenuItem eventKey="7" onSelect={ this.onStringSelection }>7-string</MenuItem>
                 <MenuItem eventKey="8" onSelect={ this.onStringSelection }>8-string</MenuItem>
                 <MenuItem eventKey="12" onSelect={ this.onStringSelection }>12-string</MenuItem>
               </DropdownButton>
               <DropdownButton id="sortDropdown" title={"Sort"}>
                  <MenuItem eventKey="none" onSelect={ this.onSortSelection }>None</MenuItem>
                  <MenuItem eventKey="price" onSelect={ this.onSortSelection }>Price (Ascending)</MenuItem>
               </DropdownButton>

               {this.sortList()}
           </div>
        );
   }
}


export default FilteredList;