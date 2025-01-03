
function isTimeConsumption(t){
    time=999
    return time <= t;
}
function isValidLocation(loc){    
    location = "ooty"
    return loc == location
}

function locationFinder(){
    loc='ooty'
    time=1000
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isValidLocation(loc) && isTimeConsumption(time)){
                locFound("Location found successfully")
                
            }
            else{
                locNotFound("Location not found")
            }
        },time)
    })
}

locationFinder().then((locFound)=>{
    console.log(locFound)
}).catch((locNotFound)=>{
    console.log(locNotFound)
})