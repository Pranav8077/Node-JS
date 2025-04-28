// function doingStuff(x) {

// }

// const arr = ["Sqirrel", "alcapa", "buddy"];
// arr.forEach(e => console.log(e));

///////////////////////////////////////////////////

//Spread operator

// let sprea = ["so", "much", "fun"];
// let message = ["Javascript", "is", ...spread, "and", "very", "powerful"];
// console.log(message)

/////////////////////////////////////////

// function addno(x, y, z, a) {
//     console.log(x + y + z + a);

// }
// let arr1 = [6, 9];
// let arr2 = [7, 4];
// addno(...arr1, ...arr2);
// addno(6, 9, 7, 4);

////////////////////////////////////////////

// function someFunction(parm1, parm2) {
//     console.log(parm1, parm2);
// }
// someFunction("hi", "there!", "How are you");

///////////////////////////////////////

//  Returninng function values

// let result = addTwoNumbers(4, 5);
// console.log(result);

//////////////////////////////////

// let resulArr = [];
// for (let i = 0; i < 10: i++) {
//     let result = addTwoNumbers(i, 2 * i)


// }

/////////////////////////////////////

// let result = addTwoNumbers(12, 15);
// console.log(result);

////////////////////////////////////

// function test(x) {
//     console.log("Available here :", x);
// }
// test("hi");

////////////////////////////////////

// function test(x) {
//     console.log("Available here :", x);
// }
// test("hi");
// console.log("Not available here:", x);

//////////////////////////////////////


// function test() {
//     let y = "local variable ";
//     console.log("Available here :", y);
// }
// test("hi");
// console.log("Not available here:", y);

////////////////////////////////////////

// function test() {
//     let y = "I'll return";
//     console.log("Available here :", y);
//     return y;
// }

/////////////////////////////////////

// function doingStuff() {
//     if (true) {
//         var x = "local";
//     }
//     console.log(x);
// }
// doingStuff();

/////////////////////////////////////

// function doingStuff() {
//     if (true) {
//         console.log(x);
//         var x = "local";

//     }
// }
// doingStuff();

//////////////////////////////////

// Global variable

// let globalVar = "accesible everywhere ";
// console.log("outside function ", globalVar);

// function creatingnewscope(x) {
//     console.log("access to global vars inside function ", globalVar);

// }
// creatingnewscope("some parameter ");
// console.log("still available :", globalVar);

/////////////////////////////////////


// function confuse() {
//     x = "Guess my scope ";
//     console.log('Inside the function', x);


// }
// confuse();
// console.log("outside of function ", x)

///////////////////////////////////////////////

// Immediately invoked function expression 

// (function(){
//     console.log("IIFE!");
// })();

////////////////////////////////////////// 

// Recursive Function : When a function calls itself is called recursion.

// function getResursive(nr){
//     console.log(nr);
//     getResursive(--nr);
// }
// getResursive(3); 


// function logRecursive(nr){
//     console.log("Started function",nr);
//     if(nr>0){
//         logRecursive(nr-1);
//     }
//     else{
//         console.log("done with recursion ");

//     }
//     console.log("Ended function ",nr);

// }
// logRecursive(3);

////////////////////////////////////////////
// Nested Function 

// function doOuterFunctionStuff(nr){
//     console.log("Outer Function");
//     doOuterFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("I can access outer variables ",nr);
//     }
// }
// doOuterFunctionStuff(2);

////////////////////////////////////////////
// Anonymous function

let functionvVariable=function(){
    console.log("Not so sercret thought ")
}
function doFlexStuff(executeStuff){
    executeStuff();
    console.log("Inside do flexible stuff");
}
doFlexStuff(functionvVariable)

