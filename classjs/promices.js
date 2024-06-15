// let treet = new Promise(function(resolve, reject) {
	
//      if (gift)
// 	 {
// 	    resolve(partyhappen());
// 	} else {
// 	    reject("no party");
// 	}
//  });
 
//  function partyhappen() {
// 	return new Promise((resolve, reject) => {
// 		resolve("party is happening");
		
// 	}) 
//  }
 
//  treet.then((result) => {
// 	console.log(result);
//  }).catch((error) => {
// 	console.log(error);
//  });


 
// // Enter ATM
// // Insert Card

// // Enter Pin - 2 seconds
// // Withdraw Money - 5 seconds
// // Collect Cash - 1 second
// // Leave ATM




// let isParty = function (result) {
// 	return new Promise(function (resolve, reject) {
// 	  // let party = false;
// 	  if (result) {
// 	    resolve("Party is on");
// 	  } else {
// 	    reject("Party is off");
// 	  }
// 	});
//    };
   
//    let isGiftRecieved = function () {
// 	return new Promise(function (resolve, reject) {
// 	  let gift = true;
// 	  if (gift) {
// 	    resolve(true);
// 	  } else {
// 	    reject(false);
// 	  }
// 	});
//    };
   
//    isGiftRecieved()
// 	.then((result) => {
// 	  console.log(result);
// 	  return isParty(result);
// 	})
// 	.then((result) => {
// 	  console.log(result, "result");
// 	})
// 	.catch((error) => {
// 	  if (!error) {
// 	    console.log("No Gift");
// 	  }
// 	  console.log(error, "error");
// 	});


let enteratm = function () {
	return new Promise((resolve, reject) => {
	    let enter = true;
	    if (enter) {
		   resolve("She is entering");
	    } else {
		   reject("She is not entering");
	    }
	});
 };
 
 let cardinserted = function (enter) {
	return new Promise((resolve, reject) => {
	    let card = true;
	    if (card) {
		   resolve("Card is inserted");
	    } else {
		   reject("Card is not inserted");
	    }
	});
 };
 
 let processing = function (inserted) {
	return new Promise((resolve, reject) => {
	    setTimeout(() => {
		   let card = true;
		   if (card) {
			  resolve("Card processing");
		   } else {
			  reject("enter card properly");
		   }
	    }, 5000); 
	});
 };
 
 let enterpin = function (processi) {
	return new Promise((resolve, reject) => {
	    setTimeout(() => {
		   let process = true;
		   if (process) {
			  resolve("Enter a pin");
		   } else {
			  reject("Still processing");
		   }
	    }, 2000); 
	});
 };
 
 let Withdrawmoney = function (pin) {
	return new Promise((resolve, reject) => {
	    setTimeout(() => {
		   let withdraw = true;
		   if (withdraw) {
			  resolve("Money is withdrawn");
		   } else {
			  reject("Money is not withdrawn");
		   }
	    }, 4000); 
	});
 };
 
 let collectcash = function (withdraw) {
	return new Promise((resolve, reject) => {
	    setTimeout(() => {
		   let collect = true;
		   if (collect) {
			  resolve("Cash is collected");
		   } else {
			  reject("Not able to collect");
		   }
	    }, 1000); 
	});
 };
 
 let Leaveatm = function () {
	return new Promise((resolve, reject) => {
	    let leave = true;
	    if (leave) {
		   resolve("She is leaving");
	    }
	});
 };
 

 async function processatm(){

	try{
		console.log("she is entering")
		 value= await cardinserted()
		 console.log(value)
		

	      value= await processing()
		 console.log(value)

	      value= await enterpin()
		 console.log(value)

		 value= await Withdrawmoney()
		 console.log(value)

		 value= await collectcash()
		 console.log(value)

		 value= await Leaveatm()
		 console.log(value)
	
	}
	catch(error){
		console.log("error")
	}

 }
 processatm()
	



