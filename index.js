const Cube = require("./src/math/geometry/cube")
const Sphere = require("./src/math/geometry/sphere")
const Square = require("./src/math/geometry/square")
const Circle = require("./src/math/geometry/circle")
const settings = require("./settings.json")
const velocity = require("./src/physics/velocity")
const newton = require("./src/physics/newton")
const Space = require("./src/physics/space")

// Additional functions

function showSettings(){
   return settings
}

module.exports = {
    Cube,
    Sphere,
    Square,
    Circle,
    velocity,
    newton,
    Space,
    showSettings,
    settings
}