//////////////////
//JS practice 1//
////////////////
alert("Welcome! Please answer the following questions");
var name = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");
var height = prompt("How tall are you?(in cm)");
var havePet  = prompt("Do you have a pet?(y/n)");

while(havePet !== 'y' && havePet !== 'n'){
	havePet = prompt("Please enter y for yes or n for no. Do you have pet?");
}

if(havePet == 'n')	{
	console.log("Thank you for your information. Goodbye!");
}else{
	var petName = prompt("What is your pet's name?");

	if((name[0]==lastName[0])&&(age>20&&age<30)&&(height>=170)&&(petName[petName.length-1]=='y')){
		console.log("Hello Spy. Your mission is to go get me a hamburger!")
	}else{
		console.log("Thank you for your information. Goodbye!")
	}
}

//////////////////
//JS practice 2//
////////////////

//
// PROBLEM 1: SLEEPING IN
//
// Write a function called sleepIn that takes in two boolean parameters: weekday
// and vacation.
//
// The parameter weekday is true if it is a weekday, and the parameter vacation is
// true if we are on vacation. We sleep in if it is not a weekday or
// we're on vacation. Return true if we sleep in. So some example input and output:
//
// sleepIn(false, false) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

function sleepIn(weekday, vacation) {
    return (!weekday) || (vacation)
}

//
// PROBLEM 2: MONKEY TROUBLE
//
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.
//
// Example Input and Output
//
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile)
}

//
// PROBLEM 3: STRING TIMES
//
// Given a string and a non-negative int n, return a larger
// string that is n copies of the original string.
//
// Example input and output:
//
// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

function stringTimes(str, n) {
	newStr = "";
    if(n > 1){
    	for(var i = 0; i < n; i++){
    		newStr = newStr+str;
    	}
    }else{
    	newStr = str;
    }

    return newStr;
}

// PROBLEM 4: LUCKY SUM

// Given 3 numerical values, a b c, return their sum. However, if one of the values is
// 13 then it does not count towards the sum and values to its right do not count.
// So for example, if b is 13, then both b and c do not count.
//
// Hint (Explore using multiple return statements inside a single function!)
//
// Example input and output
//
// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

function luckySum(a, b, c){
	sum = 0;
	if(b == 13){
		sum = a;
	}else if(c == 13){
		sum = a+b;
	}else if(a != 13){
		sum = a+b+c;
	}

	return sum;
}

// PROBLEM 5:
//
// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
// and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
//
// Here are some example inputs and outputs:
//
// caught_speeding(60, false) → 0
// caught_speeding(65, false) → 1
// caught_speeding(65, true) → 0

function caught_speeding(speed, is_birthday){
  if(is_birthday){
  	speed = speed-5;
  }

  if(speed <= 60){
  	return 0;
  }else if(speed > 80){
  	return 2;
  }else{
  	return 1;
  }
}

// BONUS: MAKE BRICKS
//
// We want to make a row of bricks that is goal inches long. We have a number of
// small bricks (1 inch each) and big bricks (5 inches each). Return true if it
// is possible to make the goal by choosing from the given bricks. This is a
// little harder than it looks and can be done without any loops in a single line!
//
// If you can't figue this one out, don't worry, that's why its a bonus!
//
// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true

function makeBricks(small, big, goal){
  return (small+(big*5)==goal)
}


//////////////////
//JS practice 3//
////////////////

// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
  		console.log(this.name.length)
    }
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.


///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  report: function(){
  	alert("Name is " + this.name + " job is " + this.job + "Age is " + this.age)
  }
}

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.



///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function(){
  	ln = name.split(" ")
  	console.log(ln[1])
  }
}

// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp

