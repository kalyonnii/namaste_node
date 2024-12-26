const fs = require("fs");
setImmediate(() => console.log("Set immediate call"));
setTimeout(() => {
    console.log("timer expired")
}, 0);

Promise.resolve("Promise").then(() =>
    console.log("promise "))
fs.readFile("./file.txt", "utf-8", () => {
    setTimeout(() => {
        console.log("timer 2 expired")
    }, 0);
    process.nextTick(() => {
        console.log("next tick 2 call")
    })
    setImmediate(() => console.log("Set immediate 2 call"));
    console.log("file reading done")
})

process.nextTick(() => {
    console.log("next tick call")
})


console.log("last line")
//output
//last line
//next tick call
//promise
//timer expired

//Set immediate call
//file reading done
//next tick 2 call

//Set immediate 2 call
//timer 2 expired