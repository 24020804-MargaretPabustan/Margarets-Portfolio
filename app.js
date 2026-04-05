const express = require('express');
const mysql = require('mysql2');
const app = express();
const path = require('path');


// Set up view engine
app.set('view engine', 'ejs');

//This is a middleware that: enables form processing: Lets your express app read form data that was submitted using POST, because without it, the server would not understand the values that are sent//
app.use(express.urlencoded({
    extended: false
}));



app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// Redirect root to homepage
app.get('/', (req, res) => {
    res.redirect('/home');
});

//Homepage = Contains information about myself, and who I am as a student
app.get('/home', (req,res) => {
        //Render HTML page with data//
        res.render('home'); //If there are no errors, generate a HTML page containing the list of products. {products:results} passes the product list from the database into that page//

    });



//Certifications = Define route to display all certificates//
app.get('/certs', (req,res) => {
    res.render('certs'); 

});




//Define a route to display achievements: E.g. Academic Awards and Competitions//
app.get('/achievements', (req, res) => {
    res.render('achievements'); //This route displays a page with information about achievements//

});

//Define a route to display Leadership Roles and Experiences//
app.get('/leadership', (req, res) => {
    res.render('leadership');
});


//Define a route to display Community Service Experiences//
app.get('/community', (req, res) => {
    res.render('community');
});

//Define a route to display IT Projects//
app.get('/projects', (req, res) => {
    res.render('projects');
});

//Define ports to listen to, and start the server//
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on URL address : http://localhost:${PORT}/`));


