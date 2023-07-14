//Console log is mostly use for viewing the output or the error
/*//String
console.log('My name is Srashta Acharya');
//number
console.log(1234);

//console error
console.log("Error");

//console a table
console.table({x:10, y:20})
console.table({Name:"srashta", Lastname:"Acharya"})*/


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




/*           //Data types 

//Boolean: Its either True or False
//Null: No value
//Undefined: Defined variables without value  
//Number: js will automatically detech number
//String: array of characters 
//Symbol: Uniques values 

//Examples of Datatypes

//string
let name = 'New Baneshwor1234';  // number inside the single quote is also a string
console.log(name);
console.log(typeof name);

//Number
let age= 22;
console.log(age);
console.log(typeof age);

//Boolean (purpose is to see something either it is true or false)
let isTrue= true;
console.log(isTrue);
console.log(typeof isTrue);

//NUll (null always becomes object)
let phone= null;
console.log(phone);
console.log(typeof phone);

//Undefined
let address;
address="New Baneshowr"; //if i remove this line it will be undefined
console.log(address);
console.log(typeof address);

//Symbol (value is always unique)
let symbol= Symbol();
console.log(symbol);
console.log(typeof symbol);

//Reference type (all come back as an object)
//In javascript an array is a single variable
const employee= ['Ram', 'Shyam', 'Sita', 'Hari'];
console.log(employee);
console.log(typeof employee);
//OR different method to create an array
const worker= new Array('Ram', 'Shyam', 'Sita', 'Hari')
console.log(worker);
console.log(typeof worker);

//Object Literal(is a comma seperated list of name values wraped in curly braces)
var personalInformation= {
    city: 'Kathmandu',
    state: 'Bagmati'

};
console.log(personalInformation);
console.log(typeof personalInformation);

//Date
const today = new Date();
console.log(today);
console.log(typeof today);      */




/*          //Type Conversion(converting one datatype to another)

//into String
let val=23;
// console.log(val);
// console.log(typeof val)
//Number to string
val= String(val);
// console.log(val);
// console.log(typeof val);

//boolean to string
val= String(true);
// console.log(val);
// console.log(typeof val);
 
//date to string
val= String(new Date());
// console.log(val);
// console.log(typeof val);

//Array to string
val= String([2,3,4,5,6,7]);
// console.log(val);
// console.log(typeof val);

//toString method
val=(20).toString();
// console.log(val);
// console.log(typeof val);


let str="123";
// console.log(str);
// console.log(typeof str);
//string to number
str= Number(str);
// console.log(str);
// console.log(typeof str);

//Boolean to number
//False == 0 and True == 1
str= Number(true);
// console.log(str);
// console.log(typeof str);

//String text to number
//Nan= not a number
str= Number('Srashta');
// console.log(str);
// console.log(typeof str);

//Array to number
str = Number([5,6,4,6,3,6]);
// console.log(str);
// console.log(typeof str);

//parseInt
str= parseInt('50.50');
// console.log(str);
// console.log(typeof str);

//parseFloat
str= parseFloat(100.54)
console.log(str);
console.log(typeof str);         */  




/*      //Arithmetic Operators

const num1= 100;
const num2= 200;
let val;

//addition
val= num1 + num2;
 
//Substraction
val= num2- num1

//Multiply
val= num1 * num2;

//Divide
val= num1/num2;

//Modulus
val= num1 % num2;

//Increment
val= 1;
val++; 
//++ val           in this firstly it will increment value of variable

//Decrement
val= 1
val--;
console.log(val);        */




/*       //Math Objects

let val; 

val= Math.PI;
// to specify round number we can use ceil
val = Math.ceil(3.1);  //it give the roudest number up
val = Math.floor(3.56); //it give the roudest number down
val= Math.round(2.6); //it will round to nearest number and for this output will be 3
val= Math.sqrt(25);  //gives you the square root of the number
val= Math.abs(-7);  //it removes the negative sign and gives you the positive number
val= Math.pow(4,2); //x compoment is the value and the y component is the power of the value
val= Math.min(34,25,-56,74,4); //gives you the lowest number
val= Math.max(34,25,56,74,4); //gives you the highest number
console.log(val);       */




/*         //Concatunation and Appending

const firstName= 'Srashta';
const lastName= 'Acharya';
const age= 22;

let val;

val= firstName + " " + lastName+ " "+ age; //there is no space in between but after adding after " " it give a space
 
//Appending
val= 'Avash';
val += 'Thapa';
val += age;

console.log(val);
console.log(typeof val);      */





/*         //Interpolation
const firstName= 'Srashta';
const lastName= 'Acharya';
const age= 22;
let val;

//Interpolation use back tick `` to use the string variables.
val =`My name is ${firstName} ${lastName} and my age is ${age}`;
console.log(val);         */




/*           //Comparison Operator
const x= 20;
const y= 30;

// == Equal
console.log(x == y);

// === Strict Equal
console.log(x === y);

// != Not Equal
console.log(x != y);

// !== Strict Not Equal
console.log(x !== y);

//Greater than
console.log(x>y);
//Greater than or equal
console.log(x >= y);

//less than
console.log(x<y);
//less than or equal
console.log(x <= y);            */





/*             //Logical Operators
const x= 30;
const y= 20;

//&& (and)
if(x > 21 && y < 40){
    console.log('True');
}else{
    console.log('False');
}

// || (or)
if(x > 21 || y < 40){
    console.log('True');
}else{
    console.log('False');
}

// ! (not)
const a= true;   
const b= false;

if(!a){
    console.log('True');
}else{
    console.log('False');
}

//Ternary Operator
const z =  x ? 'True': 'False';
console.log(z)                   */




/*           //Assignment operators
const x= 30;
const y= 20;

let val = 45;
// += 
Adds and assign operator
val+= 5;
// -= Subtract and assign operator
val-= 20;
// *= Multiply and assign operator
val*= 100;
// /= Divide and assign operator
val/= 60
console.log(val);          */



//Array and Array Methods
//Brackets
const jobs=['Engineer','Doctor','Software Developer','Marketing'];
console.log(jobs);
//Array constructor
const age= new Array(22,45,35,23,14,56,34);
console.log(age);
//Mixed Datatypes
const mixed=[22, 'Software Developer', undefined, true];
console.log(mixed);