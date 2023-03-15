const { Readable, Writable, Transform } = require("node:stream");

const readableStream = new Readable({
  read(size) {},
});

const writableStream = new Writable({
  write(chunk) {
    console.log("i am the write function");
    console.log(chunk.toString());
  },
});

const transformStream = new Transform({
  transform(chunk, encoding, cb) {
    console.log("i am the transformStream");
    const modifiedData = chunk.toString().replace("Lorem", "Samiul");
    // console.log(modifiedData);
    cb(null, modifiedData);
  },
});

// readableStream.on("data", (chunk) => {
//   writableStream.write(chunk);
// });
readableStream.pipe(transformStream).pipe(writableStream);

readableStream.push("Lorem");
