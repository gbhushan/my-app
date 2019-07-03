import { Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import WorkTimeline from "../components/WorkTimeline";
import AboutMe from "../containers/about-me";
import LandingSite from "../containers/landing-site/";
import Counter from "../components/Counter/";
import ImageViewer from '../containers/image-viewer/';

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
                  <Link to="/about-me">About me</Link>
                </li>
                <li>
                  <Link to="/playground">Counter</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
                <li>
                  <Link to="/image-viewer">View Images</Link>
                </li>
              </ul>
            </nav>
          </Sider>
          <Layout>
            {/* <Header style={{ background: '#fff'}}>Header</Header> */}
            <Content style={{marginLeft: '50px'}}>
              <Switch>
                <Route exact path="/" component={LandingSite} />
                <Route exact path="/about-me" component={AboutMe} />
                <Route exact path="/image-viewer" component={ImageViewer} />
                <Route
                  path="/playground"
                  render={props => (
                    <Counter
                      onDecrement={onDecrement}
                      onIncrement={onIncrement}
                    />
                  )}
                />
              </Switch>
            </Content>
            {/* <Footer>Footer</Footer> */}
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
