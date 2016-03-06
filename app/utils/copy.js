import childProcess from 'child_process';

export default function (source, target, callback) {
  const copy = childProcess.spawn('rsync', ['--progress', '-a', source, target]);
  copy.stdout.on('data', (data) => {
    // ignore the rest of the output and take only that with %s
    const dataString = String(data);
    if (data.indexOf('%') !== -1) {
      // filter out all empty array fields
      const progress = dataString.split(' ') .filter(value => value !== '');
      callback(progress);
    }
  });
  copy.stderr.on('data', (data) => {
    throw new Error(data);
    // console.log(`stderr: ${data}`);
  });
  copy.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
