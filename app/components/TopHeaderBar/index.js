import React from 'react';
import styles from './topHeaderBar.module.css';

const topHeaderBar = () => {
  return (
    <div className="navbar navbar-fixed-top">
      <div className = "row">
        <div className={styles.strip}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};
export default topHeaderBar;
