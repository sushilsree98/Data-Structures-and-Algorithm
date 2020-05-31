/* Some of the unsual tricks or shorthands in javascript */

// to copy an array
let array_1 = [1,2,4,6,7];
let array_2 = [...array_1];
console.log(array_2);

//to deep copy an object
let obj1 = {name:"John Doe", age:"21"};
let obj2 = JSON.stringify(obj1);
console.log(JSON.parse(obj2));

//bang bang
function isFoo(flag){
  if(flag) return "FOO";
  return;
}

function exec(){
  if(true) return !!isFoo(true);
}

console.log(exec())

//to remove duplicates from an array
let array = [1,2,2,4,4,4,6,7,8];
console.log([...new Set(array)]);

//set a value if not present or increment the value if present
let obj = {a:1}
obj.b = ++obj.b || 1;
obj.a =  ++obj.a || 1;
console.log(obj);

//double bitwise not
let a = Math.floor(3.6) == 3;//true
let b = ~~(3.6) == 3;//true
console.log(a,b);

//finding if element is present or not (Bitwise indexOf shorthand)
let ar = [2,3,4,6,7,9];

if(ar.indexOf(3) > -1){
  console.log("found")
}
if(~ar.indexOf(3)){
  console.log("found")
}
if(!~ar.indexOf(0)){
  console.log("not found")
}

//short circuiting
function sum(a,b){
  return a+b;
}
//normal if statement
 if(true){
    console.log(sum(2,4));
 }
//using short circuit
 let condition_check = true;
 let result = condition_check && sum(2,4);
 console.log(result);
