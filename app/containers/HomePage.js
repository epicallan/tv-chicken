import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MediaList from '../components/MediaList';
import ShoppingWindow from '../components/ShoppingWindow';

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  indexView() {
    const { items, type } = this.props;
    if (items.length) return (<MediaList items={items} type={type} dispatch= {this.props.dispatch} />);
  }
  render = () => {
    return (
      <section>
        {this.indexView()}
        <ShoppingWindow
          inCart = {this.props.inCart}
          dispatch = {this.props.dispatch}
          showCheckout = {this.props.showCheckout}
        />
      </section>
    );
  }
}

HomePage.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  showCheckout: PropTypes.bool.isRequired,
  inCart: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    items: state.items,
    type: state.type,
    inCart: state.inCart,
    dispatch: state.dispatch,
    showCheckout: state.showCheckout,
  };
}

export default connect(mapStateToProps)(HomePage);
