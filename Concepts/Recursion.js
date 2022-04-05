/* 

A process (a function in our case) that calls itself. Invoke the same function with a different input until you reach your base case!

Base Case
The condition when the recursion ends.

For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
To make copies of objects use Object.assign, or the spread operator

*/

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(4);
