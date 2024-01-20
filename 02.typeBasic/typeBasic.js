// One of the main difference b/w javascript and typescript is typescript uses Strict
// variable type and javascript do not
var age = 20;
//Now i we cannot change age to be a string
console.log(age);
/*
age = "Hello";
*/
// this above line will give error as:
// Type 'string' is not assignable to type 'number
console.log(age);
// Now the javaScript file which will be created 
//will not give error cause js allow redeclartion of variable with different type but 
//in terminal the typescript file will give error
var age2;
// Type annotations can only be used in TypeScript files.
age2 = 12;
// Now without the type annotations also ie var age2 : Number we can just write 
// var age2 = 12 and typescript will use inference to identify the data type of the
// variable .
// Now type annotation helps when we are defining a function which needs specific type
//of input like :
// const circum = (diameter) =>{
//     return diameter * Math.PI;
//}Now here in this function diameter can be of any type like boolean string or null
//To avoid that we use type annotations
var circum = function (diameter) {
    return diameter * Math.PI;
};
