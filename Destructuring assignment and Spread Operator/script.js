let arr = [3,9]
let [a, b] = arr
console.log(a, b);

let arr1 = [1,2,3]
let [c,d,e] = arr1
console.log(c,d,e);

let arr2 = [1,2,3,4,5,6,7,8]
let [f,g,h,i, ...rest] = arr2
console.log(f,g,h,i, rest);

let arr3 = [4,5,7,8,6,3,4,8]
let [o , , ...restone] = arr3
console.log(o, restone);

let {s, z} = {s:1, z:4}
console.log(s,z);

// spread operator
  let arra = [4,6,8]
  let obj1 = { ...arra }
  console.log(obj1);

  function sum(s1,s2,s3){
    return s1 + s2 + s3
  }
  console.log(sum(...arra));

  let obj2 = {
    name1: "Anushka",
    Phone : "12357289",
    address: "ABC"
  }
  console.log({ ...obj2, name1:"Anu"});