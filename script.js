// Part 1: Variables & Conditionals
let userName = "Alice";
let age = 20;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// Part 2: Custom Functions
function greetUser(name) {
  return "Hello, " + name + "!";
}

greetUser();

const squareNumber = function(num) {
  return num * num;
}

squareNumber();

console.log(greetUser(userName));
console.log("Square of 4 is: " + squareNumber(4));

// Part 3: Loops
let colors = ["Red", "Green", "Blue"];

// For loop
for (let i = 0; i < colors.length; i++) {
  console.log("Color: " + colors[i]);
}

// While loop
let count = 1;
while (count <= 3) {
  console.log("Count is: " + count);
  count++;
}

// Part 4: DOM Interactions

// 1. Change heading color
document.querySelector("h1").style.color = "purple";

// 2. Add event listener to form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});

// 3. Update heading text dynamically
document.querySelector("h1").textContent = "Welcome to My Interactive Page";
