/*

When to Use A Sliding Window
To identify problems where a sliding window can be helpful, look for a few properties:

- Whenever you need to calculate running average
- If you want to formulate a set of adjacent pairs
- The problem involves an ordered data structure
- If you need to identify a target value in an array
- If you need to identify a longest, shortest, or most optimal sequence that satisfies a given condition in a collection

Imagine we have this array:

[ 5, 7, 1, 4, 3, 6, 2, 9, 2 ]
How would we find the largest sum of five consecutive elements? Well, we'd first look at 5, 7, 1, 4, 3 and see that the sum is 20. 
Then we'd look at the next set of five consecutive elements, which is 7, 1, 4, 3, 6. The sum of those is 21. 
This is more than our previous sum, so 7, 1, 4, 3, 6 is currently the best we've got so far.

Let's see if we could improve. 1, 4, 3, 6, 2? No, that sums to 16. 4, 3, 6, 2, 9? That sums to 24, so now that's the best sequence we've got. 
Now we move along to the next sequence, 3, 6, 2, 9, 2. That one sums to 22, which doesn't beat our current best of 24. And we've reached the end, so we're done.

The brute force approach to implementing this programmatically is as follows:

const getMaxSumOfFiveContiguousElements = (arr) => {
  let maxSum = -Infinity;
  let currSum;

  for (let i = 0; i <= arr.length - 5; i++) {
    currSum = 0;

    for (let j = i; j < i + 5; j++) {
      currSum += arr[j];
    }

    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

What is the time complexity of this? It's O(n*k). The outer loop is going through n - k + 1 items, but when n is much larger than k, 
we can forget about the k + 1 part and just call it n items. Then the inner loop is going through k items, so we have O(n*k). 

Can we get this down to just O(n)? Let's return to this array:

[ 5, 7, 1, 4, 3, 6, 2, 9, 2 ]

First we get the sum of 5, 7, 1, 4, 3. Next we need the sum of 7, 1, 4, 3, 6. Visualize it with a "window" surrounding each group of five elements.

What's the difference between the first window and the second window? Well, the second window got rid of the 5 on the left but added a 6 on the right. 
So since we know the sum of the first window was 20, to get the sum of the second window, we take that 20, subtract out the 5, and add the 6 to get 21. 
We don't actually have to go through each element in the second window and add them up (7 + 1 + 4 + 3 + 6). That would involve doing repeated and unnecessary work.

I think of it as more a technique than an algorithm. It's a technique that could be utilized in various algorithms.

I think the technique is best understood with the following example. Imagine we have this array:

[ 5, 7, 1, 4, 3, 6, 2, 9, 2 ]
How would we find the largest sum of five consecutive elements? Well, we'd first look at 5, 7, 1, 4, 3 and see that the sum is 20. Then we'd look at the next set of five consecutive elements, which is 7, 1, 4, 3, 6. The sum of those is 21. This is more than our previous sum, so 7, 1, 4, 3, 6 is currently the best we've got so far.

Let's see if we could improve. 1, 4, 3, 6, 2? No, that sums to 16. 4, 3, 6, 2, 9? That sums to 24, so now that's the best sequence we've got. Now we move along to the next sequence, 3, 6, 2, 9, 2. That one sums to 22, which doesn't beat our current best of 24. And we've reached the end, so we're done.

The brute force approach to implementing this programmatically is as follows:

const getMaxSumOfFiveContiguousElements = (arr) => {
  let maxSum = -Infinity;
  let currSum;

  for (let i = 0; i <= arr.length - 5; i++) {
    currSum = 0;

    for (let j = i; j < i + 5; j++) {
      currSum += arr[j];
    }

    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};
What is the time complexity of this? It's O(n*k). The outer loop is going through n - k + 1 items, but when n is much larger than k, we can forget about the k + 1 part and just call it n items. Then the inner loop is going through k items, so we have O(n*k). Try visualizing it like this:

enter image description here

Can we get this down to just O(n)? Let's return to this array:

[ 5, 7, 1, 4, 3, 6, 2, 9, 2 ]
First we get the sum of 5, 7, 1, 4, 3. Next we need the sum of 7, 1, 4, 3, 6. Visualize it like this, with a "window" surrounding each group of five elements.

enter image description here

What's the difference between the first window and the second window? Well, the second window got rid of the 5 on the left but added a 6 on the right. So since we know the sum of the first window was 20, to get the sum of the second window, we take that 20, subtract out the 5, and add the 6 to get 21. We don't actually have to go through each element in the second window and add them up (7 + 1 + 4 + 3 + 6). That would involve doing repeated and unnecessary work.

Here the sliding window approach ends up being two operations instead of five, since k is 5. That's not a huge improvement, but you can imagine that for larger k (and larger n) it really does help.

enter image description here

Here's how the code would work using the sliding window technique:

const getLargestSumOfFiveConsecutiveElements = (arr) => {
  let currSum = getSum(arr, 0, 4);
  let largestSum = currSum;

  for (let i = 1; i <= arr.length - 5; i++) {
    currSum -= arr[i - 1]; // subtract element to the left of curr window
    currSum += arr[i + 4]; // add last element in curr window
    largestSum = Math.max(largestSum, currSum);
  }

  return largestSum;
};

const getSum = (arr, start, end) => {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += arr[i];
  }

  return sum;
};

*/
