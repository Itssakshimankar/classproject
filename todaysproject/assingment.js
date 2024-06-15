// Class Questions - 
// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]
	
// 	input - ["java","python","c"]
// 	output - [false, false, false]

// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true

// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, thing
// 	output - true

// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i

// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success


function capitalize(sentence) {
	let a = sentence.split(' ');
	for (let i = 0; i < a.length; i++) {
	    a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
	}
	return a.join(' ');
 }
 
 const result = "this is javascript";
 const capital = capitalize(result);
 console.log(capital); 

 
 

 function findJavaScript(arr) {
	return arr.map(a => a === "javascript");
 }
 const brr = ["javascript","react","node"];
 const r = findJavaScript(brr);
 console.log(r); 



 function correctEmail(email) {
	return email.endsWith(".org");
 }
 console.log(correctEmail("sakhi@.org")); 




 function findanagram(word1,word2){
	let a=word1.split("").sort().join("");
	let b=word2.split("").sort().join("")
	return a===b;
	

 }
 console.log(findanagram("night","thing"));
 


  function recvercesentece(sentence){
	return a=sentence.split("").reverse().join("")

 }
 console.log(recvercesentece("i am learning javascript"));

 


 function reverseword(str){
	return a=sentence.split(" ").reverse().join(" ")

 }
 console.log(recvercesentece("i am learning javascript"));

 
 
 