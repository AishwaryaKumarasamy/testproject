var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  if (req.url.startsWith('/login')) {
    
    var q = url.parse(req.url, true).query;
    var value1 = q.username
    var value2 = q.passwd

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (value1 == "admin" && value2 == "admin") {
     res.write(`<h2 style="color:blue">Welcome admin!</h2>`);
    } else {
      res.write(`<h2 style="color:red">Invalid Inputs</h2>`);
    }
    res.end();
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="login" method="get">');
    res.write('Username: <input type="text" name="username"><br>');
    res.write('Password: <input type="password" name="passwd"><br>');
    res.write('<input type="submit" value="Login">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000);

console.log("\nServer started on http://localhost:3000");
