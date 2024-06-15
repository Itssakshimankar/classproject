// ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM

function visitatm(processing){
	console.log("Entetering the atm");
	console.log("Insert Card");
	Processing(enterpin)
	
	
 }
 visitatm()

 function Processing( enterthepin){
	setTimeout(()=>{
		console.log("processing");
		enterpin(Windrwmoney)

	},5000)

 }

 function enterpin(Windrrwmoney){
	setTimeout(()=>{
		console.log("Enter  the pin");
		Windrwmoney(collectcash)
		
		
	},2000)
 }

 function Windrwmoney(collectedcash){
	setTimeout(() => {
		console.log("Widraw money")
		collectcash(leaveatm)
		
	}, 5000);
 }

 function collectcash(leave){
	setTimeout(() => {
		console.log("cash collected");
		leaveatm()
	},1000)

 }

 function leaveatm(){
	setTimeout(() =>{
		console.log("Leave atm");
	})
 }


 function visitatm() {
	console.log("Entetering the atm");
	console.log("Insert Card");
	 Processing(() =>{
	     enterpin(()=>{
			Windrwmoney(()=>{
				collectcash(()=>{
					leaveatm(()=>{
						
					})

				})
			})
		})
	})

	
 }