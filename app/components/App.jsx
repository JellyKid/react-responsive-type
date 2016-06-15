import React from 'react';
import { Component } from 'react';
import ReactResponsiveText from '../ReactResponsiveText';
import "../style/app.css";

class App extends Component{
  render(){
    return <div className="App">
      <h1 className="header">Top Header</h1>
      <div className="Container">
        <h2 className="middleHeader">Middle Header</h2>
        <div classname="inner">
          <h3></h3>
          <p>Paragraph of things.... .... ....</p>
        </div>
      </div>
    </div>;
  }
}

export default ReactResponsiveText(App,{
  minimum: 500,
  maximum: 1200
});
