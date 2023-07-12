"use strict";
// const anchor= document.querySelector('a')!;
// if(anchor){
//      console.log(anchor.href)
// }
// console.log(anchor.href); 
//selcting Form tag from index.html
//const form=document.querySelector('form')!;
//when we select with class we cant acess feature and method of html so we have to make thata classs
// as htmlformelement so that typescript know its html form
const form = document.querySelector('.new-item-form');
console.log(form.children);
//input
//as htmlinputelement is typecasting to acess thier feature
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
