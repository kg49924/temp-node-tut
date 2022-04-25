//Path module - help with internal file system

const path = require('path')

//path seperator
console.log(path.sep);

//creating a file path by joininig seperate paths

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolutePath = path.join(__dirname,'content','subfolder','test.txt');
console.log(absolutePath);