1. Difference between Promise.all vs Promise.allSettled
2. Shallow copy vs Deep copy
3. What is debounce and write code to implement debounce
4.const employees = [   { name: "John", salary: 50000 },   { name: "Alice", salary: 75000 },   { name: "Bob", salary: 60000 },
   { name: "David", salary: 90000 } ];
find the employee with the highest salary.
Expected Output: { name: "David", salary: 90000 }
5. const users = [ { name: "John", age: 25 },   { name: "Alice", age: 30 },   { name: "Bob", age: 25 },   { name: "Mike", age: 30 } ];
Expected output:
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



Answers:
1.
const Promise1 = new Promise((resolve,reject)=>setTimeout(()=>{resolve('done')},2000));
const Promise2 = new Promise((resolve,reject)=>setTimeout(()=>{reject('error')},2000));


const resolver = async() => {
    try{
    // const [res1, res2] = await Promise.all([Promise1, Promise2]);
    // console.log(res1)   
    // console.log(res2)

    const [res1, res2] = await Promise.allSettled([Promise1, Promise2]);
    console.log(res1)   
    console.log(res2)
    }catch(err){
        console.log(err)
    }
}
resolver()


2. 
const obj1 = {
    name: "mani",
    city:{
        pinCode: 624619
    }
}

// const obj2 = {...obj1};

// obj1.city.pinCode = 600119;

// console.log(obj1);
// console.log(obj2);

const obj3 = structuredClone(obj1);

obj1.city.pinCode = 600119;


console.log(obj1);
console.log(obj3);

3. 
using react

import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [searchStr, setSearchStr] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const handleChange = (e) => {
    console.log('fire');
    setSearchStr(e.target.value);
  };

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedSearch(searchStr);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchStr]);

  useEffect(() => {
    console.log('api call');
  }, [debouncedSearch]);
  return (
    <div>
      <input name="search" onChange={handleChange} />
    </div>
  );
}

using js

const debounce = (fn, delay) => {
    let timerId;
    return function(...args){
        clearTimeout(timerId);

        timerId = setTimeout(()=>{
            fn(...args);
        }, delay)
    }
}

4. 
const users = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Mike", age: 30 }
];

const result = new Map();

users.forEach(objData => {
  const { age } = objData;

  if (result.has(age)) {
    result.get(age).push(objData);
  } else {
    result.set(age, [objData]);
  }
});

console.log(result);