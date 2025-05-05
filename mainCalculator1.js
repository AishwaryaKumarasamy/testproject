var http = require('http');
var url = require('url');
let l=require('./calculator.js');

http.createServer(function (req, res) {
  if (req.url.startsWith('/sum')) {
    
    var q = url.parse(req.url, true).query;
    var num1 = parseFloat(q.num1);
    var num2 = parseFloat(q.num2)
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h2>Addtion value : ${l.add(num1,num2)}</h2>`);
    res.write(`<h2>Subtration value : ${l.sub(num1,num2)}</h2>`);
    res.write(`<h2>Multiplication value : ${l.mul(num1,num2)}</h2>`);
    res.write(`<h2>division value : ${l.div(num1,num2)}</h2>`);
    
    res.end();
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="sum" method="get">');
    res.write('Enter a number: <input type="text" name="num1"><br>');
    res.write('Enter a number: <input type="text" name="num2"><br>');
    res.write('<input type="submit" value="Calculate">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000);

console.log("\nServer started on http://localhost:3000");
