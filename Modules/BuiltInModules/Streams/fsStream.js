const fs = require("node:fs");
const { Stream } = require("node:stream");
//wrong

// console.log("start");
// const start = Date.now();
// const data = fs.readFileSync("file.txt");
// fs.writeFileSync("copy.txt", data);
// console.log(Date.now() - start);
// console.log("end");
// console.log("start");
// fs.readFile("file.txt", (data) => {
//   console.log("cb");
// });
// console.log("end");

//right
// const readableStream = fs.createReadStream("file.txt");
// const writableStream = fs.createWriteStream("copy.txt");
// readableStream.on("data", (chunk) => {
//   console.log("callback");
//   writableStream.write(chunk);
// });

// btn.addEventListener("click", cb);

// reading -> than you are doing some transformation -> writing

// const readableStream = fs.createReadStream("file.txt");
// const writableStream = fs.createWriteStream("copy.txt");
// readableStream.on("data", (chunk) => {
//   chunk = chunk.toString();
//   chunk = chunk.replace("Lorem", "Samiul");
//   console.log(chunk);
//   writableStream.write(chunk);
// });

// const readableStream = fs.createReadStream("file.txt");
// const writableStream = fs.createWriteStream("copy.txt");

// readableStream.pipe(writableStream);

// class fs extends Stream {
//   createReadStream() {
//     ReadStream;
//     ReadStream.push(openfile);
//   }
// }
