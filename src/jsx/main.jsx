var {Router, Route, IndexRoute, Link, browserHistory} = ReactRouter


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

var About = React.createClass({
  render: function() {
    return (
      <div className="main__container">
<div>
  <h2 className="main__title">How it all started for me...</h2>
  <p>I've always been curious about how amazing websites are created. Working as a graphic designer in a marketing agency, I felt an increasing desire to discover what was in the MAGIC BOX that web developers use to translate visual assets into a functional website! </p>
  <h2 className="main__title">Some of my skills</h2>

  <h3 className="main__subtitle">Languages</h3>
  <p>JavaScript, Ruby, HTML5, CSS3, SASS</p>
</div>

<div>
  <h3 className="main__subtitle">Frameworks / Libraries</h3>
  <p>Ruby on Rails, Backbone, Knockout, jQuery, Underscore</p>
  <p>D3, Three.js, Greensock (TweenLite, TweenMax)</p>
  <p>And, some exposure to: React (how I made this website), Angular, Gulp, Jasmine, RSpec</p>
</div>

<div>
  <h3 className="main__subtitle">Software</h3>
  <p>git, GitHub, Sketch, illustrator, indesign, photoshop, lightroom</p>
</div>

      </div>
    )
  }
});


var Projects = React.createClass({
  render: function() {
    return (
      <main className="main__container">
        <h2 className="main__title">Some of the things I've made</h2>
        <h3 className="main__subtitle">Musical Monsters</h3>
        <p>My final project for General Assembly Web Development Immersive
        </p>

      </main>
    )
  }
});



var Contact = React.createClass({
  render: function() {
    return (
      <div className="main__container">
        <h2 className="main__title">Email</h2>
        <p>
          You can drop me a line at: <a href="mailto:daniel@ampersandmoi.com">daniel@ampersandmoi.com</a>
        </p>

        <h2 className="main__title">LinkedIn</h2>
        <p>You can find my LinkedIn profile here: <a href="http://linkedin.com/in/danielmoi"> linkedin.com/in/danielmoi</a>
        </p>

        <h2 className="main__title">GitHub</h2>
        <p>You can check out my repos here:
          <a href="http://github.com/danielmoi"> github.com/danielmoi</a>
        </p>

        <h2 className="main__title">Twitter</h2>
        <p>I send occasional tweets from:
          <a href="http://github.com/danielmoi"> @DM1199</a>
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
            <ul className="nav__list">
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
        <footer className="footer">
          <div className="footer__container">
            Made with &#9829; & React &copy; 2016 Daniel Moi
          </div>
        </footer>
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
