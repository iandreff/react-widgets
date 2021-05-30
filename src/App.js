import React, {useState} from 'react';
 /*import Accordion from './Component/Accordion'; */
// import Search from './Component/Search';
import Dropdown from "./Component/DropDown";
import Translate from "./Component/Translate";

/* const items = [
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
]; */

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

  return (
    <div className="ui container">
      <Translate />
    </div>
  );
}

 