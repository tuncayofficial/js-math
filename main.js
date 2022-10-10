const velocity = require("./src/physics/velocity.js")
const force = require("./src/physics/newton")
const settings = require("./settings.json");
const Square = require("./src/math/geometry/square.js");

let velocityQuantities = velocity.quantities;
let velocityFunctions = velocity.functions
const forceQuantities = force.quantities
const forceFunctions = force.functions

let square = new Square(4)

let result = square.diagonal()

console.log(result)