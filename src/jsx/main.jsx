var {Router, Route, IndexRoute, Link, browserHistory} = ReactRouter

var Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <div className="header__container">
          <h1 className="header__title">Daniel Moi</h1>
        </div>
      </header>
    )
  }
});

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

var Skills = React.createClass({
  render: function() {
    return (
      <div className="main__container">
        <h2 className="main__title">Skills</h2>
        <p>HTML5</p>
        <p>JavaScript</p>
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

var App = React.createClass({

  render: function() {

    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
});

// This is the highest level one
// ReactDOM.render(
//   <App/>, document.querySelector('#app'));
var Home = React.createClass({
  render: function() {
    return (
      <h1>Welcome to the Home Page</h1>
    );
  }
});
var MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <div className="primary-aside">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
        <main>
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
  <Router history={ browserHistory }>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />

    </Route>
  </Router>
), document.getElementById('app'));
