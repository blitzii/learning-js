/*
Variables (simple)
*/

var one = 1, two = 2;
console.log(one + two);
// > 3

var x = 30;
console.log("the value of x is", x);
// > the value of x is 30

/*
- Browser Only
Not used much today - but useful for testing
*/
/*
alert("Why hello there!");    // display message
confirm("Yay or nay?");       // OK/cancel dialogue
prompt("Talk to me", "...");  // Dialogue window
*/

/*
if  statements
*/

//var num = Number(prompt("Pick a number", "0"));
//if (num < 10)
//  alert("Small");
//else if (num < 100)
//  alert("Medium");
//else
//  alert("Large");


/*
Loops
*/

// Print all even numbers
var number = 0;
while (number <= 12) {
  console.log(number);
  number = number +2;
}

// 2e10
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter +1;
}
console.log(result);

// do loop - always executes AT LEAST ONCE
//do {
//  var name = prompt("Who are you?");
//} while (!name);
//console.log(name);

// for loop (examples have same result as above)
for (var number = 0; number <=12; number = number + 2)
  console.log(number);

var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
  result = result * 2;
console.log(result);

// 'break'-ing out of a loop (opposite of 'continue')
for (var current = 20; ;current++) {
  if (current % 7 == 0)
    break;
}
console.log(current) // first number > 20 and multiple of 7

/*
counters
*/
counter = 0;
counter += 1;   // 1
counter++;      // 2
counter -= 1;   // 1
counter--;      // 0

/*
switches
*/

switch (prompt("Weather?")) {
  case "rainy":
    console.log("Umbrella!");
    break;
  case "sunny":
    console.log("Yay!");
  case "cloudy":
    console.log("Manchester");
    break;
  default:
    console.log("Unknown");
    break;
} // No 'break' in "sunny" case means that next case is also returned
