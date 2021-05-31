import React, {useState} from 'react';
import Accordion from './Component/Accordion';
import Search from './Component/Search';
import Dropdown from "./Component/DropDown";
import Translate from "./Component/Translate";
import Route from "./Component/Route";

const items = [
  {
      title:'what is react',
      content:'papapa papa'
  },
  {
      title:'what is ubunto',
      content:'papapa pypypypa'
  },
  {
      title:'wnat is popopo',
      content:'papapa pepepea'
  }
];

const options = [
  {
      label:'The color red',
      value:'red'
  },
  {
    label:'The color blue',
    value:'blue'
  },
  {
    label:'The color green',
    value:'green'
  }
];


export default function App() {
  const [selected, setSelected] =useState(options[0]);  
  return (
    <div className="ui container">
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search/>
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          options={options}
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          />
      </Route>
      <Route path="/translate">
        <Translate/>
      </Route>
    </div>
  );
}

 