// fruits.set("apples");
// Map.clear();


// Map.forEach()


// let text="";
// fruits.forEach(function(value,key){
//     text+=key+'='+value;
// })
// console.log(text);

// for(const x of fruits.keys()){
//     text+=x;

// }
// Map.values();


// const apples={name:"Apples"};
// const banana={name:"Apples"};
// const oranges={name:"Oranges"};
// const fruits=new  Map();
// fruits.set(apples,500);
// fruits.set(banana,500);
// fruits.set(oranges,500);

// fruits.get("apples");

///////////////////////////////////


// const fruits={
//     {name:"apples",quantity:300};
//     {name:"banana",quantity:300};
//     {name:"orange",quantity:300};
//     {name:"apples",quantity:300};
// };

function myCallback({quantity}){
    return quantity>200?"ok":"low";
}
const result=Map.groupBy(fruits,myCallback);

let {firstname,lastname}=person;

const person={
    firstname:"Jhon",
    lastname:"Jhon",
    age:50
};

let(lastname:name){

}

///////////////////////////////
const person={
    firstname:"John"

}