1. Quick introduction
2. previous project details

3. JS problem 1:

Group the array by age

const users = [   { name: "John", age: 25 },   { name: "Alice", age: 30 },   { name: "Bob", age: 25 },   { name: "Mike", age: 30 } ];

output
{
  25: [
    { name: "John", age: 25 },
    { name: "Bob", age: 25 }
  ],
  30: [
    { name: "Alice", age: 30 },
    { name: "Mike", age: 30 }
  ]
}
 
4. JS problem 2:

Find highest paid employee obj

const employees = [   { name: "John", salary: 50000 },   { name: "Alice", salary: 75000 },   { name: "Bob", salary: 60000 },   { name: "David", salary: 90000 } ];

5. JS problem 3:

const users = [

  { id: 1, name: "John", email: "john@gmail.com" },

  { id: 2, name: "Alice", email: "alice@gmail.com" },

  { id: 3, name: "Bob", email: "john@gmail.com" },

  { id: 4, name: "David", email: "david@gmail.com" },

  { id: 5, name: "Mike", email: "alice@gmail.com" }

];

a. return output
b. return duplicate email alone
c. don't use inbuilt methods
 
output
[

  { id: 1, name: "John", email: "john@gmail.com" },

  { id: 3, name: "Bob", email: "john@gmail.com" },

  { id: 2, name: "Alice", email: "alice@gmail.com" },

  { id: 5, name: "Mike", email: "alice@gmail.com" }

]


Answers

---

3. solution 

```js
const resultObj = {};

users.forEach(objData=>{
    const {age} = objData;
    console.log("age",age)
    if(Object.keys(resultObj).includes(age.toString())){
        resultObj[age].push(objData);
    }else{
        resultObj[age] = [objData];
    }
})

console.log("resultObj",resultObj)
```

---

4. solution

```js
let salary = 0;
let result = null;

// employees.forEach(data=>{
//     if(data.salary>salary){
//         salary = data.salary;
//         result = data;
//     }
// })

for(let i =0; i < employees.length; i++){
    const data = employees[i];
    if(data.salary>salary){
        salary = data.salary;
        result = data;
    }
}

console.log(result)
```

---

5. solution

```js
const duplicateObj = [];

const checkDuplicate = (startIndex, endIndex, userObj) => {
    for(let m = startIndex; m<endIndex;m++){
        if(users[m].email === userObj.email){
            isDuplicate = true;
            duplicateObj.push(userObj)
        }
    }
}


for(let i =0; i<users.length;i++){
    const userObj = users[i];


    // console.log(i)
    // const compareList1 = users.slice(0,i).map(data=>data.email);
    // // console.log(compareList1);
    // const compareList2 = users.slice(i+1,users.length).map(data=>data.email)
    // // console.log(compareList2);

    // const otherEntries = [...compareList1, ...compareList2];

    // if(otherEntries.includes(userObj.email)){
    //     duplicateObj.push(userObj)
    // }
    let isDuplicate = false;
    for(let k =0; k<i;k++){
        if(users[k].email === userObj.email){
            isDuplicate = true;
            duplicateObj.push(userObj)
        }
    }

    if(!isDuplicate){
        for(let j = i +1; j<users.length;j++){
           if(users[j].email === userObj.email){
            isDuplicate = true;
            duplicateObj.push(userObj)
        } 
        }
    }

}
 
console.log('result', duplicateObj)
```

