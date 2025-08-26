/*console.log('Hello');
console.log('I like pizza');

//window.alert('This is an alert');

document.getElementById("myh1").textContent=`Hello`;
document.getElementById("myp").textContent=`I like pizza`;

//variables
let age=25;
let price;
price=59;
let marks=90;
console.log(typeof price)
console.log(marks);
console.log(`I am ${age} years old`);
console.log(`The price of my bag is ${price}`);

let name="Charlote";
let favoriteFood="kuku";
console.log(typeof name);
console.log(`My first name is ${name}`);
console.log(`My favorite food is ${favoriteFood}`);

let online=true;
console.log(`I am always online at night: ${online}`);

document.getElementById("p1").textContent=`My name is ${name}`;
document.getElementById("p2").textContent=`I am ${age} years old`;
document.getElementById("p3").textContent=`My favorite food is ${favoriteFood}`;

//arithmetic operators
let students=59;
students=students +4;
students -= 5;
students*=2
students/=4
console.log(students);
let result=12%5+8/2;
console.log(result);

//How to accept user input
//let name=window.prompt("Whats your username?");
//console.log(name);
let username;

document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("mytext").value;
    document.getElementById("myh1").textContent=`Hello ${username}`
    console.log(username);
}

//changing data type
let x=25;
x+=4;
let y="";
let z="food";

x=String(x);
y=Number(y);
z=String(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//constants
const PI=3.142;
let radius;    
let circumference;

//radius=window.prompt(`Enter radius`);
radius=Number(radius);
circumference=2*PI*radius;
console.log(circumference);

//counter program
const decreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const increaseBtn=document.getElementById("increaseBtn");
const countLabel=document.getElementById("countLabel");
let count=0;

increaseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}

//Math
let a=45;
let b=3.5;
let c;
c=Math.cos(x);
c=Math.pow(x, y);
c=Math.min(x, y);
console.log(c);

//random number generator
const min=50;
const max=100;
let randomnum= Math.floor(Math.random() *(max -min)) +min;

console.log(randomnum);*/

const mybutton= document.getElementById("mybutton");
const mylabel= document.getElementById("mylabel");



