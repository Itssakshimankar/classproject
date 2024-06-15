// Copying object properties

// const person = {
//     name: "Alka",
//     age: 20,
//     addrees:{
//         present:{
//             city:"Pune",
//         },
//         permanent:{
//             city:"Kanpur"
//         }
//     }
// };

// const person2 = {};
// for(let key in person){
//     person2[key] = person[key];
// }
// person.name = "Vaishnavi";
// person.age = 30;
// // person.addrees = "Delhi"
// person.addrees.present.city = "Mumbai";
// console.log(person);
// console.log(person2);


// let person = {
//   name: "akash",
//   age: 5,
  
// };

// let copy = { ...person };

// copy["age"] = 20;

// console.log(person);
// console.log(copy);

// let , const - refrence error
// var - undefined

// let x = 10;
// y = 5;

// let result = add(x,y);
// console.log(result);

//  function add(){
//    console.log(x+y);
//  }


// let x = 10;
// let y = x;
// y= 20;

// console.log(x);
// console.log(y);


// var obj = {
//   name: "Mahi",
//   age: 42,
// };

// var obj2 = obj;
// obj2.name = "Virat";
// obj2.address = "Ranchi";
// console.log(obj);
// console.log(obj2);

// let obj = {
//   name: "Mahi",
//   age: 42,
//   address: {
//     city: "Ranchi",
//     country: "INDIA"
//   }
// };

// let obj2= {};
// // Object.assign(target, source)
// Object.assign(obj2, obj);

// obj2.name = "Virat";
// obj2.age= 32;
// obj2.address.city = "Delhi";

// console.log(obj);
// console.log(obj2);

// spread operator ...
// let obj2 = {...obj};
// obj2.address = "Ranchi";
// console.log(obj);
// console.log(obj2);


// let arr = [1,2,3];
// let arr2 = arr;
// arr2.push("Hello");

// console.log(arr); //[1,2,3]
// console.log(arr2); //[1,2,3,"Hello"]



// pre - value
// non- premetive - reference


// Rest Operator

// function addToCart(item, ...items){
//   console.log(item, items);
// }
// addToCart("apple","mango","banana","grapes","orange","kiwi","45");


// Shallow Copy  - 1 level Copy , Object.assign, Spread Operator

// const renuka = {
//     age:20,
//     nick:"renu",
//     address:{
//       campus:"amrawati",
//       cash:{
//         inHand:1000,
//         inBank:20000
//       }
//     },
//     sayHii(){
//       console.log("Hii, I am Renuka");
//     }
//   }
  
  // const raj = Object.assign({},renuka);
  
  // const raj = {...renuka};
  
  // raj.nick = "prince";
  // raj.age = 15;
  // raj.address.campus = "dharmshala";
  // raj.address.cash.inHand = 5000;
  
//   console.log(renuka);
//   console.log(raj);
  
  // deep copy
  
  const renuka = {
     age:20,
     nick:"renu",
     address:{
       campus:"amrawati",
       cash:{
         inHand:1000,
         inBank:20000,
         items:{
           pen:2,
           book:3,
           laptop:1
         }
       }
     },
     sayHii(){
       console.log("Hii, I am Renuka");
     }
   }
  
   const raj = JSON.stringify(renuka);
   const raj2 = JSON.parse(raj);
   console.log(raj);
   console.log(raj2);
  
   raj2.nick = "prince";
   raj2.age = 15;
   raj2.address.campus = "dharmshala";
   raj2.address.cash.inHand = 5000;
   raj2.address.cash.items.pen = 50;
  
   console.log(renuka)
   console.log(raj2);
  
  // 2023
  // structuredClone()
  // LODASH - DEEP CLONE
  