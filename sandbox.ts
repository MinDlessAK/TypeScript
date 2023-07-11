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
   

