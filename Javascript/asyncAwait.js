async function funName() {
    setTimeout(()=>{
       console.log('KEC')
    },5000)
    console.log(await 'KEC')
}


arrowFunName = async() =>{
    setTimeout(()=>{
        console.log('HELLO')
    },1000)
    //to print without promise
    console.log(await 'HELLO')
    
}
funName()
arrowFunName()


//my example
async function sample() {
    setTimeout(()=>{
        console.log('SAMPLE EXAMPLE')
    },9)
    return 'SAMPLE EXAMPLE'
}
console.log(sample())


fun().then((a)=>{
    console.log(a)
})
fun('kec')

