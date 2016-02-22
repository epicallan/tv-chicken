import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MediaSingle from '../components/MediaSingle';


class SinglePage extends Component {

  constructor(props) {
    super(props);
  }

  getMedia(id) {
    return this.props.items.filter(item => item._id === id)[0];
  }

  render = () => {
    const { params, type } = this.props;
    const item = this.getMedia(params.id);
    return (
      <section>
        <MediaSingle media = {item} type = {type} />
      </section>
    );
  }
}

SinglePage.propTypes = {
  params: PropTypes.object.isRequired,
  type: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return { type: state.type, items: state.items };
}

export default connect(mapStateToProps)(SinglePage);
