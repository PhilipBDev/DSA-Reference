/*

Two pointers is really an easy and effective technique which is typically used for searching pairs in a sorted array.
Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.

Let’s see the naive solution.  

// Naive solution to find if there is a
// pair in A[0..N-1] with given sum.

function isPairSum(A, N, X)
{
		for (var i = 0; i < N-1; i++)
		{
			for (var j = i+1; j < N; j++)
			{
				// as equal i and j means same element
				if (i == j)
					continue;

				// pair exists
				if (A[i] + A[j] == X)
					return 1;

				// as the array is sorted
				if (A[i] + A[j] > X)
					break;
			}
		}

		// No pair found with given sum.
		return 0;
}


	
		var arr=[ 3, 5, 9, 2, 8, 10, 11 ];
		
		// value to search
		var val = 17;
	
		// size of the array
		var arrSize = 7;
	
		// Function call
		document.write(isPairSum(arr, arrSize, val));

//

Now let’s see how the two-pointer technique works. We take two pointers, one representing the first element and other representing the last element 
of the array, and then we add the values kept at both the pointers. If their sum is smaller than X then we shift the left pointer to right or if their 
sum is greater than X then we shift the right pointer to left, in order to get closer to the sum. We keep moving the pointers until we get the sum as X. 

// Two pointer technique based solution to find
// if there is a pair in A[0..N-1] with a given sum.

function isPairSum(A, N, X)
{

	// represents first pointer
	var i = 0;

	// represents second pointer
	var j = N - 1;

	while (i < j) {

		// If we find a pair
		if (A[i] + A[j] == X)
			return true;

		// If sum of elements at current
		// pointers is less, we move towards
		// higher values by doing i++
		else if (A[i] + A[j] < X)
			i++;

		// If sum of elements at current
		// pointers is more, we move towards
		// lower values by doing j--
		else
			j--;
	}
	return false;
}

// Driver code

	// array declaration
	var arr = [ 3, 5, 9, 2, 8, 10, 11 ];
	
	// value to search
	var val = 17;
	
	// size of the array
	var arrSize =7;
	
	// Function call
	document.write(isPairSum(arr, arrSize, val));
	
The algorithm basically uses the fact that the input array is sorted. We start the sum of extreme values (smallest and largest) and conditionally 
move both pointers. We move left pointer i when the sum of A[i] and A[j] is less than X. We do not miss any pair because the sum is already 
smaller than X. Same logic applies for right pointer j.


*/
