//Arrays: It is a variable which can store multiple values and different datatypes
//commonly arrays are declare as constant
/*
const name = ['Srashta', 'Tushar', 'Taylor', 'Harry'];
console.log(name);

//using the js keyword 'new'
const name = new Array('Srashta', 'Tushar', 'Taylor', 'Harry');
console.log(name);

//Accessing Array Elements using index number
const name = new Array('Srashta', 'Tushar', 'Taylor', 'Harry');
console.log(name[3]);  //indexing in array always starts with 0 

//Changing Array Elements
const name = new Array('Srashta', 'Tushar', 'Taylor', 'Harry');
name[1]="Norbu";
console.log(name);

//can store different types of datatypes
const mixed = new Array('Srashta','Acharya', 21, true);
mixed[2]= 22;
console.log(mixed);

//Converting an Array to String
const food= new Array('Momo','Chowmin','Pizza');
let updated= food.toString();
console.log(updated)
console.log(typeof updated);

//Array can be object
const person = { name: "Srashta", lastName: "Acharya", age: 22 }; 
console.log(person.name);  // object use names to access to its elements


//Lenght property
const fruits= ["Banana", "Orange", "Apple", "Mango"];
let length= fruits.length;
console.log(length);


//Accessing the last and first elements inside the array
const fruits= ["Banana", "Orange", "Apple", "Mango"];
let first = fruits[0];
let last = fruits[fruits.length - 1];
console.log(first);
console.log(last);


//Looping  Array Elements
//for loop
const fruits= ["Banana", "Orange", "Apple", "Mango"];
let length= fruits.length;

let text='';
for(let i=0; i<length; i++){
    text += fruits[i]+ '\n';
}
console.log(text);


//forEach function
const fruits= ["Banana", "Orange", "Apple", "Mango"];

let text= '';
fruits.forEach(myFunction);

function myFunction(value){
    text += value +'\n';
}
console.log(text);


//Adding Array elements using push() method
const fruits= ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Guava");
//OR
fruits[fruits.length]="Papaya";
console.log(fruits); 

//Difference between array and objects (Array use numbered indexes and Objects use named indexes)
//Array is used when we want element names to be a number
//Object is used when we want element names to be a text

// new Array() or []?
const point1 = new Array(10);
const point2 = [10];
console.log(point1[0]); //output is undefined 
console.log(point2[0]); //output is 10 so it is better to use []

//how to Recognize a array
const fruits = ["Banana", "Orange", "Apple"];
//typeof always return object and we cannot use typeof to know if a variable is array or not
let type = typeof fruits;  //output is object
console.log(type);
//Solution 1
console.log(Array.isArray(fruits)); //output is true
//Solution 2
console.log(fruits instanceof Array); //output is true

//Array methods
//join()
const name = ['Srashta', 'Tushar', 'Taylor', 'Harry'];
let updated= name.join(' + ');
console.log(updated);


//Popping and Pushing
//pop()method : It removes the last elements of array
const name =['Srashta', 'Tushar', 'Taylor', 'Harry'];
let removed= name.pop();
console.log(removed);
console.log(name);


//push() method : It adds a new element to an array at the end
const name = ['Srashta', 'Tushar', 'Taylor', 'Harry'];
let added= name.push("Hailey");
console.log(name);


//shift() method : It works like pop() but it removes the first element of the array and shifts all the other elements to lower index
const name = ['Srashta', 'Tushar', 'Taylor', 'Harry'];
let shifted= name.shift();
console.log(name);
console.log(shifted);


//unshift() method : It adds the new element at the beginning of the array and unshift older elements
const name = ['Srashta', 'Tushar', 'Taylor', 'Harry'];
let updated= name.unshift('Hailey');
console.log(name);
console.log(updated);


//length can be used to append new element into array
const name = ['Srashta', 'Tushar', 'Taylor', 'Harry'];
name[name.length]= 'Hailey';
console.log(name);

//Array elements can be deleted using 'delete' but it leaves undefined hole in the array
//Instead we can use shift() and pop()


//Merging (Concatenating) Arrays using concat() method
const car1 = ["BMW", "Toyota"];
const car2 = ["Audi", "Ford", "Range Rover"];

const cars = car1.concat(car2);
console.log(cars);

//Merging an Array with the Values
const car1 = ["Audi", "Ford", "Range Rover"];
const cars= car1.concat("BMW");
console.log(cars);


//Flattening an Array
//It is the process of reducing the dimensionality of an array using flat()
 
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr); //it reduced 2D array to 1D


//Splicing and Slicing Arrays
//splice() method can be used to add new items to an array
const car1 = ["Audi", "Ford", "Range Rover"];
car1.splice(1,0,"BMW");  //1 mean where the element is added and 0 mean 0 element is removed in that place but it the other elements are automatically shifted 
console.log(car1);


//using splice to remove the element
const car1 = ["Audi", "Ford", "Range Rover"];
car1.splice(0,1); //it removes one element from the 0 index
console.log(car1);


//Slice() methis is used to slice out a piece of array into a new array
const car1 = ["Audi", "Ford", "Range Rover"];
const car2= car1.slice(1); //creates a new array to store the element removed from index 1
console.log(car2);

//using argument
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); //it removes the element between index 1 to 3
console.log(citrus);
*/ 