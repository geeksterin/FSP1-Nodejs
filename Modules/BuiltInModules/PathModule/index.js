// console.log(__filename);
// console.log(__dirname);

const { join, isAbsolute } = require("node:path");
const path = require("node:path");
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));



// const pathObj = path.parse(__filename);
// console.log(pathObj.root);
// console.log(pathObj.dir);
// folder1 -> folder2 -> folder3-> file

// const pathObj = path.parse(__filename);
// console.log(path.format(pathObj));
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("../../jfj"));

// console.log(path.join("seg1","seg2","seg3","seg4"));
// console.log(path.join(__dirname,"index.js"));

// console.log(path.join("seg1","//seg2"));
// seg1///seg2
// seg1/seg2;
// console.log(path.join("folder1","folder2","../index.js"));
// folder1/folder2/../inde.js;
// folder1/index.js


// console.log(path.resolve("seg1","seg2","seg3","seg4"));
// join
// normalization
// makes it absolute
// console.log(path.resolve(__dirname,"index.js"));
// console.log(path.resolve("/seg1","seg2","seg3"));
// /seg1/seg2/seg3;
// console.log(path.resolve("seg1","/seg2","seg3"));
