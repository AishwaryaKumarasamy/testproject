var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
 
  if (req.url.startsWith('/oddEven')) {
    var q = url.parse(req.url, true).query;
    var num = parseFloat(q.num); 

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (num % 2 === 0) {
      res.write(`<h2>The number ${num} is even.</h2>`);
    } else {
      res.write(`<h2>The number ${num} is odd.</h2>`);
    }

    res.end();
  } else {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/oddEven" method="get">');
    res.write('Enter a number: <input type="text" name="num"><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000);

console.log("Server started on http://localhost:3000");
