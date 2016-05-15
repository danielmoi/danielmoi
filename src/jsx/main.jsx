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

var Main = React.createClass({
  render: function() {
    return (
      <main className="main__container">
        <h2 className="main__title">Projects</h2>
        <p>Project 0: <a href="/">Tic Tac Toe</a></p>
        <p>Project 0: <a href="/">Catbus 4000</a></p>
        <p>Project 1: <a href="/">Sortr</a></p>
        <p>Project 2: <a href="/">BuddyUP</a></p>
        <p>Project 3: <a href="/">Musical Monsters</a></p>
      </main>
    )
  }
})
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
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
});

// This is the highest level one
ReactDOM.render(<App  />,
             document.querySelector('#app'));
