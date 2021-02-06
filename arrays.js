//Map Function//
/*console.log(
    [1,2,3,4,5].map((element,index)=>{
      return element*100
    })
);*/

const { sortAndDeduplicateDiagnostics } = require("typescript");



/*console.log(
    [100,200,300].map((element,index)=>{
        
        return element*100
    })
);*/


//filter//
/*console.log([100,250,260,200,300,400,500].filter((element,index)=>{ 
 return element <=400;
})       // [ 100, 250, 260, 200, 300, 400 ]
);


console.log(
  [100,200,300,400,500].filter((element,index)=>{
         return element*40;
  }).filter((element,index)=>{
  return element<=400;
  })
);*/
/* //reduce///
console.log(
  [1,2,3,4,5,6].reduce((firstElement,lastElement)=>{
           return firstElement+lastElement;
  })
)*/
/*console.log(
  [1,3,4,5,6].map((element,index)=>{
return element;
  }).filter((element,index)=>{
                  return element>=4;
  }).reduce ((firstElement,nextElement)=>{
          return firstElement+nextElement;
  })
);*/
    //ReduceRight


    /*console.log(["ReactJS","To","Welcome"].reduceRight((firstElement,nextElement)=>{
                      return firstElement+"" + nextElement;
    })
    );

console.log(["malli","Hello"].reduceRight((firstElement,nextElement)=>{
return firstElement+ "" +nextElement;
})
)*/

// let arr1= ["Malli"]
// let arr2 = ["buji"]
// let arr3 =["siva"]
// let arr4=arr1.concat(arr2,arr3);
// console.log(arr4);

// let arr5 =  [...arr1, ...arr2,...arr3];
// console.log(arr5);

// console.log([1,2,3,4,5,6].find((element,index)=>{
//      return element ===3;
// })
// );



// console.log([1,2,3,4,5].some((element,index)=>{
// return element<=67;
// })
// );
// console.log(
//   [1,2,3,4,5].every((element,index)=>{
//   return element<=50;
//   })
//   );

// let arr = [20,30,40];
// console.log(arr);
// arr.push(45);
// console.log(arr);

// let arr1=[0,1,2,3,4,5,6,7,8,9];
// console.log(arr1.slice(5,7));

// // let a1=arr1.slice(5);
// // let a2= arr1.slice(1,4)
// // let a3=a2.concat(a1);

// // console.log(a3);

// console.log([...arr1.slice(7,10),...arr1.slice(0,3)]);




// let arr2 = [0,1,2,3,4,5,6,7,8,9];
// a1=arr2.slice(5);
// a2=arr2.slice(0,4);
// let a3=a2.concat(a1);
// console.log(a3);
// console.log([...a2,...a1]);   

// let arr3=[10,20,30,40,50,60,70,80,90,100];
// arr3.copyWithin(1,4);
// console.log(arr3);


// let arr4=[10,20,30,40,50,60,70,80,90,100];
// arr4.copyWithin(2,5);
// console.log(arr4);

// let arr7=[10,20,30,40,50,60,70,80,90,100];
// arr7.copyWithin(8,9);                           
// console.log(arr7);


// console.log(
//   [10,50,20,40,30].sort((arg1,arg2)=>{
//     return arg1-arg2;              ////[ 10, 20, 30, 40, 50 ]   
//    })
//   );

//   console.log(
//     [10,50,20,40,30].sort((arg1,arg2)=>{
//       return arg2-arg1;               
//      })
//     );


// console.log(
//   [39,20,10,7,90,45,48,41,80].sort((arg1,arg2)=>{
//                  return arg2-arg1;
//   })[5]
// )                 /// 10 (min element)



// let arr1 =[10,20,10,40,20,30,10,20];
// console.log(
//   arr1.forEach((element,index)=>{
//     console.log(arr1.indexOf(element));
//   })
// )

// let arr2=[10,20,20,50,40,70,40,70,90,100];
// console.log(
//   arr2.forEach((element,index)=>{
//       console.log(arr2.indexOf(element));
//   })
// )
// let arr12 =[10,20,30,40,50,60,70.88,90];
// arr12.copyWithin(2,4,8);
// console.log(arr12);


// let arr14=[10,20,10,30,40,20,40,60,0,60];
// arr14.forEach((element,index)=>{
//          console.log(arr14.indexOf(element));
// });

// let arr15=[40,80,20,40,20,50,10,80,40];
// arr15.forEach((element,index)=>{
// console.log(arr15.indexOf(element));
// });

// let arr3=[10,20,30,10,20,30];
// console.log(
// arr3.filter((element,index)=>{
// return arr3.indexOf(element)  ==  index;
// })
// );

// let arr4=[10,30,20,10,50,10,30];
// console.log(
//   arr4 .filter((element,index)=>{
//           return arr4.indexOf(element)  == index;
//   }).sort((arg1,arg2)=>{
//             return arg2-arg1;
//   })
// );





 


 
// let arr8=[10,20,30,40,50,60,70,80,90,100];
// arr8.copyWithin(2,4,7);                           
// console.log(arr8);


// let arr9=[10,20,30,40,50,60,70,80,90,100];
// arr9.copyWithin(0,0,10);                           
// console.log(arr9);



// console.log(
//   [10,20,30,40,50].includes(30)
// );
// console.log(
//   ["mall","siva","ravi","buji","kapil"].includes("malli")
// );

// let arr11=[10,20,30,40,50,60,70,80,90,100];
// arr11.copyWithin(0,0,10);
// console.log(arr11);
// let arr15 =[40,50,10,20,10,60,80];
// arr15.forEach((element,index)=>{
// console.log(arr15.indexOf(element));
 
// });

// let arr=[10,20,30,40,50,60,70,80,90];
// console.log(arr.length);
// arr.length =5;
// /*console.log(arr[2], arr[5] , arr[4]);
// console.log([-1]);*/
// console.log(arr[-6]);


//Delete//.
/*let arr=[10,20,30,40,50];
  console.log(arr.length);
delete arr[2];
console.log(arr.length);
console.log(arr);*/

// let arr=[[10,20],[12,34,22,44],[267]];

// console.log(arr.flat(2).reduce((a,b)=>{
// return a+b;
// }) ); 

// let arr=[1,[[[[[[[[4]]]]]]]]];
// console.log(
// arr.flat(Infinity).reduce((arg1,arg2)=>{
// return arg1+arg2;
// })
// );

// let arr1= [1,2,3,4,5];
// let arr2=["one","two","three","four","five"];
// console.log(
//   arr1.map((element,index)=>{
//            return [element,arr2[index]];
//   }).flat(2)
// );


/*let arr = [ 10,20,30,40,50];
console.log( arr.reverse () ); //[ 50, 40, 30, 20, 10 ]
console.log(
Array.from("Hello").reverse().join("")
);                                   //olleH
console.log(
  Array.from("Hello").reverse().toString().replace(",","")   ///ol,l,e,H
);
console.log(
  Array.from("Hello").reverse().toString().replace(/,/g,"")
);      //olleH
*/
//repeat
/*console.log("10".repeat(2));
console.log("Hello".repeat(2));*/

//lastIndexOf
/*let arr=[10,20,30,40,50,10,20,30,40,50];
console.log(arr.lastIndexOf(40)); //8
console.log(arr.lastIndexOf(10));  //5
console.log(arr.lastIndexOf(60));  //-1 */

//trim
/*console.log(" Welcome ".length );//9
console.log(" Welcome ".trim().length);//7
console.log(" Welcome ".trimStart().length); //8
console.log(" Welcome ".trimEnd().length);//8*/



// console.log("Hello brothers".padStart(30,"*") ); //****************Hello brothers

// console.log("Welcopme".padEnd(20,"Reactjs")); //WelcopmeReactjsReact

// console.log("hello Welcome".split ("")
// );
// console.log(
//   "He,l,|,l,o".replace(/,/g,"").replace("|","").split("")
// ); ///[ 'H', 'e', 'l', 'l' , 'o']


// console.log(
//   "Welcome to Cognizant".substring(0,9),
//   "Hello Brothers".substr(0,8)
// );


let obj={"key1":"Hello_1","key2":"Hello_2","key3":"Hello_3","key4":"Hello_4"};
for(let key in obj){
console.log(obj [key] );
};










































































