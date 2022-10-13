const settings = require("../../settings.json")

class Space{
    constructor(length, width, height){
        this.width = width
        this.height = height
        this.length = length
        this.environment = settings.environment
    }

    async create(){
        if(this.length == undefined || this.width == undefined || this.height == undefined){
            console.log({ error : "Missing element!" })
        } else {
       settings.environment[0].space = this.height * this.width * this.length
       settings.environment[1].objects = true
       settings
     }
    }
}

module.exports = Space