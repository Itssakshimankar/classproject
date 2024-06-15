

// function show(){
// 	var a=20;
// 	console.log(a)
// 	 return function show2()
// 	{    
// 	let a=2
// 	console.log(a);
// }
// }
// let result=show()
// console.log(result())


// function add(a)
// {
// 	return add1
// }
// function add1()
// {
// 	console.log(a)
// }
// add1(5)


// var count=1;
// function counter(){
// 	let usernam="sakshi9"
// 	return function (){
// 		l
// 	}
// }
// let result=counter();
// result()
// result()



function  naming(){
	let name="sakshi";
	let count=0;

	return function (){
		count++;
		
		if(count==3)
		{

		  return name;
		}
		return false;
	}

}
let result=naming("sakshi");
console.log(result())
console.log(result())
console.log(result())


function                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       