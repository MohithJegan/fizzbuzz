// Get the element
const outputDiv = document.getElementById("fizzbuzz-output");

// Loop for the FizzBuzz program
for (let i = 1; i <= 100; i++) {
  let result = "";
  if (i % 4 === 0 && i % 3 === 0) {
    result = "FizzBuzz";
    console.log("FizzBuzz"); // 12, 24, ... 
  } 
else if (i % 4 === 0) {
    result = "Fizz";
    console.log("Fizz"); // 4, 8, 16, …
  } 
else if (i % 3 === 0) {
    result = "Buzz";
    console.log("Buzz"); // 3, 6, 9, …
  } 
else {
    result = i;
    console.log(i); // 1, 2, 5, …
  }
  
  // Create the element
  const para = document.createElement("p");
  // Assign the element with content
  para.textContent = result;
  // Append the element
  outputDiv.appendChild(para);
}

 