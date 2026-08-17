const users = [
  { name: "A", age: 23 },
  { name: "B", age: 27 },
  { name: "C", age: 35 },
  { name: "D", age: 42 },
  { name: "E", age: 19 },
];

// output
// {
//   "10-19": [{ name: "E", age: 19 }],
//   "20-29": [
//     { name: "A", age: 23 },
//     { name: "B", age: 27 }
//   ],
//   "30-39": [{ name: "C", age: 35 }],
//   "40-49": [{ name: "D", age: 42 }]
// }

const resultObj = {};

users.forEach(data=>{
    const age = data.age;
    const startRange = (age-age%10);
    const endRange = startRange+9;
    // console.log(startRange, endRange);
    const key = `${startRange}-${endRange}`;
    if(key in resultObj){
        resultObj[key].push(data);
    }else{
        resultObj[key] = [data];
    }
})

console.log('resultObj',resultObj);