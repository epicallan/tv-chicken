import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MediaList from '../components/MediaList';

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  indexView() {
    const { items, type } = this.props;
    if (items.length) return (<MediaList items={items} type={type}/>);
  }
  render = () => {
    return (
      <section>
          {this.indexView()}
      </section>
    );
  }
}

HomePage.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.number,
};

function mapStateToProps(state) {
  return { items: state.items, type: state.type };
}

export default connect(mapStateToProps)(HomePage);
