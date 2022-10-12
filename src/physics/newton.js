const G = 6.67 / 10e11;
let F, m1, m2, r, a;
const g = 10;

function calculate_force_between(m1, m2, r){
    const G = 6.67 / 10e11;
    let F = (G * m1 * m2) /  (r*r)
    return F
}

function calculate_obj_force(m, a){
   let F = m*a
   return F
}

function check_velocity(F1, F2){
    if(F1-F2==0 || F2-F1==0){
        return { status : true, message : "Constant" }
    } else {
        return { status : false, message : "Non-Constant" }
    }
}

function calculate_friction(coefficient, m, alpha){
    const g = 10;
    
}

const quantities = { F, m1, m2, r }
const functions = { calculate_force_between, calculate_obj_force, check_velocity }

module.exports = { quantities, functions }