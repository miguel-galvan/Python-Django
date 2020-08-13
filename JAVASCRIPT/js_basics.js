alert("Welcome to the example!");
var name = prompt("What is your name?");
alert("Hello " + name);
console.log("You are a cool person");

//booleans and operations
// > <  greater or less than
// >= <=  (greater or equal to) and (less or equal to)
// !=  not equal to
// ==  equal to
// ===  same type of datatype
// !== Not the same datatype
// &&  and
// ||  or 
// !() not operator 

//control flow
//if(condition){ execute code }
//elseif(condition){ execute code }
//else{ execute code }
//loops, for loops

///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
var i = 5;
while(i > 0){
	console.log("hello");
	i--;
}

// For Loop
for(var i = 0; i < 5; i++){
	console.log("hello");
}

/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
var i = 1;
while(i <= 25){
	console.log(i);
	i += 2;
}


// METHOD TWO
// For Loop
for(var i = 1; i <= 25; i+=2){
	console.log(i);
}


//Functions 
//syntax:
function functionName(){
	//do something 
}

//Arrays
//syntax
array = [1,2,3,4,5] //allowed to take mixed datatype
// pop() and push() remover or add an item to the end of the array 

//Objects (Dictionary)
//syntax
obj = {key1: "value1", key2: "value3", key3: "value3"}




