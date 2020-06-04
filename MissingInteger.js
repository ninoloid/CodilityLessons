// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 0) return 1
  
  A.sort((a, b) => a - b)
  if (A[A.length - 1] <= 0 || !A.includes(1)) return 1
  
  for (let i = 0; i < A.length; i++) {
      if (A[i] !== A[i + 1] && A[i] + 1 !== A[i + 1] && A[i] > 0) return A[i] + 1
  }
}