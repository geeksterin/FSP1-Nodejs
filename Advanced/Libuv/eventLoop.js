//Microtask Queue
//1
// console.log("1");
// process.nextTick(() => {
//   console.log("i am process 1");
// });
// console.log("2");
/**
 * 1
 * 2
 * i am process 1
 */

//2
// console.log("1");
// Promise.resolve().then(() => {
//   console.log("i am a promise");
// });
// console.log("2");
//3
// process.nextTick(() => {
//   console.log("i am process 1");
// });
// Promise.resolve().then(() => {
//   console.log("i am  promise 1");
// });
//---
// Promise.resolve().then(() => {
//   console.log("i am  promise 1");
// });
// process.nextTick(() => {
//   console.log("i am process 1");
// });

//4
// next =
// Promise =
// this is process 1
// this is process 2
// this is process 3
// this is the inner next tick inside next tick
// this is Promise.resolve 1
// this is Promise.resolve 2
// this is Promise.resolve 3
// this is the inner next tick inside Promise then block

// process.nextTick(() => console.log("this is process 1"));
// process.nextTick(() => {
//   console.log("this is process 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//   );
// });
// process.nextTick(() => console.log("this is process 3"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

//Microtask and timer

/**
 
 Timer =
 next = 
 promise = 
 this is process.nextTick 1
 this is process.nextTick 2
 this is process.nextTick 3
 this is the inner next tick inside next tick
 this is Promise.resolve 1
 this is Promise.resolve 2
 this is Promise.resolve 3
 this is the inner next tick inside Promise then block
 this is setTimeout 1
 this is setTimeout 2
 this is setTimeout 3
 */

// setTimeout(() => console.log("this is setTimeout 2"), 0);
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside next tick")
//   );
// });
// process.nextTick(() => console.log("this is process.nextTick 3"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

//--
/**
 Timer = 
 next = 
 promise = 
this is process.nextTick 1
this is process.nextTick 2
his is the inner next tick inside next tick
this is Promise.resolve 1
this is Promise.resolve 2
this is Promise.resolve 3
 this is the inner next tick inside Promise then block
 this is setTimeout 1
this is setTimeout 2
this is the inner next tick inside setTimeout
this is setTimeout 3
 */
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => {
//   console.log("this is setTimeout 2");
//   process.nextTick(() => {
//     console.log("this is the inner next tick inside setTimeout");
//   });
// }, 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);
// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("this is the inner next tick inside next tick");
//   });
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

//--
/**
 
 this is process.nextTick 1
this is process.nextTick 2
his is the inner next tick inside next tick
this is Promise.resolve 1
this is Promise.resolve 2
this is Promise.resolve 3
 this is the inner next tick inside Promise then block
 this is setTimeout 1
this is setTimeout 2
this is the inner promise inside setTimeout
this is setTimeout 3
 */
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setTimeout(() => {
//   console.log("this is setTimeout 2");
//   Promise.resolve().then(() => {
//     console.log("this is the inner promise inside setTimeout");
//   });
// }, 0);
// setTimeout(() => console.log("this is setTimeout 3"), 0);
// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("this is the inner next tick inside next tick");
//   });
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is the inner next tick inside Promise then block")
//   );
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));
//-
/**
 
 time =
 this is setTimeout 3
 this is setTimeout 2
 this is setTimeout 1
 
 */
// setTimeout(() => console.log("this is setTimeout 1"), 1000);
// setTimeout(() => console.log("this is setTimeout 2"), 500);
// setTimeout(() => console.log("this is setTimeout 3"), 0);
//--
/**
 time = cb1,cb3,cb2  .. 200 cbs times finished first than line 201 , 200 cbs can also finish latter than the 201 line
 */
// setTimeout(() => console.log("this is setTimeout 1"), 1000);
// const start = Date.now();
// while (Date.now() - start <= 1000) {}
// setTimeout(() => console.log("this is setTimeout 2"), 500);
// setTimeout(() => console.log("this is setTimeout 3"), 0);

//Microtask ans IO queu

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

//- Timer anamoly. Order of execution can never be guaranteed

// const fs = require("fs");
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

//--
// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// for (let i = 0; i < 2000000000; i++) {}

//-io polling

/**
 next = 
 promise =
 timer = 
 I/o  = 
 check = 

 */

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmidiate 1"));
// for (let i = 0; i < 2000000000; i++) {}

//Check queue
// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}
//--
// const fs = require("fs");
// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//   process.nextTick(() =>
//     console.log("this is inner process.nextTick inside readFile")
//   );
//   Promise.resolve().then(() =>
//     console.log("this is inner Promise.resolve inside readFile")
//   );
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}
//-
// setImmediate(() => console.log("this is setImmediate 1"));
// setImmediate(() => {
//   console.log("this is setImmediate 2");
//   process.nextTick(() => console.log("this is process.nextTick 1"));
//   Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// });
// setImmediate(() => console.log("this is setImmediate 3"));
//--
// const fs = require("fs");

// const readableStream = fs.createReadStream(__filename);
// readableStream.on("close", () => {
//   console.log("this is from readableStream close event callback");
// });
// readableStream.close();
// setImmediate(() => console.log("this is setImmediate 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// process.nextTick(() => console.log("this is process.nextTick 1"));
