import React from 'react';
import cx from 'classnames';
import styles from './callForAction.module.css';
import { Link } from 'react-router';


export default function CallForAction(props) {
  return (
    <div className={styles.action} >
      <ul className={cx(styles.nav, 'nav', 'nav-pills')}>
        <li role="presentation">
          <Link to={`/single/${props.id}`}> Preview </Link>
        </li>
        <li role="presentation">
          <a href="#redeem" >Redeem</a>
        </li>
        <li className={styles.lastPill} role="presentation">
          <a href="#buy">Buy</a>
        </li>
      </ul>
    </div>
  );
}

CallForAction.propTypes = {
  id: React.PropTypes.string.isRequired,
};
