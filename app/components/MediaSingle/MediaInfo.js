import React, { PropTypes, Component } from 'react';

export default class MediaInfo extends Component {

  render() {
    const actors = this.props.info.actors.map(actor => <li>{actor}</li>);
    const directors = this.props.info.director.map(dir => <li>{dir}</li>);
    return (
      <div className="media-copy col-md-4 col-sm-6 col-xs-12">
        <h3>{this.props.info.title}</h3>
        <hr></hr>
        <article className="center-block">
          <h4>Plot</h4>
          <p>{this.props.info.plot}</p>
        </article>
        <article className="center-block">
          <h4>Actors</h4>
          <ul className="list-inline">{actors}</ul>
        </article>
        <article className="center-block">
          <h4>Directors</h4>
          <ul className="list-inline">{directors}</ul>
        </article>
      </div>
    );
  }
}
MediaInfo.propTypes = {
  info: PropTypes.object.isRequired
};
