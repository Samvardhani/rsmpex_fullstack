array=[10,20,30,40,50.6,"a","KEC",true]
console.log(array);

//for...in loop
for(var a in array){
    console.log("Element present in index",a,"is",array[a])
}

//for...of loop
for (var a of array) {
    console.log("The value of array is:",a)
}

//for..each loop
//example 1
array.forEach((a,index) => {
   console.log("The element is ",a,"and its index is",index) 
})

    array.forEach((index,a) => {
      console.log("The element is ",a,"and its index is",index) 
    })
//exmaple 2
obj={
    "firstName": "Safrin",
    "lastName":"bargana",
    "age": 20
}

obj.forEach((value)=>{
    console.log(value)
})
