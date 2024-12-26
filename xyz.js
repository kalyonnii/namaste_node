//console.log("another module")

// function x() {
//     const a = 10;
//     function b() {
//         console.log("b")
//     }
// }
// console.log(a)


// IIFE Immediately invoked function
(function (module, require) {
    //all the code of module runs inside here
    require("./calculate/multiply")
    function multiply(a, b) {
        const result = a * b;
        console.log(result)
    }
    module.exports = { multiply };
    // })(module)
})()
