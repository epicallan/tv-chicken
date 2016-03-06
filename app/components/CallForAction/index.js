import React from 'react';
import cx from 'classnames';
import styles from './callForAction.module.css';
import { Link } from 'react-router';
import childProcess from 'child_process';
// import copy from '../../utils/copy';
// import fs from 'fs';

function download(location, event) {
  // console.log(__dirname);
  const date = new Date().getTime();
  const source = '/home/allan/tv-engine/public/rio.mkv';
  const target = `/home/allan/node-projects/tv-redux/movies/shrek-${date}.mkv`;
  // const read = fs.createReadStream(source);
  // const write = fs.createWriteStream(target);
  /* eslint-disable no-console*/
  // write.on('open', bytes => console.log(bytes));
  // read.pipe(write);
  // rsync --progress -a /home/allan/tv-engine/public/rio.mkv /home/allan/node-projects/tv-redux/movies/shrek-$.mkv
  const copy = childProcess.spawn('rsync', ['--progress', '-a', source, target]);

  copy.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  copy.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  copy.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  // copy(source, target)
  // .then(data => { console.log(data); })
  // .catch(error => { console.log(error); });
  // copy to a location on a drive with call back that sends progress
  // create a progress bar component
  // fs.writeFileSync(sourceFile, fs.readFileSync(targetFile));
  /* fs.readFile(targetFile, (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });*/
  event.preventDefault();
}

export default function CallForAction(props) {
  return (
    <div className={styles.action} >
      <ul className={cx(styles.nav, 'nav', 'nav-pills')}>
        <li role="presentation">
          <Link to={`/single/${props.id}`}> Preview </Link>
        </li>
        <li role="presentation">
          <a href="#redeem" >Redeem</a>
        </li>
        <li className={styles.lastPill} role="presentation">
          <a href="#buy" onClick = {download.bind(this, props.location)}>Buy</a>
        </li>
      </ul>
    </div>
  );
}

CallForAction.propTypes = {
  id: React.PropTypes.string.isRequired,
};
