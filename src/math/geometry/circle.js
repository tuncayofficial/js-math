const settings = require("../../../settings.json")

class Circle{
    constructor(radius){
        this.radius = radius
    }

    length(){
        let result = 2 * settings.pi * this.radius
        return "Nearly " + result
    }

    area(){
        let result = settings.pi * this.radius**2
        return "Nearly " + result
    }
}

module.exports = Circle