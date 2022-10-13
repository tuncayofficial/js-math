const settings = require("../../../settings.json")

class Cube{
    constructor(side, mass){
        this.side = side
        this.mass = mass
        this.environment = settings.environment
        if(settings.environment[1].objects === false){
            console.log("Please create a Space first!")
        } else {
        settings.environment[2].props.push({
            prop : "Cube",
            side : this.side,
            mass : this.mass
        })
        }
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