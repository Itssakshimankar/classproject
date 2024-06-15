function preparedFood(foodDelivered){
	setTimeout(()=>{
	    console.log("Food is being prepared");
	    console.log("Food is ready");
	    foodDelivered(eatingFood);
	}, 10000);
 
 }
 
 function deliveredFood(){
	setTimeout(()=>{
	    console.log("Food is delivered to your table");
	    eatingFood(payment)
	}, 5000)
 
 }
 
 function eatingFood(){
	setTimeout(()=>{
	    console.log("Eating Food");
	    payment(leaveHotel)
	   
	}, 2000)
 }
 
 function payment(){
	setTimeout(()=>{
	    console.log("Payment");
	    leaveHotel()
	   
	}, 1000)
 }
 function leaveHotel(){
	console.log("Leave the Hotel");
 }
 
 
 function visitingHotel(){
	console.log("Entering the Hotel");
	console.log("Order Food - Biryani ");
	preparedFood(deliveredFood);
	
 }
 
 visitingHotel();