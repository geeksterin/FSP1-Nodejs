// const getSum = require("./sum");


// test("testing getSum method",()=>{
//     expect(getSum(2,2)).toBe(4);
//     expect(getSum(10,2)).toBe(12);
//     expect(getSum(8,2)).toBe(10);
//     expect(getSum(8,10)).toBe(18);
// });

// const {sum,mul,sub,div} = require("./calc");

// test("testing the sum method",()=>{
//     expect(sum(1,2)).toBe(3);
//     expect(sum(2,3)).toBe(5);
//     expect(sum(7,8)).toBe(15);
// });


// test("testing the div method",()=>{
//     expect(div(8,2)).toBe(4);
// });

// test("testing the sub method",()=>{
//     expect(sub(3,2)).toBe(1);
// });

// test("testing the mul method",()=>{
//     expect(mul(2,3)).toBe(6);
// });


// const n = null;



// test("testing the type or value of n",()=>{
//     expect(n).toBeNull();
//   expect(n).not.toBeDefined();
//   expect(n).toBeTruthy();
//   expect(n).toBeFalsy();
// })


// test('zero', () => {
//     const z = 0;
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
//   });




// console.log(0.1+0.2);


// const name = "samiul";

// test("Checking the name variable",()=>{
//     expect(name).toMatch("samiul");
// })



// const obj = {"pro1":1,"pro2":2};

// test("Checking obj",()=>{
//     // expect(obj).toBe({"pro1":1,"pro2":2});
//     expect(obj).toEqual({"pro1":1,"pro2":2});
// })


// const arr = [1,2,3];

// test("Checking arr",()=>{
//     // expect(arr).toBe([1,2,3]);
//     expect(arr).toEqual([1,2,3]);
// })


// const arr = [1,2,3,undefined];
// test("Check arr",()=>{
//     // expect(arr).toBe([1,2,3,undefined]);
//     // expect(arr).toEqual([1,2,3,undefined]);
//     expect(arr).toStrictEqual([1,2,3,undefined])
// })


// function retunrsPromise()
// {
//     return new Promise((resolve,reject)=>{
//         if(true)
//         {
//             resolve("i am resolved");
//         }
//         else
//         {
//             reject("i am rejected");
//         }
//     })
// }

// test("Testing the retunrsPromise async function",()=>{
//     retunrsPromise().then(data=>{
//         expect(data).toBe("i am rejected");
//     })
// })

// test("Testing the retunrsPromise async function",async()=>{
//     const data = await retunrsPromise();
//     expect(data).toBe("i am resolved");
// })



