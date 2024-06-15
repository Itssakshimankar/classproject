const grandparent=document.querySelector('#grandparent');
const parent=document.querySelector('parent');
const child=document.querySelector('child');

grandparent.addEventListener("click",(e)=>
{
	e.stopPropagation();
	console.log("hey");
});
parent.addEventListener("click",()=>
{
	console.log("sakshi");
});
 
 
