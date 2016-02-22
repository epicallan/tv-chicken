import React, { PropTypes } from 'react';
import MediaInfo from '../MediaInfo';
import Video from '../Video';
// import callForAction from '../CallForAction';

export default function MediaSingle(props) {
  return (
    <section className="container media single">
      <div className="row">
        <Video url= {props.media.location}/>
        <MediaInfo info= {props.media}/>
      </div>
    </section>
  );
}
MediaSingle.propTypes = {
  media: PropTypes.object.isRequired
};
