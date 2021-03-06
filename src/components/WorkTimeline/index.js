import React, { Component } from 'react';
import { Timeline } from 'antd';

class WorkTimeline extends Component {
  render() {
    return (<div>
      <Timeline pending="Recording...">
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
      </Timeline>

    </div>)
  }
}

export default WorkTimeline;