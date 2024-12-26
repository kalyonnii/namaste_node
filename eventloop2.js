const fs = require("fs");
const a = 100;
setImmediate(() => console.log("Set immediate call"));

Promise.resolve("Promise").then(() =>
    console.log("promise "))
fs.readFile("./file.txt", "utf-8", () => {
    console.log("file reading done")
})

setTimeout(() => {
    console.log("timer expired")
}, 0);

process.nextTick(() => {
    console.log("next tick call")
})
function printA() {
    console.log("a=", a)
}
printA();
console.log("last line")

//output
//a=10
//last line
//next tick called
//promise called
//timer expired
//set imme
//file reading