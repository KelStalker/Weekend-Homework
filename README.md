# Weekend-Homework
A collection of small edabit and instructor provided assignments to keep us thinking on weekends.  In the code, each assignment will be preceeded by a date, description and any other relevant details.  Each weekend assignment will be due at 9am the following Monday.
----------------------------------------
*** Edabit challenge 1: Array of Multiples ***

Due Monday, March 30th, 9:00 AM

- Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
- Examples:
         <!-- arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
         arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
         arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] -->

MY SOLUTION (20 Edabit experience points earned)

function arrayOfMultiples (num, length) {
	var AOM = [];
	for(var i = 1; i <= length; i++){
		AOM.push(i*num);
	}
	return AOM;	
}
--------------------------------------------------------
*** Edabit challenge 2: Converting Objects to Arrays ***

Due Monday, March 30th, 9:00 AM

 - Write a function that converts an object into an array, where each element represents a key-value pair. 
 - Examples:
         <!-- toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
         toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
         toArray({}) ➞ [] -->

MY SOLUTION (20 Edabit experience points earned)

function toArray(obj) {
	return Object.entries(obj);
}
----------------------------------------