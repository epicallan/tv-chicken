import React, { PropTypes, Component } from 'react';
import styles from './checkout.module.css';
import ProgressLoader from '../ProgressLoader';
import { Modal, Table } from 'react-bootstrap';
import { showCheckout } from '../../actions';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
  }
  close = () => {
    this.props.dispatch(showCheckout(false));
  }
  render() {
    const downloads = this.props.shopped.map(item => {
      return (
        <tr key = {`download-${item}`}>
          <td>{item}</td>
          <td> <ProgressLoader source = {item} /> </td>
        </tr>
      );
    });
    return (
      <div>
        <Modal show={this.props.show} onHide={this.close} className = {styles.checkout}>
        <Modal.Header closeButton>
            <Modal.Title className = "text-center">Check Out</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered condensed hover>
              <tbody>
                <tr>
                  <td>Amout of money</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>Flash</td>
                  <td>Allans Flash</td>
                </tr>
                {downloads}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

Checkout.propTypes = {
  shopped: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};
