const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');


// Renders
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'nahuEl'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});


// Listen
app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${ port }`);

});