import React, { Component } from "react";
import { Divider } from "antd";
import { Col, CustomTitle, Row, SectionTitle } from "../../Building-Blocks/";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <CustomTitle titleText="Gaurav Bhushan" />
        <Row type="flex" justify="space-between">
          <Col span={10}>
            <SectionTitle titleText="Experience" />
          </Col>
          <Col span={10}>
            <SectionTitle titleText="Most Proud of" />
            <ul>
              <li>Navigating the complexities of Benefits Administration and being able to deliver dependent features, successfully</li>
            </ul>
          </Col>
        </Row>
        <Row type="flex" justify="space-between">
          <Col span={10}>
            <SectionTitle titleText="A day in my life" />
            <ul>
              <li>
                Start day with off-shore meetings - status updates and 2nd one
                around team updates
              </li>
              <li>Once on my desk - Sync up with Product on curent day tasks</li>
              <li>
                A cocktail of reviewing PRs, TRIAGE'ing JIRA tickets, squashing bugs and developing feature
              </li>
            </ul>
          </Col>
          <Col span={10}>
            <SectionTitle titleText="Education" />
            <div>University of Southern California, Los Angeles</div>
            <div>MS Electrical Engineering - 2010</div>
            <Divider />
            <div>Manipal Institute of Technology, Karnataka, India</div>
            <div>BE Electronics and Communication - 2008</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutMe;
