// String: text in quotes or backticks

const browser = "chrome";
console.log(browser, typeof(browser));

const number = 123;
console.log(number, typeof(number));

// Boolean: true or false
const isNumber = true;
console.log(isNumber, typeof(isNumber));

// Undefined: created, no value given
let south;
console.log(south, typeof(south));

// Null: deliberately empty
const assignee = null;
console.log(assignee, typeof(assignee));   // null object (JS quirk)
console.log(assignee === null);    // true (correct way to check null)

// Array: ordered list, counted from 0
let ac = ["Daikin", "LG", "Voltas"];
console.log(ac[0], ac.length, typeof(ac)); // Desktop 3
console.log(Array.isArray(ac));              // true
console.log(Array.isArray(south));

// Object: named values
const bug = {
    id : 12,
    severity : "high",
    isOpen : true
}
console.log(bug.id, bug.severity, bug.isOpen); // 11 High true  
bug.id = bug.id + 2; // changing a property is allowed with const
console.log(bug.id);   // 14

// + joins when text is involved
console.log("5"+5); //55
console.log(5+5);   //10

//const racket = Object.freeze({id : 11});
const racket = {id :15};
racket.id =222;
console.log(racket.id);

const pillow = ["P1", "p2"];
pillow.push("p3");
console.log(pillow[2]);