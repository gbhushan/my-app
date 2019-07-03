import React, { Component } from "react";
import {connect} from "react-redux";
import { fetchImages } from "../../actions/imageActions/";

class ImageViewer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchImages();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Image Viewer</h1>
      </React.Fragment>
    );
  }
}

const mapDisptachToProps = dispatch => {
  return {
    fetchImages: event => {
      return dispatch(fetchImages(event));
    }
  };
};

export default connect(
  null,
  mapDisptachToProps
)(ImageViewer);
