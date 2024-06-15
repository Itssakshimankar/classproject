// Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.
// Write a recursive function that takes a number as an input and returns the factorial of that number.
// Write a recursive function that takes a number ‘n’ and returns the nth number of the Fibonacci number.
// Write a recursive function that takes a list of numbers as an input and returns the product of all the numbers in the list.
// Write a function that takes a string and returns if the string is a palindrome.
// Write a recursive function that takes a string and reverse the string.
// Write a recursive function that takes an array of words and returns an array that contains all the words capitalized.
// 	input array :    ['foo', 'bar', 'world', 'hello']
//         output array : ['FOO', 'BAR', 'WORLD', 'HELLO']
// Write a recursive function to find sum of range a-b numbers.
// 	example - [5,8]
// 	sum = 26

// 1 function sumofnum(num)
// {
// 	if(num<0){
// 		return 0;
// 	}
// 	return num+sumofnum(num-1)

// }
// console.log(sumofnum(10));



// 2 function findfactorial(num){
// 	if(num==1 ||num==0)
// 	{
// 		return 1;
// 	}
// 	return num * findfactorial(num-1);

// }
// console.log(findfactorial(5));


// function findfibonacci(num) {
// 	if (num === 0) 
// 	{
// 	    return 0;
// 	} 
// 	else if
// 	 (num === 1)
// 	  {
// 	    return 1;
// 	}
// 	    return findfibonacci(num-1) + findfibonacci(num-2);

//  }
 
//  console.log(findfibonacci(15)); 
 

// function findproduct(arr, i = 0) {
// 	if (i >= arr.length) {
// 	    return 1; 
// 	}
// 	return arr[i] * findproduct(arr, i + 1); 
//  }
 
//  console.log(findproduct([1, 2, 3, 4])); 
 


// function checkPalindrome(str,i=0 ,j=str.length-1){
// if (i > j) {
//      return true;
// }
// if (str[0] !== str[j]) {
// 	return false; 
//  }


//  return checkPalindrome(str, i+1, j-1);

// }
// console.log(checkPalindrome("naman")); 


// function reverse(str, i = str.length - 1) {
// 	if (i <= 0) {
// 	    return str[i];
// 	}
// 	return str[i] + reverse(str, i-1);
//  }
 
//  console.log(reverse("sakshi")); 


// function capital(arr, i=0){
// 	if(i>arr.lenght){
// 		return 0;
// 	}
// 	return arr[i]+capital(arr,arr[i].toUpperCase());
// } 
// let arr=["saku","niku","abh" ];
// console.log(capital(arr));


// function rangesum(num1,num2){
// 	if(num1>num2){
// 		return 0;
// 	}
// 	return num1+rangesum(num1+1 ,num2)
	
// }
// console.log(rangesum(5,8))

function sayhi(){
	console.log("HI");
}
const saybye=()=>"Bye";
const result =sayhi(saybye);
console.log(result);
 