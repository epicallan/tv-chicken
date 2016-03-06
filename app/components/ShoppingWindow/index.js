import React, { PropTypes, Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import Checkout from '../Checkout';
import { showCheckout } from '../../actions';
// import cx from 'classnames';
import styles from './shoppingWindow.module.css';

export default class shoppingWindow extends Component {

  constructor(props) {
    super(props);
    this.state = { shopped: this.props.inCart, show: false };
  }

  buyMovie = (title) => {
    this.setState({ shopped: [title] });
    this.props.dispatch(showCheckout(true));
  }

  buyAll = () => {
    this.setState({ shopped: this.props.inCart });
    this.props.dispatch(showCheckout(true));
  }

  render = () => {
    const items = this.props.inCart.map((title, index) =>
      <Button key = {`__${index}-${title}`} className = {styles.media} onClick = {this.buyMovie.bind(title)} > {title} </Button>);
    return (
      <section>
        <div className={styles.window} >
          <h4>Shopping Cart</h4>
          <ButtonGroup vertical block>
            {items}
            <Button key = {'selectAll-btn'} onClick = {this.buyAll} className = {styles.media}> select All</Button>
          </ButtonGroup>
        </div>
        <Checkout shopped = {this.state.shopped} show = {this.props.showCheckout} dispatch = {this.props.dispatch} />
      </section>
    );
  }
}
shoppingWindow.propTypes = {
  inCart: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  showCheckout: PropTypes.bool.isRequired,
};
