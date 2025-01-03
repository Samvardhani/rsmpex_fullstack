var express = require('express');
var path = require('path');
var mdb = require('mongoose');
var admin = require('./models/admin'); 
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

app.post('/signupadmin', (req, res) => {
    console.log(req.body); 

    var { firstname, lastname, email } = req.body;
    console.log(firstname, lastname, email);

    try {
        var newadmin = new admin({
            firstname: firstname,
            lastname: lastname,
            email: email
        });

        newadmin.save()
            .then(() => {
                console.log("admin added successfully");
                res.status(200).send("admin added successfully");
            })
            .catch(err => {
                console.log("Error saving admin:", err);
                res.status(500).send("Error saving admin");
            });
    } catch (err) {
        console.log("Error", err);
        res.status(500).send("Error processing request");
    }
});


app.listen(PORT, () => {
    console.log('Backend Server Started');
});
