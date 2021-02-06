// // setTimeout(function(){
// //     console.log("i am boy ra");
// // },3000)
// // setTimeout(function(){
// //     console,log("hello");
// // }, 3000)

const { isFunctionTypeNode, LanguageServiceMode } = require("typescript");

// // setInterval(function() {
// //     console.log("brother");
// // }, 2000);


// // for(let i=0; i<5; i++){
// //     setTimeout(function()  {console.log(i);
        
// //     }, i*5000);

// // for(let i=0;i<7;i++){

// // };
// // console.log(i);

// // var data=100;
// // var data=200;
// // var data=300;
// // console.log(data);





// // const data=100;
// // data=200;
// // console.log(data);



// let f_one=()=>{
//     return "welcome";

// };
// console.log(f_one());
// console.log(f_one);
// let  malli=()=>{

// }
// ()=>{
    
// }

// let promise1 =new promise1((resolve,reject)=>{ 
//     setTimeout(() => {resolve("Hello");
// }, 5000);
// });
//     promise1.then((posres)=>{
//         console.log(posres);
//     },(NegRes)=>{
//         console.log(errres);
//     });
    
    // function malli(arg1){
    //     console.log(arg1);
    // };
    // malli( function siva (){
    //     return "Hello1";
    // });



    // function mean(pa1,pa2,pa3){
    //     console.log(pa1(),
    //     pa2(),
    //     pa3());
    // };
    // mean(function frontEnd() {
    //     return "angular";
    // },  function backEnd() {
    //      return "NodeJS";
    // },function dbfun () {
    //     return "Reactjs";
    // } );

//    function mern(arg1){
//   console.log(arg1());
//    };
//    mern(()=>{return "hello"});         ///by using array

// function mern(arg1){
// return arg1("hello", false);
// };
// mern((result,error)=>{
// if(!err){
//         console.log(res);
// }

// } );


// function fun_one(pa1,pa2,pa3){
//   return pa1("hello1")+'' +pa2("hello2")+' '+pa3("hello3");
// };
// fun_one((arg1)=>{console.log(arg1)  },
// (arg1)=>{console.log(arg1) },     
// (arg1)=>{console.log(arg1) } 
// );

 /*function add(num,callback){
  return callback(num+5,false);
};
  function sub(num,callback){
return callback(num-3,false); 
 };

 add(5,(addRes,error)=>{
 if(!error){
     sub(addRes,(subRes,error)=>{
       if(!error){
       
    console.log(subRes);             
       }
        
     });
    
 
 });*/
//  let arr=[20,30,40]
//  console.log(arr);
// arr.push(50);

// console.log(arr);             //[ 20, 30, 40, 50 ] 
// arr.pop(40);
// console.log(arr);         //[ 20, 30, 40 ]
// arr.unshift(10);
// console.log(arr);             //[ 10, 20, 30, 40 ]
// arr.shift(10);
// console.log(arr);           //[ 20, 30, 40 ]



// let arr=[20,30,40,50]
// arr.push (100);       //[ 20, 30, 40, 50, 100 ]
// console.log(arr);
// arr.pop(100);
// console.log(arr);       //[ 20, 30, 40, 50 ]

// arr.shift(20);
// console.log(arr);     //[ 30, 40, 50 ]

// arr.unshift(5);
// console.log(arr);       //[ 5, 30, 40, 50 ]

// let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(arr);  ///[10,20,30,40,50,60,70,80,90,100]

// arr.splice(4,2);
// console.log(arr);  ////[10, 20, 30,  40,70, 80, 90, 100]

// arr.splice(7,1);
// console.log(arr);    ////[10,20,30,40,70,80,90]
 

// arr.splice(3,2);
// console.log(arr);     //[ 10, 20, 30, 80, 90 ]

// arr.splice(0,1)
// console.log(arr); //[ 20, 30, 80, 90 ]

// arr.splice(3,1);
// console.log(arr);       //[ 20, 30, 80 ]

// arr.splice(1,1);
// console.log(arr);             //[ 20, 80 ] 




// let arr =[10,20,30,40,50,80,200,324,54,865,345,764];
// arr.splice(0,1);
// console.log(arr);   



// let arr= [10,20,30,40,50,60];

// arr.splice(2,0,30,31,32);
// console.log(arr);




//findIndex

// let arr=[10,20,30,40,50];
// console.log(
//   arr.findIndex((element,index)=>{
//  return element ===40;
// })
// );


// console.log(
//   arr.findIndex((element,index)=>{
//  return element ===400;
// })
// );


// let arr2= [10,20,30,40,50]
// let arr1=[
//   {"p_id":101,"p_name":"Soap","p_cost":300},

// {"p_id":102,"p_name":"pen","p_cost":450},

// {"p_id":103,"p_name":"Scale","p_cost":500},
// {"p_id":104,"p_name":"Lapto","p_cost":2000},
// {"p_id":105,"p_name":"pad","p_cost":800},
// ];
// console.log(
//   arr1.findIndex((element,index)=>{

//       return element.p_id === 105;
//   })
// );

// arr2.splice(arr2.findIndex((element,index)=>{       //[ 10, 20, 30, 50 ]
// return element.p_id   ===104;
// }),1);
// console.log(arr2);


// arr2.splice(arr2.findIndex((element,index)=>{
//  return element.p_id===103
// }),1)

// console.log(arr2);

// let arr1=[10,20,30,40,50,60,70,80,90,100];
//  console.log(arr1.slice(6,9) );

//  console.log( [...arr1.slice(6,9),...arr1.slice(0,3)])


 let arr4= [0,1,2,3,4,5,6,7,8,9,10];
  let a1 = arr4.slice(7);
  let a2= arr4.slice(0,5);

let a3=a2.concat(a1);
console.log(a3);
console.log([...a2,...a1]);





















