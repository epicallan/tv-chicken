import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  /* searchHandler = () => {
    var input = ReactDOM.findDOMNode(this.refs.searchKey);
    this.props.searchAction(input.value);
  }*/

  render() {
    return (
      <form className="navbar-form navbar-left search" role="search">
        <div className="form-group">
          <input placeholder="title" ref="searchKey" type="text" />
        </div>
      </form>
    );
  }
}
/* SearchBar.propTypes = {
  searchAction: PropTypes.func.isRequired,
};
*/
