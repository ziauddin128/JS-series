//Premitive
// Total 7types: string, number, boolean, null, undefined, symbol, bigInt

let name = "Kamal Hossain"; //string
let age = 24; //number
let is_logged_in = true; //boolean
let temp = null; //null
let phone; //undefined
let id = Symbol('123'); //symbol
let amount = 3744286496294692694629442n; //biginit

//Reference (Non-premitive)
//Total 3types: array, object, function
let animal = ["Zebra", "Tiger", "Lion"]; //Array

let myObj = {
    name: "Kamal Hossain",
    age: 24,
    phone: "79764464",
} //Object

function abc()
{
    console.log('This is a function');
} //function

console.log(typeof abc);



