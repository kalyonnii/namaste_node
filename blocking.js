const crypto = require("node:crypto");
console.log("Hello World");
var a = 43892175;
var b = 789;
//sync function will block the main thread  = DONT USE IT 
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512")
console.log("First sync generated")

setTimeout(() => {
    console.log('Call me ASAP');
}, 0); //it will only cbe called once callstack of main thread is empty

//PBKDF = PASSWORD BASED KEY DERIVATIVE FUNCTION
//async function 
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("second Key is generated");
})

function multiplyFn(x, y) {
    const result = a * b;
    return result
}
const c = multiplyFn(a, b)
console.log(c)

