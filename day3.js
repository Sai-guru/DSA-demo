// const arr = [1, 2, 3, 2, 4, 1, 5, 3];
// let uniqueCount = 0;

// for (let i = 0; i < arr.length; i++) {
// let isUnique = true;
//   // Check if arr[i] appeared before
//   for (let j = 0; j < i; j++) {
//     if (arr[i] === arr[j]) {
//       isUnique = false;
//       break;
//     }
//   }

//   if (isUnique) {
//     uniqueCount++;
//   }
// }

// console.log("Number of unique elements:", uniqueCount);

// const arr = [0, 2, 3, 0, 4, 1, 5, 3,7];
// const map = {};    //[] also can be given
// let uniqueCount = 0;

// for (let i = 0; i < arr.length; i++) {
//   const val = arr[i];
// if(map[val]) {

// } else if(!map[val]) {
//     map[val] = true;
//     uniqueCount++;
// }
// }

// console.log("Number of unique elements:", uniqueCount);

// const arr = [1, 2, 3, 2, 8, 1, 5, 3, 7];
// const map = new Map();
// let uniqueCount = 0;

// for (let i = 0; i < arr.length; i++) {
//   const val = arr[i];

//         if(map.has(val)) {
//             continue ;      //optional only yoo , we can leave empty or put ! inside if and do it.....
//         }else  {
//             map.set(val,true);
//             uniqueCount++;
//     }
// }
// console.log("Number of unique elements:", uniqueCount);
// console.log(map);



// querying the frequency
const A = [1, 2, 3, 2, 3, 3, 5];
const B = [3, 2, 5, 9];
const freq = {};

// frequency map from A
for (let i = 0; i < A.length; i++) {
  const val = A[i];

  if (freq[val]) {
    freq[val]++;
  } else {
    freq[val] = 1;
  }
} console.log(freq);
// console.log(JSON.stringify(freq));

//frequencies for each element in B
const result = [];
for (let i = 0; i < B.length; i++) {
  const val = B[i];

  if (freq[val]) {
    result.push(freq[val]);
   // console.log(`Frequency of ${val} in A: ${freq[val]}`);
  } else {
   // console.log(`Frequency of ${val} in A: 0`);
    result.push(0);
  }
}
console.log("Frequencies in B:", result);



