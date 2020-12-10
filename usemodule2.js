var m = require("./module2")
console.log("addition is "+m.add(10));

var status=m.prime(11);
if(status){
	console.log("number is prime");
}
else{
	console.log("number is not prime");
}
