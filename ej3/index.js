const numeros = require("./numeros")

let http = require("http");

http.createServer((req, res) =>{

res.writeHead(200, { "Content-Type": "text/html" });

res.end("Aprendiendo en The Bridge!");

})

.listen(8080);

const Logger = require('logplease');
const logger = Logger.create('utils');

if(numeros.isEven(2) == true){
    logger.info("el numero es par")
} else logger.error('el numero no es par');