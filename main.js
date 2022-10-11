const velocity = require("./src/physics/velocity.js")
const force = require("./src/physics/newton")
const settings = require("./settings.json");
const Cube = require("./src/math/geometry/cube.js");

let velocityQuantities = velocity.quantities;
let velocityFunctions = velocity.functions
const forceQuantities = force.quantities
const forceFunctions = force.functions

let { calculate_force } = forceFunctions
let cube = new Cube(5)

let result1 = calculate_force(5, 7, 10)
let result2 = cube.volume()
let result = result1/result2    

console.log(result)