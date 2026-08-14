const arr = [0, 1, 0, 3, 12,5];
// Output [1, 3, 12, 0, 0]

const zeroArr = [];
const nonZeroArr = [];
arr.forEach(value=> value===0 ? zeroArr.push(value) : nonZeroArr.push(value));
console.log(nonZeroArr)
for(let i =0; i<nonZeroArr.length-1; i++){
    for(let j = i+1; j<nonZeroArr.length;j++){
        console.log(i,j)
        if(nonZeroArr[j]<nonZeroArr[i]){
            let temp = nonZeroArr[i];
            nonZeroArr[i] = nonZeroArr[j];
            nonZeroArr[j] = temp;
            console.log("nonZeroArr", nonZeroArr)
        }
    }
}

console.log([...nonZeroArr,...zeroArr])