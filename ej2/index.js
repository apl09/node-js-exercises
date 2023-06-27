let http = require("http");
const Logger = require('logplease');
const logger = Logger.create('utils');

http.createServer((req, res) =>{

res.writeHead(200, { "Content-Type": "text/html" });

res.end("Aprendiendo en The Bridge!");

})

.listen(8080);

logger.debug(`Hola mundo de node`);
logger.log(`This is a log message`); 
logger.info(`Noticias de última hora, Node.js me encanta!! `);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!`);