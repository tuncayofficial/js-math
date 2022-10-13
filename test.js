const jsmath = require("./index")

const { objectFriction } = jsmath.newton.functions

let result = objectFriction(0.2, 3, 45)
console.log(result)