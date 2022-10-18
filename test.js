const jsmath = require("./index")
const settings = require("./settings.json")
const { showSettings } = jsmath
const space = new jsmath.Space(100,100,100)
let createdSpace = space.create()

const { forceBetween } = jsmath.newton.functions
const cube = new jsmath.Cube("Car", 6,10, 5, 10, 20)
const sphere = new jsmath.Sphere("Ball",6,10, 6, 12, 144)
let { accelerate } = jsmath.velocity.functions

const mass1 = settings.environment[2].props[0].mass
const mass2 = settings.environment[2].props[1].mass

let result = forceBetween(mass1, mass2, 10)
console.log(accelerate("Car", 4,4,"xy"))