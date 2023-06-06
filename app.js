require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const puerto = process.env.PORT;   //8080;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public'));
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Luis Leiva',
        titulo: 'Curso de Node'
    });
  //res.send('Hola Mundo');
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Luis Leiva',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Luis Leiva',
        titulo: 'Curso de Node'
    });
});






/*
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});
*/


/*
app.get('/hola-mundo', (req, res) =>  {
  res.send('Hola mundo en ruta');
});
*/

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
//  res.send('404 | Page not found');
});

app.listen(puerto, () => {
    console.log(`Example app listening on port ${puerto}`)
});

// app.listen(puerto);
