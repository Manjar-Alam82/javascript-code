// for( let i= 20; i>= 1; i --){
//     console.log(i)
// }


// for(let i=1; i<=11;i++){
//     if(i===5 || i===7)continue;
//     console.log(i)
// }

// switch(2){
//     case 1:
//     console.log("ejaz")
//     break;
//       case 2:
//       console.log("dilshad")
//     break;
//       case3:
//       console.log("nisar")
//     break;
//       case 4:
//       console.log("manjar")
//     break;
// }

// for(let i=1; i<=20;i++){
//     if(i%2 === 1){
//         console.log(i)
//     }
// }

// for(let i = 1; i <= 100; i++){
//     if(i % 2=== 0){
//      console.log(i);
//     }
   
// }
// for(let i = 100; i>0; i --){
//     console.log(i)
// }

// switch (3) {
//    case 1:
//     console.log("manjar");
// break;
//  case 2:
//     console.log("dilshad");
// break;
//  case 3:
//     console.log("ejaz");
// break;
//  case 4:
//     console.log("sahil");
// break;
//  case 5:
//     console.log("nisar");
// break;
// }
   
// for( let i = 0; i <200 ; i ++){
//     if(i%3 === 0){

//         console.log(i);
//     }
// }

// for(let i = 121; i >11 ; i --){
//     console.log(i)
// }

// let role = "admin";
// let obj = {
//     name: "manjar",
//     age: 22,
//     email: "manjarmd690@gmail.com",
//     address :{
//     city: "katihar",
//     } 
//     [role]: "manjar",
// }

// let a = 12;
// if (a > 10){

// console.log("hello");
// }

// for (let i = 1; i < 20; i ++){
//     console.log(i);
// }

// for ( let i = 1; i< 21; i ++ ){

//     if ( i %2 === 0){
//         console.log(i);
//     }
// }


// for ( let i = 1; i <21; i+=2){

// console.log(i)
// }

// for( let i = 1; i<20; i++){
//     console.log(i);
// }

// let age= prompt("number batao");
// if (age === null){
//     console.error("you cancelled it ");
// }
// else{
//  if (age.trim()=== ""){ 
//  console.error("bhai dhang se likho");
// }
// else{
//     age =Number( age .trim());
//     if (isNaN(age)){ 
//     console.error("bhai please no dalo");
//     }
// else{
//     console.log("confirm ye no hai");
// }

// }
// }

// let age = prompt("User ki age batao");

// if (age === null) {
//     console.error("You cancelled");
// } else {
//     if (age.trim() === "") {
//         console.error("Please enter your age");
//     } else {
//         age = Number(age);

//         if (isNaN(age)) {
//             console.error("Please enter a valid number");
//         } else {
//             if (age < 0) {
//                 console.error("Invalid age");
//             } else if (age >= 18) {
//                 console.log("You can vote");
//             } else {
//                 console.log("You can't vote");
//             }
//         }
//     }
// }
// uper niche dono same hai

// let age = prompt("User ki age batao");

// if (!age) {
//     console.error("You cancelled or entered nothing");
// } else if (isNaN(age)) {
//     console.error("Please enter a valid number");
// } else {
//     age = Number(age);

//     if (age < 0) {
//         console.error("Invalid age");
//     } else if (age >= 18) {
//         console.log("You can vote");
//     } else {
//         console.log("You can't vote");
//     }
// }


// for (let i = 1; i<11; i++){
//     console.log(`38 x ${i} = ${38*i}`);
// }


// let count = 0;

// for (let i = 1; i< 16; i++){
// if(i < 8){
//     ++ count
//     console.log(i)
// }
// }


// let password = "manjaralam";

// let pass = prompt("password  batao");
// if(pass === null){
//     console.log("you cancelled it..");
// }
// else{
//     if(pass === password){
//         console.log("matched");
//     }
//     else{
//         console.log("not matched");
//     }
// }


// let i = 1;

// while(i< 11){
//     console.log("hello");
//     i++;
// }


// let attempts = 0;

// let khulgaya = false;
// let pass = "manjar";
// let password = prompt("password dalo");
// attempts++;

// if(password === pass) khulgaya = true;

// while (password !==pass){
// if(attempts === 3){
//     console.log("accoun locked");
//     break;
// }

// password = prompt("password dalo");
// if(password === pass) khulgaya = true;
// attempts++;
// }
// if (khulgaya === true) console.log("account open")


// let word = prompt ("words likho");
// let counter = 0;
// while( word !== "stop"){
//     if(word === "yes")counter++;
//     word = prompt ("words likho");
// }
// console.log(`total time yes count: ${counter}`);


// for (let i = 1; i <51; i++){
//     if(i%7 ===0){ 
//     console.log(i);

//     }
// }



// let sum = 0;

// for (let i =1; i<31; i++){

//     if(i%2 !== 0){
// sum = sum+i;
//     }
// }
// console.log(sum);


// let num =+prompt("number bolo");

// while(num %2 !==0){
//     num =+prompt("number bolo");
//     console.log(num);
// }


// let start = +prompt("start");
// let end = +prompt("end");

// if (start > end ) console.error(" start can not be bigger than end");
// for(let i= start; i <= end; i++){
// console.log(i)
// }


// if (2 > 5) {
//     console.log("yes");
// } else {
//     if (10 < 16 ) {
//         console.log("no");
//     }
// }

// for(let i =1; i <10; i++){
//     if(i%2 || 0);
//     console.log(i)
//     }


// Advance Javascript /////////////////////////////////////////////


// let promise = new Promise(function(resolve, reject) {

//   let success = true;

//   if (success) {
//     resolve("Kaam ho gaya ");
//   } else {
//     reject("Error aa gaya ");
//   }

// });


// function orderFood() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let foodReady = true;

//       if (foodReady) {
//         resolve("Food delivered ");
//       } else {
//         reject("Restaurant closed ");
//       }
//     }, 3000);
//   });
// }

// orderFood()
//   .then(msg => console.log(msg))
//   .catch(err => console.log(err));


// function step1() {
//   return Promise.resolve("Step 1 done");
// }

// function step2(msg) {
//   return Promise.resolve(msg + " → Step 2 done");
// }

// step1()
//   .then(res => step2(res))
//   .then(final => console.log(final))
//   .catch(err => console.log(err));



// function loadData(callback) {
//   setTimeout(() => {
//     console.log("Data loaded");
//     callback();
//   }, 2000);
// }

// function processData() {
//   console.log("Data processed");
// }

// loadData(processData);


// let promise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Kaam ho gaya ");
//   } else {
//     reject("Kaam fail ");
//   }
// });

// promise
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Server se data mil gaya ");
//     }, 2000);
//   });
// }

// getData()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));



setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
