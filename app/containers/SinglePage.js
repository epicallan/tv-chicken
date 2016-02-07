import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MediaSingle from '../components/MediaSingle';


class SinglePage extends Component {

  constructor(props) {
    super(props, context);
  }

  render = () => {
    const { id } = this.props;
    return (
      <div className="single">
        <section>
          <MediaSingle id= {id} />
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

export default connect(mapStateToProps)(SinglePage);
