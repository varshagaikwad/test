add=function(a,b){return a+b;}

subtract=function(a,b){	return a-b;}

multiply=function(a,b){	return a*b;}

divide=function(a,b){ return a/b;}

square=function(a){	return a*a;}

sum=function(a,b,c){return a+b+c;}

//additing multiple function into export object as an JSON object

module.exports={
	add:add,
	subtract:subtract,
	multiply:multiply,
	divide:divide,
	square:square,
	sum:sum
}