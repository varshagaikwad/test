var http = require("http");
var url = require("url");
var qstring= require("querystring");
var m = require("./que2_mymodule");
var fs = require("fs");

function process_request(req, resp)
{
	const p = url.parse(req.url);
	console.log(req.url);
	switch(p.pathname)
	{
		case("/"):
			fs.readFile("que2_form.html", function(err, data){
				if(err){
					resp.end("Error");
					console.log("Error");
				}else{
					resp.end(data);
				}
			});
			break;
		case ("/process"):
			var d= qstring.parse(p.query);
			if(d.num1<5)
			{
				var ans=m.factorial(d.num);
				resp.end("factorial :: "+ ans);
			}
	}
}
var srv = http.createServer(process_request);
srv.listen(8181);
console.log("Server is started at port no 8181 ");
