import React from 'react';
import cx from 'classnames';
import styles from './callForAction.module.css';

const onPreveiewClick = (id) => {
  console.log('in media items: ' + id);
  // mediaActions.singleView(id);
};

export default function CallForAction(props) {
  return (
    <div className={styles.action} >
      <ul className={cx('nav', styles['nav-pills'])}>
        <li role="presentation">
          <a href="#single" className = {styles.actionLink} onClick = {onPreveiewClick.bind(this, props.id)}>
            Preview
          </a>
        </li>
        <li role="presentation">
          <a href="#redeem">Redeem</a>
        </li>
        <li className="last-pill" role="presentation">
          <a href="#buy">Buy</a>
        </li>
      </ul>
    </div>
  );
}

CallForAction.propTypes = {
  id: React.PropTypes.string.isRequired,
};
