// for(i=0;i<10;){
//     console.log(i)   \* It will run indefinitely because we didn't given increment to it.*\
// }

// let n=require('readline-sync')
// let num=n.question("enter any number")
// for(i=1;i<=10;i++){
//     multi=num*i
//     console.log(num+"*"+i+"="+multi)
// }




// i=1
// while(i<=100){
//     console.log(i)
//     i++
// }

// for(i=1;i<=100;i++){
//     console.log(i)
// }


// for(var i=1;i<=100;i++){
//     if(i%7===0){
//         console.log(i)
//     }
// }

// i=1
// sum=0
// while(i<=100){
//     sum=sum+i
//     console.log(sum)
//     i=i+1
// }


// var sum=0;
// for(var i=1;i<=10;i++){
// const n=require('readline-sync');
// let num=n.questionInt("enter the number");
// sum=sum+num
// };
// console.log(sum);



// for(i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(-i)
//     }else{
//         console.log(i)
//     }
// }

// for(i=1;i<=100;i++){
//     if(i%3 ===0 && i%7 === 0){
//         console.log("NavGurukul");
//     }
//     else if (i%3 === 0){
//         console.log("Nav");
//     }
//     else if (i%7 === 0){
//         console.log("Gurukul");
//     }
//     else{
//         console.log(i);
//     }
// }


// var i=156
// while(i<166){
//     console.log(i-155)
//     i+=1
// }



// let n=require("readline-sync");

// let choose_ascii=(n.question("enter number: "));  \\\\\\\\\

// var ascii_char=94+choose_ascii

// for (var i=94;i<=ascii_char;i++) {

//        console.log(chr(i),end="");

// }




// let c=require("readline-sync");
// let loop_time=c.question("enter loop time: ");
// var maxi=0;
// let lis=[ ]
// for (let i=1;i<=loop_time;i++) {
//     let num=c.question("enter number: ")
//     lis.push(num)
// }
// var maxi=lis[0];
// for (let j=0;j<lis.length;j++) {
//     if (maxi<lis[j]) {
//         [maxi=lis[j]]
//     }
// }
// console.log(maxi)



// const result = {
//     success: ["max-length", "no-amd" ,"prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
// };
// const success=result.success
// const store=success.length
// for(const value in success){
// console.log(success[value])
// 


var row = 5
while (row>=1){
   var column=1
   str=""
   while(column<=5){
       str=str+row+" ";
       column+=1;
   }
   console.log(str);
   row-=1;
}










