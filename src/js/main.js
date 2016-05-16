"use strict";

var _ReactRouter = ReactRouter;
var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
var Link = _ReactRouter.Link;
var browserHistory = _ReactRouter.browserHistory;


var Home = React.createClass({
  displayName: "Home",

  render: function render() {
    return React.createElement(
      "div",
      { className: "main__container" },
      React.createElement(
        "h2",
        { className: "main__title" },
        "Hello!"
      ),
      React.createElement(
        "p",
        null,
        "I'm Daniel."
      ),
      React.createElement(
        "p",
        null,
        "Full-stack web developer and graphic designer."
      ),
      React.createElement(
        "p",
        null,
        "Passionate about code, design, climbing, and the oxford comma."
      )
    );
  }
});

var About = React.createClass({
  displayName: "About",

  render: function render() {
    return React.createElement(
      "div",
      { className: "main__container" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          { className: "main__title" },
          "How it all started for me..."
        ),
        React.createElement(
          "p",
          null,
          "I've always been curious about how amazing websites are created. Working as a graphic designer in a marketing agency, I felt an increasing desire to discover what was in the MAGIC BOX that web developers use to translate visual assets into a functional website! "
        ),
        React.createElement(
          "h2",
          { className: "main__title" },
          "Some of my skills"
        ),
        React.createElement(
          "h3",
          { className: "main__subtitle" },
          "Languages"
        ),
        React.createElement(
          "p",
          null,
          "JavaScript, Ruby, HTML5, CSS3, SASS"
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          { className: "main__subtitle" },
          "Frameworks / Libraries"
        ),
        React.createElement(
          "p",
          null,
          "Ruby on Rails, Backbone, Knockout, jQuery, Underscore"
        ),
        React.createElement(
          "p",
          null,
          "D3, Three.js, Greensock (TweenLite, TweenMax)"
        ),
        React.createElement(
          "p",
          null,
          "And, some exposure to: React (how I made this website), Angular, Gulp, Jasmine, RSpec"
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          { className: "main__subtitle" },
          "Software"
        ),
        React.createElement(
          "p",
          null,
          "git, GitHub, Sketch, illustrator, indesign, photoshop, lightroom"
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
        "You can drop me a line at:",
        React.createElement(
          "a",
          { href: "mailto:daniel@ampersandmoi.com" },
          "daniel@ampersandmoi.com"
        )
      ),
      React.createElement(
        "h2",
        null,
        "LinkedIn"
      ),
      React.createElement(
        "p",
        null,
        "You can find my LinkedIn profile here:",
        React.createElement(
          "a",
          { href: "http://linkedin.com/in/danielmoi" },
          "http://linkedin.com/in/danielmoi"
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
              React.createElement("img", { className: "header__logo", src: "img/danielmoi-name.svg", alt: "Daniel Moi" })
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
                { to: "/about", activeClassName: "active" },
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
      ),
      React.createElement(
        "footer",
        { className: "footer" },
        React.createElement(
          "div",
          { className: "footer__container" },
          "Made with ♥ & React © 2016 Daniel Moi"
        )
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
    React.createElement(Route, { path: "/about", component: About }),
    React.createElement(Route, { path: "/projects", component: Projects }),
    React.createElement(Route, { path: "/contact", component: Contact })
  )
), document.getElementById('app'));