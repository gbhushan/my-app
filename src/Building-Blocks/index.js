import * as React from 'react';
import { Typography, Row, Col } from 'antd';
// import { Divider } from 'antd';
import './styles.scss';

const { Title } = Typography;

export const CustomTitle = (props) => {
    return <Title {...props}>{props.titleText}</Title>;
}

export const SectionTitle = (props) => {
  return (<React.Fragment><Title level={2}>{props.titleText}</Title>
  <div class="horizontal-line"></div></React.Fragment>);
}

export { Row, Col };