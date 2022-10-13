const G = 6.67 / 10e11;
let F, m1, m2, r, a;
const g = 10;

function forceBetween(m1, m2, r){
    const G = 6.67 / 10e11;
    let F = (G * m1 * m2) /  (r*r)
    return F
}

function objectForce(m, a){
   let F = m*a
   return F
}

function checkVelocity(F1, F2){
    if(F1-F2==0 || F2-F1==0){
        return { status : true, message : "Constant" }
    } else {
        return { status : false, message : "Non-Constant" }
    }
}

function objectFriction(coefficient, m, alpha){
    const g = 10;
    
}

const quantities = { F, m1, m2, r }
const functions = { forceBetween, objectForce, checkVelocity, objectFriction }

module.exports = { quantities, functions }