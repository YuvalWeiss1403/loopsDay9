
//Ex 1
//-------------------------------------------------------------------------------------------------------------

function printNumbers(){
    for(let i =1; i<=10 ; i++){
        console.log(i);
    }
}
console.log("Ex 1 -1: ");
printNumbers();

//-------------------------------------------------------------------------------------------------------------

function printEven(){
    for(let i =2; i<=10 ; i+=2){
        console.log(i);
    }
}

console.log("Ex 1 -2: ");
printEven();

//-------------------------------------------------------------------------------------------------------------

function printEvenUntil(num){
    for(let i =2; i<=num ; i+=2){
        console.log(i);
    }
}

console.log("Ex 1 -3: ");
printEvenUntil(10);

//-------------------------------------------------------------------------------------------------------------

function printTill20Without13(){

    for(let i =1; i<=20 ; i++){
        if(i===13){
            i++;
        }
        console.log(i);
    }
}

console.log("Ex 1 -4: ");
printTill20Without13(10);

//-------------------------------------------------------------------------------------------------------------

function printNumbersDescending (){
    for(let i =10; i>=1 ; i--){
        console.log(i);
    }
}
console.log("Ex 1 -5: ");
printNumbersDescending ();

//-------------------------------------------------------------------------------------------------------------

function printOddUntil7(){
    for(let i =1; i<=10 ; i++){
        if(i===7){
            break;
        }
        console.log(i);
    }
}
console.log("Ex 1 -6: ");
printOddUntil7();

//-------------------------------------------------------------------------------------------------------------

function PrintArray(){

    const array = [1,2,3,4,5,6,7,8,9,19,12,3,4,5,6,87,21,1,2];
    for(let i = 0 ; i < array.length ; i++){
        console.log(i);
    }
}
console.log("Ex 1 -7: ");
PrintArray();

//-------------------------------------------------------------------------------------------------------------

function printEvenNumbers(array){
    for(let i = 2 ; i<array.length;i+=2){
        console.log(i);
    }
}

const array = [1,2,3,4,5]
console.log("Ex 1 -8: ");
printEvenNumbers(array);

//-------------------------------------------------------------------------------------------------------------

function arraySum(arr){
    let sum=0;
    for(let i = 0 ; i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

const arr = [1,2,3]
console.log("Ex 1 -9: ");
console.log(printEvenNumbers(arr));

//-------------------------------------------------------------------------------------------------------------

function countLetter(word){
    return word.length();
}

console.log("Ex 1 -10: ");
console.log(printEvenNumbers("Yuval"));

//-------------------------------------------------------------------------------------------------------------

function sortarray(array){
    let evens =[];
    let odds = [];
    for(let i= 0; i <array.length;i++){
        if(array[i]%2===0){
            evens.push(array[i]);
        }else{
            odds.push(array[i]);
        }
    }
    console.log("Evens: " + evens);
    console.log("Odds: " + odds);
}

const Ex1_11_arr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
console.log("Ex 1 -11: ");
console.log(sortarray(Ex1_11_arr));

//-------------------------------------------------------------------------------------------------------------

function checkIfContainsY(str){
    if(str.includes("y")){
        console.log("Yes");
    }else{
        console.log("No");
    }
}
console.log("Ex 1 -12: ");
console.log(checkIfContainsY("yuval"));

//-------------------------------------------------------------------------------------------------------------

function findMax(numbers){
    let max=0 ;
    for(let i =0 ; i <numbers.length;i++){
        if(numbers[i]>max){
            max=numbers[i];
        }
    }
    return max;
}
const numbers =[2,5,8,45,768,86];
console.log("Ex 1 -13: ");
console.log(findMax(numbers));

//-------------------------------------------------------------------------------------------------------------

//Ex 2 
//-------------------------------------------------------------------------------------------------------------

function ex2_1( ){
    let i = 0;
    while(i<=10){
        console.log(i);
        i++;
    }
}
ex2_1();

function ex2_2( ){
    let i = 2;
    while(i<=10){
        console.log(i);
        i+=2;
    }
}
ex2_2();

function ex2_3( ){
    let i = 1;
    while(i<=10){
        console.log(i);
        i+=2;
    }
}
ex2_3();

function ex2_4( ){
    let i = 10;
    while(i>0){
        console.log(i);
        i--;
    }
}
ex2_4();

function ex2_5( ){
    let num = prompt("enter number");
    let i = 0;
    while(i<=num){
        console.log(i);
        i++;
    }
}
ex2_5();

function ex2_6( ){
    let num = prompt("enter number");
    let i = 0;
    let sum = 0;
    while(i<=num){
        sum+=i;
        i++;
    }
    return sum;
}
ex2_6();

function ex2_7( ){
    let num = prompt("enter number");
    let i = 0;
    let factorial  = 1;
    while(i<=num){
        factorial *= i;
        i++;
    }
    return factorial ;
}
ex2_7();

function ex2_8( ){
    let fuelLevel = prompt("enter starting fuel level");
    while(5000>fuelLevel || fuelLevel>30000){
        fuelLevel = prompt("enter fuel level");
    }   
    console.log(`last fuel level ${fuelLevel}`);
}

ex2_8();

//-------------------------------------------------------------------------------------------------------------

//Ex 3 
//-------------------------------------------------------------------------------------------------------------

function printAsterisk(){
    for(let i = 0 ; i<=7 ; i++){
        console.log("*".repeat(i));
    }
}
printAsterisk();


function multiplicationTable(){
    for(let i = 1; i<=10 ; i++){
        let temp = [];
        for(let j =1; j<=10; j++){
            temp.push(i*j);
        }
        console.log(temp);
    }
}
multiplicationTable();
//-------------------------------------------------------------------------------------------------------------

//Ex 4 - Bonus
//-------------------------------------------------------------------------------------------------------------

function FibonacciSequence(num){
    let i = 0;
    let Fibo =[0,1];
    let temp = 0; 
    while(temp<num){
        temp =Fibo[i]+Fibo[i+1];
        Fibo.push(temp)
        i++;
    }
    console.log(Fibo); 
} 

FibonacciSequence(45);


function isPalindrome(str){
    let check = true;
    let strlength = Math.floor(str.length/2)
    for (let i = 0; i < strlength; i++) {
        if(str[i] != str[str.length-i-1]){
            check=false;
        }
    }
    return check;
} 

console.log(isPalindrome("dad"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("yuval"));
console.log(isPalindrome("weiss"));