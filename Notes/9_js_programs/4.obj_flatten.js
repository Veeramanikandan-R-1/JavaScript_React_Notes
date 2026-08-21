const obj1 = {
  user: {
    name: "John",
    address: {
      city: "Chennai",
      code:{pincode:6344}
    }
  }
};

/*
// output
res {
  'user.name': 'John',
  'user.address.city': 'Chennai',
  'user.address.code.pincode': 6344
}
*/

const res = {};

const flattenObj = (obj,parent)=> {
    Object.keys(obj).forEach(key=>{
        if(typeof obj[key] === 'object'){
            flattenObj(obj[key],`${parent ? `${parent}.` : ""}${key}`);
        }else{
            res[`${parent}.${key}`] = obj[key];
        }
    })
}

flattenObj(obj1);
console.log('res',res)