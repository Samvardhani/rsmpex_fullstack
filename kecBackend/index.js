var express = require('express');
var path = require('path');
var mdb = require('mongoose');
var user = require('./models/user'); 
app = express();
const PORT = 9001;

app.use(express.json());

mdb.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongodb Connection Successful");
    })
    .catch(() => {
        console.log("Check your connection string");
    });

app.get('/', (req, res) => {
    res.json('Optimus Prime : Attention Autobots, Transform and Roll Out');
});

app.get('/json', (req, res) => {
    res.json({ name: 'Optimus Prime', quote: 'Finding peace in everything' });
});

app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/html2', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

app.post('/signup', (req, res) => {
    console.log(req.body); 

    var { firstname, lastname, email } = req.body;
    console.log(firstname, lastname, email);

    try {
        var newUser = new user({
            firstname: firstname,
            lastname: lastname,
            email: email
        });

        newUser.save()
            .then(() => {
                console.log("User added successfully");
                res.status(200).send("User added successfully");
            })
            .catch(err => {
                console.log("Error saving user:", err);
                res.status(500).send("Error saving user");
            });
    } catch (err) {
        console.log("Error", err);
        res.status(500).send("Error processing request");
    }
});
app.get('/getsignup',async(req,res)=>{
    try{
       var allSignUpRecords = await user.find()
       res.json(allSignUpRecords);
       console.log("All data are fetched")
    }
    catch(err){
        console.log("Cant able to read the records.")
    }
})

app.listen(PORT, () => {
    console.log('Backend Server Started');
});
