const snakeGame = {
	value: 0,
	ladder() {
	    this.value += 10;
	    console.log( this.value);
	},
	dice() {
	    let d = Math.floor(Math.random() * 6) + 1;
	    this.value += d;
	    console.log(this.value);
	},
	snake() {
	    this.value = 0;
	    console.log( this.value);
	}
 };
 
 
 snakeGame.dice(); 
 snakeGame.ladder(); 
 snakeGame.snake();



 const user = {
	name: "sakshi",
	age: 22,
	
   };
   
   
   let clone1= { ...user};
   
   console.log(clone1);
 

const user1 = {
	name: "sakshi",
	age: 22,
	
   };
   
   
   let clone = Object.assign({},user);
   console.log(clone);



   const user2 = {
	name: "sakshi",
	age: 22,
	status: {
	  verified: false,
	  method: Symbol(),
	  title: undefined
	}
   };
   
   console.log(_.cloneDeep(user2));