//Example 1
// function displayer(some){
//     console.log(some);
// }
// function myFirst(displayer){
//     displayer("Hii");
// }
// function mySecond(displayer){
//     displayer("Hello");
// }
// myFirst(displayer);
// mySecond(displayer)

//Example 2
// function myDisplayer(some){
//     console.log(some)
// }
// function myCaliculator(num1,num2){
//     return num1+num2;
// }
// const res=myCaliculator(5,3);
// myDisplayer(res);

//Example 3

// const myNumbers=[1,3,5,-1,2,3,-7,7,8,-8];

// const pos=removeNeg(myNumbers,(x)=>x>=0);
// function removeNeg(numbers,positiveNum){
//     const result=[];
//     for (let i of numbers){
//         if(positiveNum(i)){
//             result.push(i)
//         }
//     }
//     return result;
// }
// console.log(pos);

//Example 4 Asynchronous
// setTimeout(()=>console.log("Hello"),3000)

//Example 5
// setTimeout(function(){
//     myFunction("I Love U")
// },2000)
// function myFunction(message){
//     console.log(message);
// }

//Example 6

setInterval(dispalyTimer,1000)
function dispalyTimer(){
    let d=new Date();
    document.getElementById("root").innerHTML= d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}