// Write a program that checks if a given number is even or odd.
function checknum(num) {
    if (num % 2 === 0)
     {
        return "even";
    } 
    else 
    {
        return "odd";
    }
}
console.log(checknum(5)); 


// Create a function that takes two numbers as parameters and returns the larger one.
function larger(A, B) {
    if (A > B) 
    {
        return A;
    } else 
    {
        return B;
    }
}
console.log(larger(5, 10)); 

// Write a function that determines if a given year is a leap year
function leapyear(Y){
    if((Y%4==0 && Y!=100) || Y===400)
    {
        return "leap";
    }
    else
    {
        return "not";
    }
    
}
console.log(leapyear(2018));


// Implement a program that checks whether a given character is a vowel or consonant.
function myFunction(str) {
    if(str =='a' || str == 'e' || str =='i' || str == 'o' || str =='u')
    {
        console.log("this is voule")
    }
    else {
        console.log("this is not")
    }
}
myFunction('a')

    




// Create a function that takes three numbers as input and returns the largest among them.
function findlargest(N1, N2, N3) {
    if (N1 >= N2 && N1 >= N3) 
    {
        return N1;
    } else if (N2 >= N1 && N2>= N3)
     {
        return N2;
    } else 
    {
        return N3;
    }
}
console.log(findlargest(3,6,7));

// Write a program that checks if a given number is positive, negative, or zero.
function checknum(N){
    if(N>0)
    {
        return "positive";
    }
    else if(N<0)
    {
        return "Negative";
    }
    else
    {
        return "zero";
    }
}
console.log(checknum(0));


// Implement a function that calculates the grade of a student based on their score.
function calculatgrade(score){
    if(score>=85)
    {
        return "A";
    }
    else if(score>=70 && score<85)
    {
        return "B";
    }
    else{
        return "C"
    }
}
console.log(calculatgrade(62)); 

// Create a program that determines if a given string is a palindrome.
function palindrome(N) {
    const str = N.toString();
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) 
    {
      reversed += str[i];
    }
  
    if (str === reversed) 
    {
      return "palindrome";
    }
    else
     {
      return "not palindrome";
    }
  }
  
  console.log(palindrome('sakshi'));
  
// Write a function that checks whether a person is eligible to vote based on their age.
function checkage(age){
    if(age>=18)
    {
        return "eligible";
    }
    else{
        return "not eligible";
    }
    
}
console.log(checkage(65));

//  Implement a program that determines the type of a triangle based on the lengths of its sides.

function checktraigle(A,B,D) {
    if(A===B && A===D &&  B===D)
    {
         return "right angle traingle";
    }
    else if(A<90 && B<90 && D<90 )
    {
          return "acute";

    }
    else if(A>90 && B>90 && D>90)
    {
        return "abtuse";
    }
    
}
console.log(checktraigle(90,90,90));















