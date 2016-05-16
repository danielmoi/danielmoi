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

// This is the highest level one
// ReactDOM.render(
//   <App/>, document.querySelector('#app'));
var Home = React.createClass({
  displayName: "Home",

  render: function render() {
    return React.createElement(
      "div",
      { className: "main__container" },
      React.createElement(
        "h2",
        { className: "main__title" },
        "Welcome to the Home Page"
      )
    );
  }
});
var Contact = React.createClass({
  displayName: "Contact",

  render: function render() {
    return React.createElement(
      "div",
      { className: "main__container" },
      React.createElement(
        "h2",
        { className: "main__title" },
        "Email"
      ),
      React.createElement(
        "p",
        null,
        "You can drop me a line at: ",
        React.createElement(
          "a",
          { href: "mailto:daniel@ampersandmoi.com" },
          "daniel@ampersandmoi.com"
        )
      )
    );
  }
});

var MainLayout = React.createClass({
  displayName: "MainLayout",

  render: function render() {
    return React.createElement(
      "div",
      { className: "app" },
      React.createElement(
        "header",
        { className: "header" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "h1",
            { className: "header__title" },
            React.createElement(
              Link,
              { to: "/" },
              "Daniel Moi"
            )
          )
        )
      ),
      React.createElement(
        "nav",
        { className: "nav" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              { className: "nav__list-item" },
              React.createElement(
                Link,
                { to: "/home", activeClassName: "active" },
                "Home"
              )
            ),
            React.createElement(
              "li",
              { className: "nav__list-item" },
              React.createElement(
                Link,
                { to: "/skills", activeClassName: "active" },
                "About Me"
              )
            ),
            React.createElement(
              "li",
              { className: "nav__list-item" },
              React.createElement(
                Link,
                { to: "/projects", activeClassName: "active" },
                "Projects"
              )
            ),
            React.createElement(
              "li",
              { className: "nav__list-item" },
              React.createElement(
                Link,
                { to: "/contact", activeClassName: "active" },
                "Say hello!"
              )
            )
          )
        )
      ),
      React.createElement(
        "main",
        { className: "main" },
        this.props.children
      )
    );
  }
});
// var routerHistory = ReactRouter.useRouterHistory;
// var appHistory = routerHistory(createHistory)({ queryKey: false });

var browserHistory = ReactRouter.browserHistory;

ReactDOM.render(React.createElement(
  Router,
  { history: browserHistory },
  React.createElement(
    Route,
    { path: "/", component: MainLayout },
    React.createElement(IndexRoute, { component: Home }),
    React.createElement(Route, { path: "/home", component: Home }),
    React.createElement(Route, { path: "/skills", component: Skills }),
    React.createElement(Route, { path: "/projects", component: Projects }),
    React.createElement(Route, { path: "/contact", component: Contact })
  )
), document.getElementById('app'));