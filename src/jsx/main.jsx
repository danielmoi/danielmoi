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
        <Footer />
      </div>
    );
  }
});

// This is the highest level one
ReactDOM.render(<App  />,
             document.querySelector('#app'));
