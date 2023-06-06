
const http = require('http');

const puerto = 8080;

http.createServer((request, response) => {



    response.write('Hola Mundo'); 
    response.end();


    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // response.writeHead(200, {'Content-Type': 'application/csv'});
    // response.write('id, nombre\n'); 
    // response.write('1, Luis\n'); 
    // response.write('2, Felipe\n'); 
    // response.write('3, Rocío\n'); 
    // response.write('4, Arturo\n'); 
    
    // response.writeHead(200, {'Content-Type': 'application/json'});
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    // persona = {id:1, nombre: 'Luis'};
    // response.write(JSON.stringify(persona));
    // response.end();


/*
    console.log(request);

    response.writeHead(404);
    response.write('404 | Pagina no encontrada');

    response.write('Yox');
    response.end();
*/

})
.listen(puerto)
;

console.log('Escuchando en el puerto', puerto);

