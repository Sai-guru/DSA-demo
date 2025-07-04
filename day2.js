//PREFIX SUM 
//input values
// const arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
// q= [[1,3],[2,7],[4,8],[0,3]];

// const prefixSumArray = (arr)=> {
//     const p = new Array(arr.length);
//     p[0]=arr[0];
//     for(let i=1;i<arr.length;i++){
//         p[i] = p[i-1]+arr[i];
//     }return p;
// } ;
// var x = prefixSumArray(arr)

// const rangeSum = (x,s,e)=>{
//     if(s===0) return x[e];
//     return x[e]-x[s-1];   
// }


// console.log("Final Prefix Sum Array is" + ` [${x}]`);
// q.forEach(([s,e]) => {
//     var y = rangeSum(x,s,e);
//     console.log(`S to E from [${s},${e}] is ${y}`)
    
// });


//CARRY FORWARD

// const s = ["a","b","e","g","a","a","g"]
// const CF =(s)=> {
//     let count =0;
//     let aCount = 0;
//     l=s.length;

//     for(let i=0;i<l;i++){
//         if(s[i]==='a'){
//             aCount++;
//         }else if(s[i]==='g'){
//             count = count + aCount;
//         }
//     }return count;
// }
// console.log(CF(s));

//SLIDING WINDOW
// const arr = [2,1,5,1,3,2]
// const k = 3

// const SW= (arr)=> {
//     let windSum = 0;
//     for(let i=0;i<k;i++){
//         windSum = windSum + arr[i];
//     }console.log(`window sum is ${windSum}  `);

//     for(let i=k;i<arr.length;i++){
//         windSum = windSum +arr[i]-arr[i-k];
//         console.log(`window sum is ${windSum} `);
//     }
// }
// SW(arr);


//2D MATRIX
//add and display the maximum column values
// const matrix = [
//   [1, 2, 3],            //row 0 
//   [4, 5, 6],            //row 1    
//   [7, 8, 9]            //row 2 
// ];
// const rows = matrix.length;
// const cols = matrix[0].length;
// let colSums = [0, 0, 0];  // assuming 3 columns

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++) {
//     colSums[j] = colSums[j] + matrix[i][j];
//   }
// }

// console.log("Column sums are:", colSums);

// const matrix = [
//   [1, 2, 3],            //row 0 
//   [4, 5, 6],            //row 1    
//   [7, 8, 9]            //row 2 
// ];
// const rows = matrix.length;
// const cols = matrix[0].length;
// let colRows = [0, 0, 0];  // assuming 3 columns

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++) {
//     colRows[i] = colRows[i] + matrix[i][j];
//   }
// }

// console.log("Column sums are:", colRows);