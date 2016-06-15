import React from 'react';
import ReactDom from 'react-dom';

export default (Wrapped, settings) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.settings = Object.assign({
           maximum   : 9999,
           minimum   : 1,
           maxFont   : 9999,
           minFont   : 1,
           fontRatio : 35
      },settings);

      this._handleWindowResize = this._handleWindowResize.bind(this);
    }
    _handleWindowResize(){
      let { maximum, minimum, maxFont, minFont, fontRatio } = this.settings;
      let element = ReactDom.findDOMNode(this);
      let elw = element.offsetWidth; //the math magic was borrowed from
      let width = elw > maximum ? maximum : elw < minimum ? minimum : elw;
      let base = width / fontRatio;
      let size = base > maxFont ? maxFont : base < minFont ? minFont : base;
      element.style.fontSize = size + 'px';
    }
    componentDidMount(){
      window.addEventListener("resize",this._handleWindowResize);
      this._handleWindowResize();
    }
    componentWillUnmount(){
      window.removeEventListener("resize",this._handleWindowResize);
    }
    render(){
      return <Wrapped {...this.props} />;
    }
  };
