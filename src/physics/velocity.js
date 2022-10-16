let a = 0;
let F = 0;
let S = 0;
let t = 0;
let v = 0;
let v0 = 0;
let x = 0;

// Settings

let settings = require("../../settings.json")

// Functions

function getV(S, t){
    return S/t;
}

function getT(S, v){
    return S/v
}

function getS(v, t){
    return v*t;
}

function getS_momentum(v0, t, a, type){
    if(type.toLowerCase() === "positive"){
       S = (v0 * t) + (a * (t**2))/2
       return S
    }
}

function accelerate(name, speed, time, direction){
    let way = speed * time

    if(direction == "x"){
        let object = settings.environment[2].props.filter(object =>{
            if(object.name == name){
             let result = object.x + way
             let message = "First position was " + object.x + ", it changed to " + result
             object.x = message
            }
    })
    }

    if(direction == "y"){
        let object = settings.environment[2].props.filter(object =>{
            if(object.name == name){
             let result = object.y + way
             let message = "First position was " + object.y + ", it changed to " + result
             object.x = message
            }
    })
    }

    if(direction == "xy"){
        let object = settings.environment[2].props.filter(object =>{
            if(object.name == name){
             let result1 = object.x + way
             let result2 = object.y + way
             let message1 = "First position was " + object.x + ", it changed to " + result1
             let message2 = "First position was " + object.y + ", it changed to " + result2
             object.x = message1
             object.y = message2
            }
    })
    }

    return settings.environment[2].props
  }


let quantities = { S, t, v, x };
let functions = { getV, getT, getS, getS_momentum, accelerate }

module.exports = { quantities, functions }