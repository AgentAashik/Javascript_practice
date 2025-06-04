function getBasicDataTypes() {
    let num = 20;
    let text = "Credo Systemz";
    const Phi = 3.14;
    let stringNum = "42";
    let percent = "75%";
    let discountAmount = 75;
    let currentDate = new Date();
    
    let data = [num, text, Phi, stringNum, percent, discountAmount, currentDate];
    return data;
}

let basicData = getBasicDataTypes();

function getComplexData() {

    let userList = [
        { name: "john", age: 30, course: "web dev", location: "chennai" },
        { name: "emma", age: 28, course: "data science", location: "mumbai" },
        { name: "alex", age: 29, course: "mobile app", location: "bangalore" }
    ];

    return userList;
}
let complexData = getComplexData();



const { name, age } = complexData[1];
console.log("complex=====>", complexData)

function addNumbers() {
    let x = 10;
    let y = 5;
    let z = x + y;
    return z;
}

let sumResult = addNumbers();
console.log("Sum Result=====>", sumResult);



function subtractNumbers() {
    let a = 100;
    let b = 50;
    let result = a - b;
    return result;
}
let diffResult = subtractNumbers();
console.log("Difference Result======>", diffResult);



function doArithmetic() {
    let m = 8;
    let n = 4;
    return m + n;
}

function assignValue() {
    let p = 12;
    let q = 6;
    return p += q;
}


function compareValues() {
    let str = "10";
    let num = 10;
    let isSame = (str === num);
    return isSame;
}



function handleStrings() {
    let strVal = "10";
    let numVal = 10;
    return Number(strVal) + numVal;
}


function useLogicalOperators() {
    let val1 = 50;
    let val2 = 50;
    let val3 = 20;
    let val4 = 30;

    let result = (val1 === val2) || (val3 === val4);
    return result;
}

function useTernary() {
    let firstName = "john";
    let lastName = "john";
    let message = (firstName == lastName) ? "Same" : "Different";
    return message;
}



function combineArrays() {
    let fruits = ["apple", "banana", "orange"];
    let veggies = ["carrot", "broccoli", "spinach"];

    let combined = [...fruits];
    combined[0] = "pear";

    return {
        fruitList: fruits,
        veggieList: veggies,
        mixedList: combined
    };
}
let arrayResult = combineArrays();
console.log("Combined Array Result ====>", arrayResult);

const prntMsg = function() {
    console.log("Hello World")
}

prntMsg()

const adding = function(a,b){
    result = a+b;
    return result
}

let Adder = adding(10,20)
console.log("Adder======>", Adder)

const Arrow = () => console.log("HEllo WOrld")
Arrow()

const Addon = (a,b) => {
    let c = 100
    result = a+b+c;
    return result
}
let Adders = Addon(200,300)
console.log("Adders=====>",Adders)

function SumAdd(num1,num2) {
    function display() {
        return num1+num2;
    }
    return display
}
let SumAdder = SumAdd(1000,2000)
console.log("sumAdder=====>",SumAdder())

const PhoneNumberValid = (PH) => {
    if(PH.length > 10){
        return 'Invalid'
    }
    else if(PH.length < 10){
        return 'Invalid'
    }
    else {
        return 'Valid'
    }
}

let PhValid = PhoneNumberValid(9938923856)
console.log("Phvalid=====>", PhValid)