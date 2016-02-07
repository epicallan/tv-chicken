import React, { PropTypes, Component } from 'react';
import MediaItem from './MediaItem';
import _ from 'lodash';

export default class MediaList extends Component {

  getRowCount() {
    let chunkSize = 4;
    const windowWidth = window.innerWidth;
    if (windowWidth < 1300) {
      chunkSize = 3;
    } else if (windowWidth < 900) {
      chunkSize = 2;
    } else {
      chunkSize = 4;
    }
    return chunkSize;
  }

  render() {
    const items = this.props.items.map((item) => {
      return (<MediaItem name={item.title} src= {item.image}/>);
    });

    const chunks = _.chunk(items, this.getRowCount());
    const rows = chunks.map(chunk => {
      return (
        <div className="row">{chunk}</div>
      );
    });
    return (
      <section className="container media">
        {rows}</section>
    );
  }

}
MediaList.propTypes = {
  items: PropTypes.array.isRequired,
};
