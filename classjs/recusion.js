function factorial(n) {
	let f = 1;
	for (let i=1;i<= n;i++) {
	    f*=i;
	}
	return f;
 }
 
 console.log(factorial(5)); 

 function counter(num){
	if((num<=0) || (num>10))
	{
		return 0;

	}
	console.log(num)

	return counter(num-1)
 }
counter(10)


function power(num,i){
	if(i==0)
	{ 
		return 1;

	}
	return  num*power(num,i-1)
}

console.log(power(3,2));

function sumarray(arr, i=0) {
	if (i >= arr.length)
	{
	    return 0; 
	} 
     return arr[i] + sumarray(arr, i+1); 
	
 }
 const arr=[1,2,3,4];
 console.log(sumarray(arr)); 
 
