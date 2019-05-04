import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    console.log('you tried to increment');
  }
  decrement() {
    console.log('you tried to decrement');
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter;