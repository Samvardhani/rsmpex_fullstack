var express =require('express')
var path = require('path')
app=express()
const PORT =9001;
app.get('/',(req,res)=>{
    res.json('Optimus Prime : Attention Autobots, Transform and Roll Out')
})
app.get('/json',(req,res)=>{
    res.json({name:'Optimus Prime',quote:'Finding peace in everything'})
})
app.get('/static', (req, res) => {
    res.sendFile('C:/Users/samva/Downloads/Fullstack_recap/kecbackend/index.html');
});

app.get('/html2', (req, res) => {
    res.sendFile('C:/Users/samva/Downloads/Fullstack_recap/kecbackend/index2.html');
});

app.listen(PORT,()=>{
    console.log('Backend Server Started')
})