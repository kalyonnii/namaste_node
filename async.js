const fs = require("fs");
const https = require("https");

console.log("Hello World");
var a = 213233;
var b = 2099849;

https.get('https://dummyjson.com/products/1', (res) => {
    console.log("Data fetched Successfully")
})

setTimeout(() => {
    console.log('Settimeout called after 5 sec');
}, 5000);
//This callback will only be pushed to callstack in v8 once the callstack is empty.
setTimeout(() => {
    console.log('Call me ASAP');
}, 0); //trust issues with setTimeout

fs.readFileSync("./file.txt", "utf8") //synchronous function 
console.log("This will esecute after file data")
fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File data:", data)
})
function multiplyFn(x, y) {
    const result = a * b;
    return result
}
const c = multiplyFn(a, b)
console.log(c)
