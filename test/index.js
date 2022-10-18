const jsmath = require("@tuncayofficial/js-math")
const { settings } = jsmath
const { showSettings } = jsmath
const space = new jsmath.Space(100,100,100)
let createdSpace = space.create()

const sphere = new jsmath.Sphere(6, 100, 100, 100, 100)
console.log(jsmath.showSettings().environment[2].props)