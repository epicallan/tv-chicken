import React from 'react';
import { Link } from 'react-router';
import styles from './topHeaderBar.module.css';

const topHeaderBar = () => {
  return (
    <div className="navbar navbar-fixed-top">
      <div className = "row">
        <div className={styles.strip}></div>
        <div className={styles.circle}>
          <Link to={`/`}>
            <img src = "imgs/logo.png" className = {styles.image} ></img>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default topHeaderBar;
