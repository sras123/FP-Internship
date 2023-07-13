import React from 'react'
import { getJSDocReadonlyTag } from 'typescript';

const Typescript = () => {

  //Basic Data types
  let name = "Srashta";
  let num = 10;
  //num= 'sras';  error cannot change number to string
  num = 22; //correct
  //another way to define a vairable
  let lastName: string = 'Acharya';
  let learingTypeScript: boolean = false;
  let u: undefined = undefined;
  let y; //this is automantically undefined
  if (y === undefined) {
    console.log('y is undefined')
  } else {
    console.log('y is defined')
  }
  let n: null = null;
  if (n === null) {
    console.log(' n is null')
  } else {
    console.log('n is not a null')
  }


  //Types of variables
  //Arrays, Tuple, Enum, Unknown, Any, Void

  //Array (ways to declare a array variables)
  let list1: number[] = [1, 2, 35, 64]
  let list2: Array<number> = [3, 5, 3, 6, 7]

  //Tuple 
  let tuple1: [number, string];
  tuple1 = [5, 'sras'];
  console.log(tuple1[1].substring(1))


  //Enum
  enum Color { Red, Green = 6, Blue = 3 }
  let c: Color = Color.Blue; //it stores the index position of the value

  let colorName: string = Color[6] //store the color at index 6 from Color in colorName


  //Unknown
  let notSure: unknown = 2;
  console.log(notSure);

  //Any
  //  let anyValue: any;
  //  //can define any datatype
  //  anyValue = 30;  
  //  anyValue='sras';
  //  anyValue= true;

  //  anyValue()
  //  anyValue.toUpperCase() //doesnt show any err


  //Void
  function myFun(): void {   //if the function doesnt have any return type than void can be used
    console.log('hello')
  }

  //union types
  let peopleAllowed: number | boolean;   // using | we can add two or more than two types of datatpes

  peopleAllowed = 23;
  peopleAllowed = true;


  //Function in typescript
  function hello() {
    console.log('Hello World')
  }
  hello();


  function sum(num1: number, num2: number = 12): number {         // can add type for return type too

    return num1 + num2
  }
  console.log(sum(4))
  // can have any optional parameter(?) but not at the first parameter 



  //Interface
  interface employee {
    firstname: string,
    lastname: string,
    ID: number
  }

  function getEmployeeDetails(empDetails: employee) {
    console.log(empDetails.firstname);
    console.log(empDetails.lastname);
    console.log(empDetails.ID);
  }
  getEmployeeDetails({
    firstname: 'Srashta',
    lastname: 'Acharya',
    ID: 1000
  })


  //Classes
  class employeeDetails {
    name: string;
    lastname: string;
    age: number;

    constructor(a: string, b: string, c: number) {
      this.name = a;
      this.lastname = b;
      this.age = c;
    }

    format() {
      return `${this.name} ${this.lastname} is ${this.age} years old.`;
    }
  }
  const getDetailOne = new employeeDetails('Srashta', 'Acharya', 22);
  //adding one more instance
  const getDetailTwo = new employeeDetails('Taylor', 'Swift', 32);

  let info : employeeDetails[] = [];
  info.push(getDetailOne);
  info.push(getDetailTwo);
  console.log(info);


 //Type aliases
 type Person= {
  name: string;
  age: number;
 };

 let p: Person ={
  name: "Srashta",
  age: 22
 };

 console.log(p)






  return (

    <div>
      Hello {name} {lastName},
      Age: {num},
      {learingTypeScript}
      {y} {u} {n} <br />
      List1: {list1[3]},<br />
      List2: {list2[4]}<br />
      {tuple1} <br />
      {c} <br />
      {colorName}
      {/* <button onClick={getEmployeeDetails}> Click me</button> */}
    </div>


  )
}

export default Typescript;
