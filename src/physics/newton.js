const G = 6.67 / 10e11;
let F, m1, m2, r, a;
const g = 10;

function calculate_force(m1, m2, r){
    const G = 6.67 / 10e11;
    let F = (G * m1 * m2) /  (r*r)
    return F
}

function calculate_obj_force(m, a){
   let F = m*a
   return F
}

function check_velocity_status(F1, F2){
    if(F1-F2==0 || F2-F1==0){
        return { status : true, message : "Constant" }
    } else {
        return { status : false, message : "Non-Constant" }
    }
}

const quantities = { F, m1, m2, r }
const functions = { calculate_force, calculate_obj_force, check_velocity_status }

module.exports = { quantities, functions }