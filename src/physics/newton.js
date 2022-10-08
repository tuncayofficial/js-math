const G = 6.67 / 10e11;
let F, m1, m2, r, a;
const g = 10;

function calculate_force(m1, m2, r){
    const G = 6.67 / 10e11;
    let F = (G * m1 * m2) /  (r*r)
    return F + " N"
}

function calculate_obj_force(m, a){
   let F = m*a
   return F + " N"
}

const quantities = { F, m1, m2, r }
const functions = { calculate_force, calculate_obj_force }

module.exports = { quantities, functions }