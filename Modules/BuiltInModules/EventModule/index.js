// const EventEmitter = require("node:events");

// const eventEmitter = new EventEmitter();

// eventEmitter.on("order",(a,b)=>{
//     console.log(`samiul has started to cook 1 ${a} ${b}`);
// })

// eventEmitter.on("order",(a)=>{
//     console.log(`samiul has started to cook 2 ${a}`);
// })
// eventEmitter.on("order",()=>{
//     console.log(`samiul has started to cook 3`);
// })
// console.log("hi")

// eventEmitter.emit("order",10,100);
// eventEmitter.emit("order");
// eventEmitter.emit("order");
// eventEmitter.emit("order");
// eventEmitter.emit("order");

//event way
const Shop = require("./Shop");
Shop.on("order",()=>{
  console.log("order placed");
})
Shop.placeOrder();
//normal way
// const Shop = require("./Shop");
// Shop.placeOrder();


