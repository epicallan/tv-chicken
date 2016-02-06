import React, { PropTypes, Component } from 'react';

export default class Video extends Component {

  render() {
    return (
      <div className="media-video col-md-8 col-sm-6 col-xs-12">
        <article className="center-block">
          <video className= "video" controls src={this.props.url}>
            Your browser does not support the
            <code>video</code>
            element.
          </video>
        </article>
      </div>
    );
  }
}

Video.propTypes = {
  url: PropTypes.string.isRequired
};
