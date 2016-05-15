var Header = React.createClass({
  render: function() {
    return (
      <h1 className="header__title">Daniel Moi</h1>
    )
  }
});

var App = React.createClass({

  render: function() {

    return (
      <div>
        <Header />
      </div>
    );
  }
});

// This is the highest level one
ReactDOM.render(<App  />,
             document.querySelector('#app'));
