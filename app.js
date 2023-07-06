const express = require("express");
const path=require("path");
const app = express();
const port = 80;
// Express specific stuff
app.use(express.static('static'))
app.use('/static', express.static('static'))  
app.use(express.urlencoded())     // to store form data

// Pug specific stuff
app.set('view engine', 'pug')    // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views directory.

app.get("/", (req, res)=>{ 
    res.status(200).render('home.pug')
});
app.get("/about", (req, res)=>{ 
    const params={}
    res.status(200).render('about.pug',params)
});
app.get("/classess", (req, res)=>{ 
    res.status(200).render('classess.pug')
});
app.get("/services", (req, res)=>{ 
    const params={}
    res.status(200).render('services.pug',params)
});
app.get("/contact", (req, res)=>{ 
    const params={}
    res.status(200).render('contact.pug',params)
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});