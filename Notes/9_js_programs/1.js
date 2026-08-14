const arr = [1, [2, 3, 2], [4, [5, 1, 6]], 3]
// Op -> [1, 2, 3, 4, 5, 6]

const finalVal = [];
const flatMap = (value) => {
    console.log(value)
    if(Array.isArray(value)){
        value.forEach(data=>flatMap(data));
    }else{
        if(!finalVal.includes(value)){

        finalVal.push(value);
        }
    }
}

arr.forEach(data=>flatMap(data));
console.log(finalVal)

// ### One improvement for an interview

// You can simplify the duplicate handling by using a `Set`.

// ```js
// const arr = [1, [2, 3, 2], [4, [5, 1, 6]], 3];

// const result = new Set();

// const flatten = (value) => {
//     if (Array.isArray(value)) {
//         value.forEach(flatten);
//     } else {
//         result.add(value);
//     }
// };

// arr.forEach(flatten);

// console.log([...result]);
// ```

// Output:

// ```js
// [1, 2, 3, 4, 5, 6]
// ```
