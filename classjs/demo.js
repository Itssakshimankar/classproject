// Given length and breadth of a rectangle, return the area of the rectangle.
const calculateArea = (breadth, length) => breadth * length;

let result = calculateArea(10, 57);
console.log("the area is",result);


// Take two numbers and only print the integer part when a is divided by bc
const division = (a, b) => Math.floor(a / b);
let answer = division(10, 3);
console.log( "the division is" ,answer);

// Take a number and print out the last digit of the number.
const lastDigit = (N) => N % 10;
let digit = lastDigit(32);
console.log("The last digit is =", digit);

// Take a number and find the cube of that number.
const findcube=(C) => C*C*C;
let cube=findcube(5);
console.log("the cube of 5 is",cube);

// Take a 3 digit number and print the reverse of that number. Ex - 235 = 532
function reverse(N) {
  const str = N;
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) 
  {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse('092'));




// Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7
const sumOfNumber = (a) => {
  let lastDigit = a % 10;
  while (a >= 10) {
      a = Math.floor(a / 10);
  }
  let firstDigit = a;
  return firstDigit + lastDigit;
};
console.log("the sum is",sumOfNumber(123)); 





// Take salary of five employees and print the average salary of all the employe


const calculateAverageSalary = (salaries) => {
  let sum = 0;
  for (const  S of salaries) {
      sum += S;
  }
  return sum / salaries.length;
};

const averageSalary = calculateAverageSalary([1000, 30000, 39000, 40000, 50000]);
console.log("Average salary:", averageSalary);


// Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;
const swapnum = (a, b) => [b, a];
console.log(swapnum(10,2))
// console.log( a); 
// console.log( b); 


let user={
  name:"Sakshi",
  Lastname:"Mankar",
  full()
  {
      console.log(user.name + " " + user.Lastname)
  } 
  
}
user.full()


