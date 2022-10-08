const velocity = require("./src/physics/velocity.js")
const force = require("./src/physics/newton")

let velocityQuantities = velocity.quantities;
let velocityFunctions = velocity.functions
const forceQuantities = force.quantities
const forceFunctions = force.functions

let result = forceFunctions.calculate_force(3, 4, 10)

console.log(result)