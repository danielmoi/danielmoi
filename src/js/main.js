"use strict";

var Header = React.createClass({
  displayName: "Header",

  render: function render() {
    return React.createElement(
      "header",
      { className: "header" },
      React.createElement(
        "div",
        { className: "header__container" },
        React.createElement(
          "h1",
          { className: "header__title" },
          "Daniel Moi"
        )
      )
    );
  }
});

var Footer = React.createClass({
  displayName: "Footer",

  render: function render() {
    return React.createElement(
      "footer",
      { className: "footer" },
      React.createElement(
        "div",
        { className: "footer__container" },
        React.createElement(
          "p",
          null,
          "Made with ♥ & React © 2016 Daniel Moi"
        )
      )
    );
  }
});

var App = React.createClass({
  displayName: "App",


  render: function render() {

    return React.createElement(
      "div",
      null,
      React.createElement(Header, null),
      React.createElement(Footer, null)
    );
  }
});

// This is the highest level one
ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));