/*
Logical AND and OR
*/
console.log(true && false)
// > false
console.log(true && true)
// > true
console.log(false || true)
// > true
console.log(false || false)
// > false


/*
Ternary/conditional operator
*/
console.log(true ? 1 : 2);
// > 1
console.log(true ? 1 : 2);
// > 2


/*
Short-Circuiting Logical Operators
Can use to fall-back onto default value
Using || defaults if false
Using && defaults if true
*/
console.log(null || "user")
// > user
console.log("Karl" || "user")
// > Karl

console.log(null && "rar")
// > null
console.log("Karl" && "rar")
// > rar
