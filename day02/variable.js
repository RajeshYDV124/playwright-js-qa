// const: value can't be replaced
const name = "Rajesh";
console.log(name);

// let: value can change
let status = "Open";
status = "closed";
console.log(`current status is ${status}`);

// let can start empty; const can't
let age;
console.log(`Current age is ${age}`);

// Block scope: let stays inside { }, var leaks out
if(true){
    let letValue = "Rajesh";
    var varValue = "Yadav";
}
console.log(varValue);
// console.log(letValue); ❌ ReferenceError: insideLet is not defined

// Hoisting: var gives undefined, let gives an error
console.log(house);
var house = "Villa";

// console.log(houserNumber);
// let houseNumber = 643;
// console.log(hoistedLet); // ❌ ReferenceError: Cannot access before initialization
// let hoistedLet = "set later";

let list = ["AAA"];
list.push("BBB");
console.log(list);