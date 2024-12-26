const fs = require("fs");
const a = 100;
setImmediate(() => console.log("Set immediate call"));
fs.readFile("./file.txt", "utf-8", () => {
    console.log("file reading done")
})

setTimeout(() => {
    console.log("timer expired")
}, 0);

function printA(){
    console.log("a=",a)
}
printA();
console.log("last line")