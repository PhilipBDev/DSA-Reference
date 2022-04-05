/* 

DYNAMIC PROGRAMMING
"A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."

MEMOIZATION
Memoization ensures that a function doesn't run for the same inputs more than once by keeping a record of the results for the given inputs (usually in a dictionary).

TABULATION
Storing the result of a previous result in a "table" (usually an array)
Usually done using iteration
Better space complexity can be achieved using tabulation

*/

function fibonnacci(n) {
  if (n <= 0) return undefined;
  if (n < 3) return 1;
  return fibonnacci(n - 1) + fibonnacci(n - 2);
}

//

function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

//

function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
