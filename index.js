let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2)); // 8
console.log(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25
