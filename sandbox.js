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

// arr = [2, 3, 1, 5]

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   if (A.length === 0) return 1

//   let sumOfArray = A.reduce((accum, current) => accum + current)
//   let lengthOfArray = A.length + 1
//   let result = lengthOfArray * (lengthOfArray + 1) / 2

//   return result - sumOfArray
// }

// console.log(solution(arr))



// function solution(A, B, K) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   if (A % 2 ===0) {
//       return Math.ceil(B / K) - (A / K)
//   }
//   return (B / K) - Math.floor(A / K)
// }

// console.log(solution(100, 1200, 7))

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   if (A.length === 0) return 1
  
//   A.sort((a, b) => a - b)
//   if (A[A.length - 1] <= 0 || !A.includes(1)) return 1
  
//   for (let i = 0; i < A.length; i++) {
//       if (A[i] !== A[i + 1] && A[i] + 1 !== A[i + 1] && A[i] > 0) return A[i] + 1    
//   }
// }

// console.log(solution([1, 3, 6, 4, 1, 2]))
// console.log(solution([-3, -2]))
// console.log(solution([-1, 1, 2,3]))
// console.log(solution([6, 2000]))

let arr = [1,3,1,4,2,3,5,4]
function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const dupRemovedArray = Array.from(new Set(A))
  const filteredArray = dupRemovedArray.filter(item => item <= X)
  
  const frogPosition = A.indexOf(filteredArray[filteredArray.length - 1])
  const sortedPosition = filteredArray.sort((a, b) => a - b)
  
  return sortedPosition[sortedPosition.length - 1] !== X ? -1 : frogPosition
}

console.log(solution(8, arr))
console.log(solution(8, [7,6,5,5,6,4,3,2,2,3,1,2,3]))
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]))
console.log(solution(3, [3,3,3]))