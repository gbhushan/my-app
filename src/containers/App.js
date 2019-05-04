import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import WorkTimeline from '../components/WorkTimeline';

import Counter from '../components/Counter/';

import {incrementCounter, decrementCounter} from '../actions/counterActions/';

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (event) => dispatch(incrementCounter()),
    onDecrement: (event) => dispatch(decrementCounter())
  }
}

class App extends Component {
  render() {
    // const action = type => this.props.store.dispatch({type});
    const { onIncrement, onDecrement } = this.props;
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Counter</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={WorkTimeline} />
        <Route path="/about" render={(props) => (<Counter onDecrement={onDecrement} onIncrement={onIncrement} />)} />
      </div>
    </Router>
  );
}
}

export default connect(null, mapDispatchToProps)(App);
