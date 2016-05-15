"use strict";

var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(
      "h1",
      { className: "header__title" },
      "Daniel Moi"
    );
  }
});

var App = React.createClass({
  displayName: "App",


  render: function render() {

    return React.createElement(
      "div",
      null,
      React.createElement(Header, null)
    );
  }
});

// This is the highest level one
ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));