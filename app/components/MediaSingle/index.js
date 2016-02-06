import React, { PropTypes, Component } from 'react';
import './single.scss';
import MediaInfo from './MediaInfo';
import Video from './Video';
import callForAction from '../CallForAction';

export default class MediaSingle extends Component {

  render() {
    return (
      <section className="container media single">
        <div className="row">
          <Video url= {this.props.item.location}/>
          <MediaInfo info= {this.props.item}/>
        </div>
        <div className="row center-block">
          <div className="col-md-3">
            {callForAction(this.props.item.title)}
          </div>
        </div>
      </section>
    );
  }
}
MediaSingle.propTypes = {
  item: PropTypes.object.isRequired
};
