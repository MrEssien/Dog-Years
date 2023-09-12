const myAge = 25;
//early years will be set as 2
let earlyYears = 2;
earlyYears *= 10.5; 
//-2 from my age toget later years
let laterYears = myAge - 2;
//times by 4 to ge the dog years 
laterYears *= 4;

console.log(earlyYears)
console.log(laterYears)

//To calculate dog years
let myAgeInDogYears = earlyYears + laterYears;
//for personality
let myName = "Philip Essien".toLowerCase()
console.log(`my name is ${myName}. I am Human ${myAge} years old in human years which is ${myAgeInDogYears}.`)