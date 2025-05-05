var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
 
  if (req.url.startsWith('/factorial')) {
    var q = url.parse(req.url, true).query;
    var num = parseFloat(q.num); 

    res.writeHead(200, { 'Content-Type': 'text/html' });

    function index(num) {
        if (num === 0) {
            return 1;
        } else {
            return num * index(num - 1);
        }
    }
   
     
    res.write(`<h2>The number ${num} factorial value : ${index(num)} </h2>`);
    

    res.end();
  } else {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/factorial" method="get">');
    res.write('Enter a number: <input type="text" name="num"><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000);

console.log("Server started on http://localhost:3000");
