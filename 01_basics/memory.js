/*
Memory 2types
1) Stack - (Premitive Datatypes)
2) Heap - (Non-premitive/Reference Datatype)
*/

//Stack Memory (will give a copy)
let myclass = "Inter";
let currentClass = myclass;
currentClass = "Honourse"
//console.log(currentClass);

//Heap Memory (will give a reference)
let userOne = {
    email : "user@gmail.com"
}
let userTow = userOne;
userTow.email = "user2@gmail.com";
//console.log(userTow);



