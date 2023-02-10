/** @format */

const { resolve } = require('path');
const fs = require('fs');
const copy = (src, dst) => {
  try {
    console.log('src', `${src}`, 'dest', dst);
    fs.writeFileSync(dst, fs.readFileSync(src));
    console.log('done writing small');
  } catch (error) {
    console.log('error writing');
  }
};
function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}
function del(path) {
  fs.unlinkSync(path);
}
let des = pathResolve('extraResources');
let src = pathResolve('public');
let outputFiles = [`${src}/zh_CN.json`, `${src}/en_US.json`];
console.log('extraResources path: ', des);
const f2 = () => {
  for (const name of ['zh_CN.json', 'en_US.json']) {
    for (const f of outputFiles) {
      copy(f, `${des}/${name}`);
    }
  }
  for (const f of outputFiles) {
    del(f);
  }
};
f2();
