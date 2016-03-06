import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import styles from './header.module.css';
import cx from 'classnames';

export default class Header extends Component {
  render() {
    return (
      <nav className={cx('bar', 'bar-nav', styles.nav)}>
        <section>
          <SearchBar />
        </section>
        <section>
          <header>
            <a href="#">Movies</a>
          </header>
          <ul>
            <li>
              <a href="#">Thriller</a>
            </li>
            <li>
              <a href="#">Animation</a>
            </li>
            <li>
              <a href="#">Drama</a>
            </li>
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">. . . . .</a>
            </li>
          </ul>
        </section>
        <section>
          <header>
            <a href="#">Series</a>
          </header>
          <ul>
            <li>
              <a href="#">Thriller</a>
            </li>
            <li>
              <a href="#">Animation</a>
            </li>
            <li>
              <a href="#">Drama</a>
            </li>
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">. . . . .</a>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}
/* Header.propTypes = {
  searchAction: PropTypes.func.isRequired
};
*/
