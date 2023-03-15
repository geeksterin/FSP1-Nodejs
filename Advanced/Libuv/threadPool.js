const crypto = require("node:crypto");
const os = require("node:os");
const https = require("node:https");

// const CALLS = 10;
// const start = Date.now();
// for (let i = 1; i <= CALLS; i++) {
//   crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
//   console.log(`hash ${i} ${Date.now() - start}`);
// }
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 10000, 512, "sha512");

// password+salt = ewhfiwegiwuegewcbwiei+salt = wewewfwfwefewffew+salt = ewbfjwefgjw
// const CALLS = 1;
// const start = Date.now();
// for (let i = 1; i <= CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
//     console.log(`hash ${i} ${Date.now() - start}`);
//   });
// }

// process.env.UV_THREADPOOL_SIZE = 8;
// const CALLS = 16;
// const start = Date.now();
// for (let i = 1; i <= CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
//     console.log(`hash ${i} ${Date.now() - start}`);
//   });
// }

// console.log(os.cpus().length);

// 1core = 1thread
// 2core = 2thread;
// ...
// ...
// ...
// ...
// ...
// 8core = 8thread
// process.env.UV_THREADPOOL_SIZE = 9;
// const CALLS = 10;
// const start = Date.now();
// for (let i = 1; i <= CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
//     console.log(`hash ${i} ${Date.now() - start}`);
//   });
// }

// const start = Date.now();

// const CALLS = 10;
// for (let i = 1; i <= CALLS; i++) {
//   https
//     .request("https://www.google.com", (res) => {
//       res.on("data", () => {});
//       res.on("end", () => {
//         console.log(Date.now() - start);
//       });
//     })
//     .end();
// }
