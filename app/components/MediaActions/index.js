import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import styles from './mediaActions.module.css';
import { Link } from 'react-router';
import { addToCart, removeFromCart } from '../../actions';

export default class MediaActions extends Component {

  constructor(props) {
    super(props);
    this.state = { addedTocart: false };
  }

  addToCartHandler = (args, event) => {
    event.preventDefault();
    const { title, dispatch } = args;
    if (this.state.addedTocart) {
      this.setState({ addedTocart: false });
      dispatch(removeFromCart(title));
    } else {
      dispatch(addToCart(title));
      this.setState({ addedTocart: true });
    }
  }

  render = () => {
    const cartBtnLable = this.state.addedTocart ? 'Remove' : 'Add';
    const addToCartHandlerArgs = { title: this.props.title, dispatch: this.props.dispatch };
    return (
      <div className={styles.action} >
        <ul className={cx(styles.nav, 'nav', 'nav-pills')}>
          <li role="presentation">
            <Link to={`/single/${this.props.id}`}> Preview </Link>
          </li>
          <li role="presentation">
            <a href="#redeem" >Redeem</a>
          </li>
          <li className={styles.lastPill} role="presentation">
            <a href="#buy" onClick = {this.addToCartHandler.bind(this, addToCartHandlerArgs)}>{cartBtnLable}</a>
          </li>
        </ul>
      </div>
    );
  }
}

MediaActions.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};
