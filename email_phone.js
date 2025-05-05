var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  if (req.url.startsWith('/login')) {
    
    var q = url.parse(req.url, true).query;
    var value1 = q.email
    var value2 = q.phoneNo

    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    if (value1.includes("@") && value1.includes(".") && value2.length == 10)
        {
     res.write(`<h2 style="color:blue">Welcome to the homepage</h2>`);
    } else {
      res.write(`<h2 style="color:red">Invalid EmailId or Phone no </h2>`);
    }
    res.end();
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="login" method="get">');
    res.write('Email Id: <input type="text" name="email"><br>');
    res.write('Phone no: <input type="text" name="phoneNo"><br>');
    res.write('<input type="submit" value="Login">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000);

console.log("\nServer started on http://localhost:3000");
