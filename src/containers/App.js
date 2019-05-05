import { Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import WorkTimeline from "../components/WorkTimeline";
import Counter from "../components/Counter/";

import { incrementCounter, decrementCounter } from "../actions/counterActions/";

const { Header, Content, Footer, Sider } = Layout;

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: event => dispatch(incrementCounter()),
    onDecrement: event => dispatch(decrementCounter())
  };
};

class App extends Component {
  render() {
    const { onIncrement, onDecrement } = this.props;
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider>
            <nav>
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
            </nav>
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>
              <Switch>
                <Route exact path="/" component={WorkTimeline} />
                <Route
                  path="/about"
                  render={props => (
                    <Counter
                      onDecrement={onDecrement}
                      onIncrement={onIncrement}
                    />
                  )}
                />
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
