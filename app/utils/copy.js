import fs from 'fs';

export default function (source, target) {
  return new Promise((resolve, reject) => {
    const read = fs.createReadStream(source);
    read.on('error', reject);
    const write = fs.createWriteStream(target);
    write.on('error', reject);
    // write.on('open', callback);
    write.on('finish', resolve);
    read.pipe(write);
  });
}
