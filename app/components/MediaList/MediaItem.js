import React, { PropTypes, Component } from 'react';
import './list.scss';
// import callForAction from '../CallForAction';

export default class MediaItem extends Component {

  render() {
    return (
      <section className="media-item col-md-3 col-sm-4 col-xs-6" >
        <img className="media-img" src={this.props.src}/>
        <div className="center-block">
          <h4 className="text-center">{this.props.name}</h4>
        </div>
      </section>
    );
  }
}

MediaItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
