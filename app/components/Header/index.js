import './header.scss';
import React, { PropTypes, Component } from 'react';
import SearchBar from './SearchBar';

export default class Menu extends Component {
  render() {
    return (
      <nav className="bar bar-nav">
        <section>
          <SearchBar searchAction = {this.props.searchForData}/>
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
Menu.propTypes = {
  searchForData: PropTypes.func.isRequired
};
