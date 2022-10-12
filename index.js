const Cube = require("./src/math/geometry/cube")
const Square = require("./src/math/geometry/square")
const Circle = require("./src/math/geometry/circle")

const velocity = require("./src/physics/velocity")
const newton = require("./src/physics/newton")
const Space = require("./src/physics/space")

module.exports = {
    Cube,
    Square,
    Circle,
    velocity,
    newton,
    Space
}