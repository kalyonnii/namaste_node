const fs = require("fs");
setImmediate(() => console.log("Set immediate call"));
setTimeout(() => {
    console.log("timer expired")
}, 0);

Promise.resolve("Promise").then(() =>
    console.log("promise "))
fs.readFile("./file.txt", "utf-8", () => {
    console.log("file reading done")
})

process.nextTick(() => {
    process.nextTick(() => console.log("inner nexttick"))
    console.log("next tick")
})


console.log("last line")
//output
//last line
//next tick
//inner next tick

//promise
//timer expired
//Set immediate call
//file reading done
