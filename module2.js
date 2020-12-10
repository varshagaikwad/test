//recurssive addition
//in case of recurssive function we cannot directly stores it into export 
//first we have to declare it as a normal function and then have to add it into the exports

function add(n)
{
	if(n==1)
		return 1;
	return n+add(n-1);
}
exports.add=add;


//checking the numbers are prime or not
exports.prime=function(n)
{
	for(var i=0; i<n/2; i++)
	{
		if(n%i==0)
			return false;
	}
	return true;
}