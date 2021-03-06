import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {};

  componentDidMount() {
    setInterval(this.hello, 1000);
  }

  hello = () => {
    fetch('/api/time')
        .then( res => res.text())
        .then(res => { this.setState( {message: res})
        });
  };
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">{this.state.message}</h1>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default App;
