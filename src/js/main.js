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

var Main = React.createClass({
  displayName: "Main",

  render: function render() {
    return React.createElement(
      "main",
      { className: "main__container" },
      React.createElement(
        "h2",
        { className: "main__title" },
        "Projects"
      ),
      React.createElement(
        "p",
        null,
        "Project 0: ",
        React.createElement(
          "a",
          { href: "/" },
          "Tic Tac Toe"
        )
      ),
      React.createElement(
        "p",
        null,
        "Project 0: ",
        React.createElement(
          "a",
          { href: "/" },
          "Catbus 4000"
        )
      ),
      React.createElement(
        "p",
        null,
        "Project 1: ",
        React.createElement(
          "a",
          { href: "/" },
          "Sortr"
        )
      ),
      React.createElement(
        "p",
        null,
        "Project 2: ",
        React.createElement(
          "a",
          { href: "/" },
          "BuddyUP"
        )
      ),
      React.createElement(
        "p",
        null,
        "Project 3: ",
        React.createElement(
          "a",
          { href: "/" },
          "Musical Monsters"
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
      React.createElement(Main, null),
      React.createElement(Footer, null)
    );
  }
});

// This is the highest level one
ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));