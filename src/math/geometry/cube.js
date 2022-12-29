const settings = require("../../../settings.json")
const Molecular = require("../../physics/molecular")

class Cube{
    constructor(name, side, mass, x, y, z){
        this.name = name
        this.side = side
        this.mass = mass
        this.environment = settings.environment
        this.x = x
        this.y = y
        this.z = z
        if(settings.environment[1].objects === false){
            console.log({ status : "Error", message : "Please create a Space first!"})
        }

        if(settings.environment[0].space < this.side**3){
            console.log({ status : "Error", message : "Volume of cube is higher than space!" })
            return
        }
        settings.environment[2].props.push({
            prop : "Cube",
            name : this.name,
            side : this.side,
            mass : this.mass,
            density : this.mass / this.side ** 3,
            x : this.x,
            y : this.y,
            z : this.z,
           // m0 : 
        })
    }

    perimeter(){
        return this.side*4
    }

    area(){
        return 6 * (this.side**2)
    }

    volume(){
        return this.side**3
    }
}

module.exports = Cube