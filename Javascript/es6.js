//1.Variables
//var,let,const -> refer declaration.js

//2.Arrow function
a=10
arrowFunction=(studentsDept) => {
   console.log(studentsDept)
}
arrowFunction(["AIML","CSE","IT"])


arrowFun = (studentsDept) => {
    return studentsDept[0]
}
console.log(arrowFun(['AIML,CSE,IT',"AIML","CSE","IT"]))

//Destructured operator
var m=[90,95,98]
var[m1,m2,m3]=m
console.log(m1,m2,m3)

//ternary operator
var a=19        
out=(a%2==0)?"Even":"Odd"
console.log(out)

//spread operator
arr1=[10,20,30]
arr2=[40, 50,60]
arr3=[...arr1,...arr2]
console.log(arr3)

function restOr(...arr1){
    console.log(arr1)
}
restOr('a','b','c')

//Scope
const pi=3.14
var a=67
console.log("o:",pi)
console.log("o:",a)
{
    var a=10
    let b=10.5
    console.log("b:",a)
    console.log("b:",b)
}
console.log("o",a)
console.log("o",pi)     


//Hoisting
console.log(ar)
const ar = 10;
console.log(ar)

console.log(arr)
let arr = 10;
console.log(arr)

//output undefined,10
console.log(n)
var n = 10;
console.log(n)

