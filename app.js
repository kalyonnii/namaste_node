require('')
const { calculateSum } = require('./calculate/sum.js');
const { multiply } = require('./calculate/multiply.js')
// const obj = require('./sum.js');
//const obj = require('./sum');
//import { calculateSum } from './sum.js';


//console.log(abc)
calculateSum(3, 4)
// obj.calculateSum(3, 4)
// console.log(obj.abc);

var name = "Namaste NodeJS"
var a = 10;
var b = 20;
multiply(a, b)
console.log(name)
console.log(a + b)

//console.log(global)
{/* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 81.42709994316101,
      nodeStart: 5.422099947929382,
      v8Start: 13.690600037574768,
      bootstrapComplete: 57.08959996700287,
      environment: 29.663400053977966,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1724862368297.052
  },
  fetch: [AsyncFunction: fetch]
} */}
//console.log(this)//empty object
// -- {}
//window = self= frames= this = in console =>globalThis
//console.log(globalThis)
console.log(globalThis === global)