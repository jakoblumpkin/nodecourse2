//const path = require('path');
const fs = require('fs');

const files = ['./1-loop.js', './2-try.js'];

files.forEach(file => {
  //const filePath = path.resolve(process.env.HOME, file);
  try {
    const data = fs.readFileSync(files);
    console.log('File data is', data);
  } catch(err) {
    console.log('File not found');
  }
});
