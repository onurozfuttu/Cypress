/**
 * There is no Collection in JS. In JS we only have Arrays and Map
 * NOT Fixed size
 * There are two important Brackets in JS 
 * 1. [] ----> creates an Array
 * 2. {} ----> creates an object
 */

//Creating array
var scores = new Array(); //empty array
var numbers = new Array(10); //array with initial size 10
var myNumber = new Array(9,4,2,11); //array with initial elements

var athletes = Array(3); //array with initial size 3 (without new keyword)
var sings = Array('Red'); //array with initial element

var emptyArray = [];
var colors=["red","blue","green"];

//array example
let tools=["Jest","Selenium","Cypress","TestCafe","PhantomJS","Protractor"];

//Accessing array element
console.log(tools);
console.log(tools.toString());
console.log(tools[0]);

const string=tools.toString();
console.log(string)

const join=tools.join(" * ") //add between element
console.log(join)

const pop=tools.pop(); //removes an element from the end of array and adds to the variable
console.log(pop)
console.log(tools)

const push=tools.push("SlimerJS"); //add an element to end of array
console.log(push)
console.log(tools)

const shift=tools.shift(); //removes an element from the beginning of array and adds to the variable
console.log(shift)
console.log(tools)

const unshift=tools.unshift("Selenoid"); //add an element to beginning of array
console.log(unshift)
console.log(tools)

const sort=tools.sort();
console.log(tools)

const reverse=tools.reverse()
console.log(tools)

tools.forEach((value)=>{
    if(value=="Cypress"){
        console.log("Cypress is trending")
    }else{
        console.log("Element not found")
    }
})