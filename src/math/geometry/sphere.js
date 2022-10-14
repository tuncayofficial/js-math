const settings = require("../../../settings.json")

class Sphere{
    constructor(radius, mass){
        this.radius = radius
        this.mass = mass
        this.environment = settings.environment
        if(settings.environment[1].objects === false){
            console.log({ status : "Error", message : "Please create a Space first!"})
        }

        if(settings.environment[0].space < this.side**3){
            console.log({ status : "Error", message : "Volume of sphere is higher than space!" })
            return
        }
        settings.environment[2].props.push({
            prop : "Sphere",
            radius : this.radius,
            mass : this.mass
        })
    }

    volume(){
        let formula = 4/3 * settings.pi * this.radius**3
        return Math.floor(formula)
    }
}

module.exports = Sphere