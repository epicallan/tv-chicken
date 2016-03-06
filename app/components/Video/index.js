import React, { PropTypes, Component } from 'react';
import styles from './video.module.css';
import cx from 'classnames';

export default class Video extends Component {

  render() {
    return (
      <div className={cx('col-md-8', 'col-sm-6', 'col-xs-12')}>
        <section className="center-block">
          <video className= {styles.video} controls src={this.props.url}>
            Your browser does not support the
            <code>video</code>
            element.
          </video>
        </section>
      </div>
    );
  }
}

Video.propTypes = {
  url: PropTypes.string.isRequired
};
