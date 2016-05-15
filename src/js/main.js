"use strict";

var _ReactRouter = ReactRouter;
var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
var Link = _ReactRouter.Link;
var browserHistory = _ReactRouter.browserHistory;


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

var Projects = React.createClass({
  displayName: "Projects",

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
        "Project 0:",
        React.createElement(
          "a",
          { href: "/" },
          "Tic Tac Toe"
        )
      ),
      React.createElement(
        "p",
        null,
        "Project 0:",
        React.createElement(
          "a",
          { href: "/" },
          "Catbus 4000"
        )
      ),
      React.createElement(
        "p",
        null,
        "Project 1:",
        React.createElement(
          "a",
          { href: "/" },
          "Sortr"
        )
      ),
      React.createElement(
        "p",
        null,
        "Project 2:",
        React.createElement(
          "a",
          { href: "/" },
          "BuddyUP"
        )
      ),
      React.createElement(
        "p",
        null,
        "Project 3:",
        React.createElement(
          "a",
          { href: "/" },
          "Musical Monsters"
        )
      )
    );
  }
});

var Skills = React.createClass({
  displayName: "Skills",

  render: function render() {
    return React.createElement(
      "div",
      { className: "main__container" },
      React.createElement(
        "h2",
        { className: "main__title" },
        "Skills"
      ),
      React.createElement(
        "p",
        null,
        "HTML5"
      ),
      React.createElement(
        "p",
        null,
        "JavaScript"
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
// ReactDOM.render(
//   <App/>, document.querySelector('#app'));
var Home = React.createClass({
  displayName: "Home",

  render: function render() {
    return React.createElement(
      "h1",
      null,
      "Welcome to the Home Page"
    );
  }
});
var MainLayout = React.createClass({
  displayName: "MainLayout",

  render: function render() {
    return React.createElement(
      "div",
      { className: "app" },
      React.createElement("header", { className: "primary-header" }),
      React.createElement(
        "div",
        { className: "primary-aside" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/" },
              "Home"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/skills" },
              "Skills"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/projects" },
              "Projects"
            )
          )
        )
      ),
      React.createElement(
        "main",
        null,
        this.props.children
      )
    );
  }
});

ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(
    Route,
    { path: "/", component: MainLayout },
    React.createElement(IndexRoute, { component: Home }),
    React.createElement(Route, { path: "/skills", component: Skills }),
    React.createElement(Route, { path: "/projects", component: Projects })
  )
), document.getElementById('app'));