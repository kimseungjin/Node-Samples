var http = require('http');
var fs = require('fs');
var path = 'movie/movie.mp4'

http.createServer(function(req, res) {
   res.setHeader('content-type','video/mp4');
   fs.createReadStream(path).pipe(res);
   
}).listen(3000);
