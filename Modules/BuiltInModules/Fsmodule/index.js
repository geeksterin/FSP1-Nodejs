const fs = require("node:fs");

//Sync
// console.log("start");
// const start = Date.now();
try {
    
} catch (error) {
    
}
// const data = fs.readFileSync("../importExportPatterns");
// console.log(data.toString());
// console.log(Date.now()-start);

// console.log("end");

// stpes
// 1) fs reading and storing the data in internal Buffer;
// 2) now we know that buffer stores data in raw binary format
// 3) whenever we are printing it we are getting hexadecimal.


// fs.writeFileSync("./file.txt","i am overriden content");
// fs.appendFileSync("./file.txt"," i am appended content");
// console.log(fs.existsSync("./file.txt"));
// console.log(fs.existsSync("./fi.txt"));
// console.log(fs.existsSync("../Buffer"));
// if(fs.existsSync("./file.txt"))
// {
//     console.log(fs.readFileSync("./file.txt",{encoding:"utf-8"}));
// }

// console.log(fs.lstatSync("./file.txt"));
// const obj = fs.lstatSync("./file.txt");

// console.log(obj.isFile());

// fs.rmSync("./F1",{recursive:true});
// fs.mkdirSync("./F1");

// fs.mkdirSync("./F2/F1",{recursive:true});

// fs.mkdirSync("./F1/F3");

//Async



// console.log("start");
// fs.readFile("./ind.js",{encoding:"utf-8"},(error,data)=>{
// console.log(data.toString());
// if(!error)
// {
//     console.log(data);
// }
// else
// {
//     console.log("provide a valid path");
// }

// });
// console.log("end");

// fs.exists("./inde.js",(isValid)=>{
// console.log(isValid);
// })
// fs.access("./iex.js",(error)=>{
//     if(!error)
//     {
//         console.log(true);
//     }
//     else
//     {
//         console.log("false");
//     }
// })

