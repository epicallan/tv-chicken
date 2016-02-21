import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as MediaActions from '../actions';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './app.css';

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
      <div className = {styles.app}>
        <div className={styles.strip}></div>
        <div className={styles.circle}></div>
        <Header />
        <section>
          {children}
        </section>
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
