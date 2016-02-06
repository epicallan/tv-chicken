import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MediaActions from '../actions';
import MediaList from '../components/MediaList';

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  indexView() {
    const { items, type, actions } = this.props;
    if (items.length) {
      return (<MediaList actions = {actions} items={items} type={type}/>);
    }
  }
  render = () => {
    return (
      <div className="home">
        <section>
          {this.indexView()}
        </section>
      </div>
    );
  }
}

HomePage.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { items: state.items, type: state.type, id: state.id };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MediaActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
