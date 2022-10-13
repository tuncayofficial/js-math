const jsmath = require("./index")
const settings = require("./settings.json")
const { showSettings } = jsmath
const space = new jsmath.Space(5,6,7)
let createdSpace = space.create()

const { forceBetween } = jsmath.newton.functions

const cube = new jsmath.Cube(4,5)
const cube2 = new jsmath.Cube(5,10)

const mass1 = settings.environment[2].props[0].mass
const mass2 = settings.environment[2].props[1].mass

let result = forceBetween(mass1, mass2, 10)
let result2 = showSettings()
console.log(result)
console.log(result2)