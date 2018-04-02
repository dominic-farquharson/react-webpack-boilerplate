import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// const App = () => (
//   <p>hello world</p>
// );
class App extends Component {
  render() {
    return (
      <p>hello world</p>
    );
  }
}


const root = document.getElementById('root');
console.log('root ', root);
ReactDOM.render(<App />, root);

