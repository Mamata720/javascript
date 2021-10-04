

let n=require('readline-sync')
var num=n.question("enter the any number")
var i=2
var count=0
while(i<num){
       if(num%i==0){
              count=count+1
       }
       i++
}
if(count==0){
       console.log("its prime number")
}
else{
       console.log("its not prime number")
}



