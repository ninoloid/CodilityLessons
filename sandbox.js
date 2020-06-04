// const num = 100
// const binaryFromNum = num.toString(2)
// console.log(binaryFromNum)

// const arr = [1,2,1,2,3,4,3]
// console.log(arr.indexOf(2).next)
// let a = arr.splice(2,1)
// console.log(arr)

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   for (i in A) {
//       let duplication = [...A]
//       let activeValue = duplication.splice(i, 1)
//       let isDuplicate = duplication.includes(activeValue[0])
      
//       if (!isDuplicate) return A[i]
//   }
// }

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   A.sort((a, b) => a - b)
//   console.log(A)
//   for (let i = 0; i < A.length; i += 2) {
//     if (A[i] != A[i + 1]) return A[i]
//   }
// }

// console.log(solution(arr))


// arr2 = arr.sort((a,b) => a - b)
// console.log(arr2)

arr = [2, 3, 1, 5]

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 0) return 1

  let sumOfArray = A.reduce((accum, current) => accum + current)
  let lengthOfArray = A.length + 1
  let result = lengthOfArray * (lengthOfArray + 1) / 2

  return result - sumOfArray
}

console.log(solution(arr))