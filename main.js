const velocity = require("./src/physics/velocity.js")
const force = require("./src/physics/newton")
const settings = require("./settings.json")

let velocityQuantities = velocity.quantities;
let velocityFunctions = velocity.functions
const forceQuantities = force.quantities
const forceFunctions = force.functions

let Square3D = require("./src/math/geometry/square3d")
let square3d = new Square3D(5, 5)

let result = velocityFunctions.getS_momentum(0, 5, 6, "Positive")

console.log(result)