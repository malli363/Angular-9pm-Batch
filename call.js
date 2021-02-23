// let obj={
//     key1 :"Hello_1"
// };
// function my_func(){
// console.log(this.key1);
// };
// my_func.call(obj);  

let obj = {
    key1:10
};
function my_fun(arg1,arg2,arg3){
console.log(this.key1+arg1+arg2+arg3);
};

my_fun.call(obj,20,30,40);

let arr=[10,20,30];
my_fun.apply(obj.arr);
let  my_fun1= my_fun.bind(obj);
my_fun1 (1,1,1);    