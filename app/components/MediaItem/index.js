import React, { PropTypes } from 'react';
import styles from './item.module.css';
import cx from 'classnames';
import MediaActions from '../MediaActions';

const MediaItem = (props) => {
  // console.log(props);
  return (
    <section className="col-md-3 col-sm-4 col-xs-6" >
      <img className= {styles.mediaImage} src={props.src}/>
      <div className="center-block">
        <h4 className={cx('text-center', styles.title)}>{props.name}</h4>
      </div>
      <MediaActions id = {props.id} title = {props.name} dispatch = {props.dispatch} />
    </section>
  );
};

MediaItem.propTypes = {
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default MediaItem;
