import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MediaActions from '../actions';
import Header from '../components/Header';

class App extends Component {

  constructor(props) {
    super(props, context);
  }

  componentDidMount() {
    MediaActions.fetchData(1, 5);
  }

  render = () => {
    const { children, actions } = this.props;
    return (
      <div className="index">
        <div className="strip"></div>
        <div className="circle"></div>
        <Header actions = { actions } />
        <section>
          {children}
          {(() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools');
              return <DevTools/>;
            }
          })()
        }</section>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MediaActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(App);
