const settings = require("../../../settings.json")

class Sphere{
    constructor(name, radius, mass, x, y, z){
        this.name = name
        this.radius = radius
        this.mass = mass
        this.environment = settings.environment
        this.x = x
        this.y = y
        this.z = z
        if(settings.environment[1].objects === false){
            console.log({ status : "Error", message : "Please create a Space first!"})
        }

        if(settings.environment[0].space < this.side**3){
            console.log({ status : "Error", message : "Volume of sphere is higher than space!" })
            return
        }
        settings.environment[2].props.push({
            prop : "Sphere",
            name : this.name,
            radius : this.radius,
            mass : this.mass,
            density : this.mass / ( 4/3 * settings.pi * this.radius ** 3 ),
            x : this.x,
            y : this.y,
            z : this.z
        })
    }

    volume(){
        let formula = 4/3 * settings.pi * this.radius**3
        return Math.floor(formula)
    }
}

module.exports = Sphere