import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as MediaActions from '../actions';
import Header from '../components/Header';
import TopHeaderBar from '../components/TopHeaderBar';

class App extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const { isFetching, dispatch } = this.props;
    if (!isFetching) dispatch(MediaActions.fetchInitialData({ type: 1, rating: 5 }));
  }

  render = () => {
    const { children } = this.props;
    return (
        <div className = "container-fluid">
          <TopHeaderBar />
          <div className= "row">
            <section className = "col-md-3">
              <Header />
            </section>
            <section className = "col-md-9">
              {children}
            </section>
          </div>
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { isFetching: state.isFetching };
}

export default connect(mapStateToProps)(App);
