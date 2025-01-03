//odd or even without using modulus
a=4
if(a&1)
{
    console.log(a," is odd");
}
else{
    console.log(a," is even")
}

//function without argument and with return type
ar1=()=>{
    a=10
    return a+1
}
console.log(ar1())

//function without argument and without return type
ar2=()=>{
    b=11
    console.log(b)
}
ar2()

//function with argument and return type
ar3=(j)=>{
    sum=0
    for(var i=0;i<j;i++)
    {
        sum+=i
    }
    return sum
}
console.log(ar3(5))

//function with argument and without return type
ar4=(k)=>{
    sum=0
    for(var i=0;i<k;i++)
    {
        sum+=i
    }
    console.log(sum)
}
ar4(5)

//spread operator
n1=['safrin','jaan','sah']
n2=['inayah']
combined=[...n1,...n2]
console.log(combined)

//rest operator
function rest(...a1){
    console.log(a1)
}
rest('safrin','jaan','sah','inayah')

//callback function
collectdata("Data verified successfully,you can login",dataVerified)

function dataVerified(){
    console.log("Data Stored Successfully")
}

function collectdata(dbMsg,dvf){
    setTimeout(()=>{
        dvf()
        console.log(dbMsg)
    },4000)
}
