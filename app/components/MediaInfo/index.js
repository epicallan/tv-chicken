import React, { PropTypes, Component } from 'react';
import styles from './mediaInfo.module.css';
// import cx from 'classnames';

export default class MediaInfo extends Component {

  render() {
    const actors = this.props.info.actors.map(actor => <li>{actor}</li>);
    const directors = this.props.info.director.map(dir => <li>{dir}</li>);
    return (
      <div className="col-md-4 col-sm-6 col-xs-12">
        <h3 className = {styles.heading} >{this.props.info.title}</h3>
        <hr></hr>
        <article className="center-block">
          <h4 className = {styles.subHeading}>Plot</h4>
          <p>{this.props.info.plot}</p>
        </article>
        <article className="center-block">
          <h4 className = {styles.subHeading} >Actors</h4>
          <ul className="list-inline">{actors}</ul>
        </article>
        <article className="center-block">
          <h4 className = {styles.subHeading} >Directors</h4>
          <ul className="list-inline">{directors}</ul>
        </article>
      </div>
    );
  }
}
MediaInfo.propTypes = {
  info: PropTypes.object.isRequired
};
