// export function calculateSum(a, b) {
//     const sum = a + b;
//     console.log(sum)
// }
function calculateSum(a, b) {
    const sum = a + b;
    console.log(sum)
}
//export var abc = 10;
z = "Hello world";// in ES6 not  ALLOWED it shows error 
var z = "hello world "; //correct way
// module.exports = calculateSum;
// module.exports = {
//     abc: abc,
//     calculateSum: calculateSum
// };

console.log(module.exports)
// module.exports.x=x;
module.exports.calculateSum = calculateSum;
console.log(module.exports)
module.exports = {
    calculateSum,
};  
