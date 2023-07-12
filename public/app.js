"use strict";
/*
//DOM

// const anchor= document.querySelector('a')!;
// if(anchor){
//      console.log(anchor.href)
// }
// console.log(anchor.href);

//selcting Form tag from index.html
//const form=document.querySelector('form')!;

//when we select with class we cant acess feature and method of html so we have to make thata classs
// as htmlformelement so that typescript know its html form
const form=document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);

//input
//as htmlinputelement is typecasting to acess thier feature
const  type = document.querySelector('#type') as HTMLSelectElement;
const tofrom=document.querySelector('#tofrom') as HTMLInputElement;
const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})

*/
//class
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes @${this.amount} for ${this.details} `;
    }
}
const invone = new Invoice('mario', 'work on mario website', 250);
const invtwo = new Invoice('yoshi', 'work on yoshi website', 300);
let invoices = [];
invoices.push(invone);
invoices.push(invtwo);
invone.client = 'luigi';
invtwo.amount = 400;
console.log(invone, invtwo);
console.log(invoices);
