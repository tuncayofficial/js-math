const velocity = require("./src/physics/velocity.js")
const force = require("./src/physics/newton")

let velocityQuantities = velocity.quantities;
let velocityFunctions = velocity.functions
const forceQuantities = force.quantities
const forceFunctions = force.functions

let Square3D = require("./src/math/geometry/square3d")
let square3d = new Square3D(5)

let result = square3d.volume()

console.log(result)