let a = 0;
let F = 0;
let S = 0;
let t = 0;
let v = 0;
let v0 = 0;
let x = 0;

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
    let S = 0;
    if(type.toLowerCase() === "positive"){
       S = (v0 * t) + (a * (t**2))/2
       return S
    }
}

let quantities = { S, t, v, x };
let functions = { getV, getT, getS, getS_momentum }

module.exports = { quantities, functions }