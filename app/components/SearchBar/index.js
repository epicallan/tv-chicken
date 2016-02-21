import React, { Component, PropTypes } from 'react';
import styles from './searchBar.module.css';
import cx from 'classnames';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  searchHandler = () => {
    var input = this.refs.searchKey;
    console.log(input);
    // this.props.searchAction(input.value);
  }

  render() {
    return (
      <form id = "form-override" className= {cx(styles['navbar-form'], 'navbar-left', styles.search)} role="search">
        <div className="form-group">
          <input className = "text-center" placeholder="title" ref="searchKey" onClick = {this.searchHandler} type="text" />
        </div>
      </form>
    );
  }
}

/* SearchBar.propTypes = {
  searchAction: PropTypes.func.isRequired,
};
*/
