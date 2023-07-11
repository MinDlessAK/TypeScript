"use strict";
/*

 //Chapter-1
  Install typeScript
  "npm install typescript"

*/
/*
Chapter-2

 //compiling Typescrit
  //cmd
     //tsc <filename> note:- In this case the name of file should be same as Javascript
     //tsc <typescript filename> <javascript Filename>\

const char="karan"
 console.log(char)
 
 const input=document.querySelectorAll('input')
 console.log(input)

 input.forEach(input=>{
    console.log(input)
 })

 */
/*
//chapter-3
  //Types Basics
   
let namee="mario"
let age=30;
let isblackbelt=false;

//it will Show error
//ts have strict type so it dont change dynamicly

//namee=20;
namee='luigi';

//age='yoshi';
age=40;

//isblackbelt='yes';
isblackbelt=true;

var circ= function (diameter:number){
  return diameter*Math.PI
};

console.log(circ(10));

*/
/*


//Chapter-4
   //Array And Object

   //Array
let names=['luigi','mario','yoshi'];

names.push('toad');

//in ts this will throw error
//names.push(3);


let numbers=[10,20,30,40];
numbers.push(25);
numbers.pop();


//this also show same error as upper one
//numbers.push('shaun');

//mixed types of array
let mixed=['ken',4,'chun-li',8,9,true];

mixed.push('akash');
mixed.push(37);

   //Object
   // after creating object we cant add additional property like name ,age,belt;
   let ninja={
      name: 'mario',
      belt: 'black',
      age:30
   };
    ninja.age=40;
    ninja.name='ryu';

    //we cant do this bcz age shloud be number it cant be string
    //ninja.age='30'
    //we cant chnage type of ninja
    //ninja=""

    //lets change the same object
     ninja={
      name: 'yoshi',
      belt: 'ornage',
      age:45
   };
   //but you cant change the intial structure of object
   // you should provide same things like name,belt,age;
   //otherwise is will show error
   //comment age and u will get error

*/
/*
//chapter-5

   //explicit types

   // sometime you should not provide value to variable
   // and intislized in later or by refrence
   let character:string;
   let age:number;
   let isloggedin:boolean;
   //and that how we decalre explicity types of variable


 // we cant set age value as string
 //we already sepcified the age is types of number
  //age='luigi';
  
  
//that is fine
  age=30;

  //isloggedin=25
  isloggedin=true;



   //array
let ninjas:string[]=[];

//as you know we cant put number in it
//bcs this is string types of array
//ninjas=[30,99,44];

// ninjas=['yoshi','mario','snake']

ninjas.push('shubham wait');
//as you know we create athe string type array
// then decalre the array
//if you dont declare the array and try to push value in it
//it will show error bcz you didnt decalre the array

//note:- you can pass empty array when  you ar intailzing the array
//like this "let ninjas:string[]=[]; "
//now you can use push method '
//you just decalre empty array so u cant push in that array



//union types
//in this type we can make array and variable  multi-types


// use parthisis when applying uinion types of array
let mixed:(string|number|boolean)[]=[];

mixed.push('helloo')
mixed.push(9);
mixed.push(true);
console.log(mixed);

//use uinion types in  varibale like this
let uid:string|number;
uid=23;
uid="123"



//object

let ninjaone:object;

ninjaone={
   name:'yoshi',
   age:20
}
let ninjatwo:{
   name: string,
   age:number,
   beltcolour: string
}
ninjatwo={
   name:'mario',
   age: 21,
   beltcolour:'bllack'
}
*/
/*
//chapter-6
 //dynamic(any)types
  
let age:any=25;
age=true;
console.log(age);
age='hello'
console.log(age);
age={name:'luigi'};
console.log(age);

let mixed:any[]=[];
mixed.push(5);
mixed.push('shubham');
mixed.push(true);
console.log(mixed);

let ninjathree:{name:any ,age:any}

ninjathree={name:'akash',age:34};
console.log(ninjathree);

ninjathree={name:25,age:'yoshi'};
console.log(ninjathree);

*/
/*
//chapter-7
 console.log('testing123')

 //explain later

 */
/*

//chapter-8
  //function basic
let rat=()=>{
  console.log('hello,arrow function')
}

let greet: Function;
greet=()=>{
  console.log('hello function type greet')
}

//!important
const add=(a:number,b:number,c?:number|string)=>{
  console.log(a+b);
  console.log(c);
}
add(5,8,'pala');

const minus =(a:number,b:number):number=>{
  return a-b;
}
let result=minus(4,90);

*/
