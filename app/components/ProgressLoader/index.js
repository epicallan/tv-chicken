import React, { PropTypes, Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import copy from '../../utils/copy';


export default class ProgressLoader extends Component {

  constructor(props) {
    super(props);
    this.state = { progress: 0 };
  }
  componentDidMount = () => {
    this.downloadMedia(this.props.source);
  }
  downloadMedia(movieName) {
    const date = new Date().getTime();
    const source = `/Users/allanlukwago/apps/tv-engine/public/${movieName}.mkv`;
    const target = `/Users/allanlukwago/apps/tv-chicken/movies/${date}-${movieName}.mkv`;
    copy(source, target, (progress) => {
      const rate = progress[1].replace('%', '');
      this.setState({ progress: parseInt(rate, 10) });
    });
  }

  render() {
    return (
      <ProgressBar now = {this.state.progress} label="%(percent)s%" />
    );
  }
}

ProgressLoader.propTypes = {
  source: PropTypes.string.isRequired,
};
export default ProgressLoader;
