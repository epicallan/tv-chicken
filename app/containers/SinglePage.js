import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MediaActions from '../actions';
import MediaSingle from '../components/MediaSingle';


class SinglePage extends Component {

  constructor(props) {
    super(props, context);
  }

  render = () => {
    const { id, actions } = this.props;
    return (
      <div className="single">
        <section>
          <MediaSingle actions = {actions} id= {id} />
        </section>
      </div>
    );
  }
}

SinglePage.propTypes = {
  id: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { id: state.id };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MediaActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
