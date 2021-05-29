import React from 'react';
import Accordion from './Component/Accordion';
import Search from './Component/Search';

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

export default function App() {
  return (
    <div className="App">
      <Search  />
    </div>
  );
}

 