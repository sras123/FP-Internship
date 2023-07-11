//Variable is javascript (var-let-const)
/* 
Rules
For naming conventions:Do not use any js reserverd keywords. eg: console
cannot start variables with number 0-9
can write with letters and underscore
variable is case sensite. eg : Age != age
Can write in camel case. eg: lastName 
*/

/*          //Declaring a Variables
//var
var name= "Srashta";
console.log(name);
//rewriting the values of variable
name="Seema";
console.log(name);


//variables without the value
var job;
console.log(job);
job= 'React JS Developer';
console.log(job);

//Let
let newName= 'Sita'
console.log(newName);

//difference between var and let is that var declarations are gobally scoped and let declaration are blocked scoped

//Const (once declared the value is fixed)
//need to assign value otherwise error occurs
const food= "Momo";
console.log(food);
// food= "chowmin";  cannot be changed


const person={
    name: "Srashta",
    lastname:"Acharya",
    age:22
};

console.log(person);                 */

//Task 1
/* let admin;
let name= "John";
admin= name;
//alert(admin);

//Task2 
let ourPlanet= 'Earth';
let currentUser= "Srashta";   */



//LOOPS 
//Loops are used to run a block of code a number of times.

// const foods= ['momo','chowmin','pizza','burger'];
// let text = '' ;
// for (let i = 0; i< foods.length; i++){
//     text += foods[i] + '\n ';
// }
// console.log(text);



/*   Different kinds of loops
for : loops through a block of code a number of times.
for/in: loops through the properties of an object
for/of: loops through the values of an iterable object
while: loops through a block of code while a specific condition is true
do/while: loops through a block of code while a specific conditon is true
*/

/*
//with var (looping through 0 - 9)
var i = 9;
for (var i = 0; i <10; i++){
    console.log(i);
}

//with let (looping through 0 - 5)
let j = 6;
for(i=0;i<j; i++){
    console.log(i);
}

// for/in loop : It works for objects
const employeeInfo= {
    firstName: "Hailey",
    lastName: "Stenfield",
    age: 25,
    address: "New York"
}
let text= '' ;
for(let x in employeeInfo){
 text += employeeInfo[x] + ' ';
}
console.log(text);


// for/in Over Arrays
const personName = ['Srashta','Ashsish','Ram','Apekshya'];
let text= '';
for(let x in personName){
    text += personName[x] + '\n ';
}
console.log(text);


// for/in Array.forEach(): It calls a function once for each array elements
const numbers= [64,25,56,2,34,5];

let text ='';   //empty string for avoiding the undefined variable 
numbers.forEach(myFunction);

function myFunction(value, index, array){
    text += value+'\n';
}
console.log(text);


//use of value, index, array
const numbers= [64,25,56,2,34,5];4

numbers.forEach(myFunction);

function myFunction(value, index, array){
    console.log(`Value: ${value}, Index: ${index}`);
}  

// for/of  : It works for array
//looping over an Array 
const cars= ['BMW','Volvo','Toyota'];

let text= '';
for(let x of cars){
    text += x + '\n';
}
console.log(text);  


//looping over a string
const word= 'Computer';

let text= '';
for(let x of word){
    text += x + '\n';
}
console.log(text);  


// While loop : It loops a block of code while a specified condition is true.

let text =''; i =0;

while (i <10){
    text += 'The number is ' + i + '\n';
    i++;
}
console.log(text);   

// do/while : it is same like while loop

let text='', i= 0;

do{
    text += 'The number is ' + i + '\n';
    i++;
}
while(i<10);
console.log(text);      

//comparing for loop and while loop
//for
const cars=['BMW','Toyota','Ford','Saab'];
let i= 0;
let text='';
for (let i = 0; i < cars.length; i++) {
    text += cars[i]+'\n';
}
console.log(text);

//while
const cars=['BMW','Toyota','Ford','Saab'];
let i = 0;
let text= '';
while(i < cars.length){
    text +=cars[i] + '\n'
    i++;
}
console.log(text);     */