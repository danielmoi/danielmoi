var {Router, Route, IndexRoute, Link, browserHistory} = ReactRouter

var Projects = React.createClass({
  render: function() {
    return (
      <main className="main__container">
        <h2 className="main__title">Projects</h2>
        <p>Project 0:
          <a href="/">Tic Tac Toe</a>
        </p>
        <p>Project 0:
          <a href="/">Catbus 4000</a>
        </p>
        <p>Project 1:
          <a href="/">Sortr</a>
        </p>
        <p>Project 2:
          <a href="/">BuddyUP</a>
        </p>
        <p>Project 3:
          <a href="/">Musical Monsters</a>
        </p>
      </main>
    )
  }
});

var About = React.createClass({
  render: function() {
    return (
      <div className="main__container">
        <h2 className="main__title">How it all started for me...</h2>
        <p>I've always been curious about how amazing websites are created. Working as a graphic designer in a marketing agency, I felt an increasing desire to discover what was in the MAGIC BOX that web developers use to translate visual assets into a functional website! </p>
        <h2 className="main__title">Some of my skills</h2>

        <h3 className="main__subtitle">Languages</h3>
        <p>JavaScript, Ruby, HTML5, CSS3, SASS</p>

        <h3 className="main__subtitle">Frameworks / Libraries</h3>
        <p>Ruby on Rails, Backbone, Knockout, jQuery, Underscore</p>
        <p>D3, Three.js, Greensock (TweenLite, TweenMax)</p>
        <p>And, some exposure to: React (how I made this website), Angular, Gulp, Jasmine, RSpec</p>

        <h3 className="main__subtitle">Software</h3>
        <p>git, GitHub, Sketch, illustrator, indesign, photoshop, lightroom</p>

      </div>
    )
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <p>Made with &#9829; & React &copy; 2016 Daniel Moi</p>
        </div>
      </footer>
    )
  }
})

// This is the highest level one
// ReactDOM.render(
//   <App/>, document.querySelector('#app'));
var Home = React.createClass({
  render: function() {
    return (
      <div className="main__container">
        <h2 className="main__title">Hello!</h2>
        <p>I'm Daniel.</p>
        <p>Full-stack web developer and graphic designer.</p>
        <p>Passionate about code, design, climbing, and the oxford comma.</p>
      </div>
    );
  }
});
var Contact = React.createClass({
  render: function() {
    return (
      <div className="main__container">
        <h2 className="main__title">Email</h2>
        <p>
          You can drop me a line at:
          <a href="mailto:daniel@ampersandmoi.com">daniel@ampersandmoi.com</a>
        </p>
        <h2>LinkedIn</h2>
        <p>You can find my LinkedIn profile here:
          <a href="http://linkedin.com/in/danielmoi">http://linkedin.com/in/danielmoi</a>
        </p>
      </div>
    );
  }
});

var MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="header">
          <div className="container">
            <h1 className="header__title">

              <Link to="/">
                <img className="header__logo" src="img/danielmoi-name.svg" alt="Daniel Moi"/>

                </Link>
            </h1>
          </div>
        </header>
        <nav className="nav">
          <div className="container">
            <ul>
              <li className="nav__list-item">
                <Link to="/home" activeClassName="active">Home</Link>
              </li>

              <li className="nav__list-item">
                <Link to="/about" activeClassName="active">About Me</Link>
              </li>

              <li className="nav__list-item">
                <Link to="/projects" activeClassName="active">Projects</Link>
              </li>

              <li className="nav__list-item">
                <Link to="/contact" activeClassName="active">Say hello!</Link>
              </li>

            </ul>
          </div>
        </nav>
        <main className="main">
          {this.props.children}
        </main>
      </div>
    )
  }
})
// var routerHistory = ReactRouter.useRouterHistory;
// var appHistory = routerHistory(createHistory)({ queryKey: false });

var browserHistory = ReactRouter.browserHistory;

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>

    </Route>
  </Router>
), document.getElementById('app'));
