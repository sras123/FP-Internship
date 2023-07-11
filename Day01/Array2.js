//Array map()
//It creates a new array from calling a function for every array element.
//It doesnot execute the funtion for empty elements
//It doesnot change the original array

/*
const numbers= [1,3,5,6,7,8,9];
const newNumbers= numbers.map(Math.sqrt)
console.log(newNumbers);

//Multiplying all the element of the array with 2
const numbers= [1,3,5,6,7,8,9];
const newNumbers= numbers.map(myFunction)

function myFunction(num){
    return num*2;
}
console.log(newNumbers);


//Getting the full name for each person
const persons = [
    {firstname : "Ryan", lastname: "Reynolds"},
    {firstname : "Srashta", lastname: "Acharya"},
    {firstname : "Taylor", lastname: "Swift"}
  ];

  console.log(persons.map(getFullname));

  function getFullname(item){
    return[item.firstname,item.lastname].join(" ");
  }
 

//Array every() method
//It execute a fucntion for each array element
//It returns true if the fuction returns true for all elements
//It returns false if the fucntion return false for one element
//It does not execute the function for empty elements.

const ages= [14,45,24,55,25];  //14 is less than 18 so the output is false
let check= ages.every(checkAge);
console.log(check);

function checkAge(age){
    return age>18;
}


const survey=[
    {name:'Srashta', answer: 'Yes'},
    {name:'Harry', answer: 'Yes'},
    {name:'Taylor', answer: 'No'},
    {name:'Hailey', answer: 'Yes'}
];

let result = survey.every(isSameAnswer);
console.log(result);
function isSameAnswer(el, index, arr){
    if (index ===0){
        return true;
    }else{
        return(el.answer === arr [index -1].asnwer);
    }
}


//Array Iteration: It operates on every array item

//flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr= [1,3,5,6,8,6];
const newArr= myArr.flatMap((x) => x * 2);
console.log(newArr);


//filter() method is commonly used when you need to selectively filter elements from an array based on a condition.
const numbers = [23, 45, 15, 13, 53, 63];
const over18= numbers.filter(myFunction);
console.log(over18); // it filter the number greater than 18 in a new array

function myFunction(value){
    return value > 18;
}


//reduce() method : It runs  a function on each array elements to reduce it to a single value and it works from left to right
const numbers = [23,5,42,4,45,53,23];
let sum= numbers.reduce(myFunction,100); // 100 is passed as second argument and the calcultion starts from 100 + other elements

console.log(sum);

function myFunction(total, value, index, array){  //Here index and array is not used
    return total + value;
}


//reduceRight() it works from left to right
const numbers = [23,5,42,4,45,53,23];
let sum= numbers.reduceRight(myFunction, 100); // 100 is passed as second argument and the 100 is added with the other elements

console.log(sum);

function myFunction(total, value, index, array){  //Here index and array is not used
    return total + value;
}


//some() method : It check if some of the array values pass a function
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);
console.log(someOver18);

function myFunction(value, index, array) {
  return value > 18;
}


//indexOf() method : it searches an array for an element value and returns its position.
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Mango") + 1 ; // +1 is added because array counting starts from 0 
console.log(position);


//lastIndexOf() method: it returns the position of the last occurance of the specific element
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1; //Apple last occured at postion 3
console.log(position);


//find() method : It return the value of first array element that passes a test function
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
console.log(first);  //it log 25 because it is the first element which is greater than 18

function myFunction(value) {
  return value > 18;
}


//findIndex() method: It return the index of first array element that passes a test function
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);
console.log(first) // 25 is greater than 18 so the index of 25 is 3

function myFunction(value, index, array) {
  return value > 18;
} 

//Array.from() method 
console.log(Array.from("ABCDEFG"));


//Keys() method returns an Array Iterator object with the keys of an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
let text='';
for (let x of keys) {
  text += x + "\n";
}
console.log(text)


//entries() method : It returns an Array iterator object with key/value pairs
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
let text= '';

for (let x of f) {
  text+= x + '\n';
}
console.log(text);




*/

