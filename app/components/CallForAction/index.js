import React from 'react';
// import cx from 'classnames';
import styles from './callForAction.module.css';

export default function CallForAction(id, onPreveiewClick) {
  return (
    <div className={styles.action}>
      <ul className="nav nav-pills">
        <li role="presentation">
          <a href="#single" onClick = {onPreveiewClick.bind(this, id)}>
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
