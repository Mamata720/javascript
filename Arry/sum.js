// let readlineSync = require("readline-sync");
// var num= readlineSync.question("enter the number")
// var num1= readlineSync.question("enter the number")
        
// var s=num+num1
// console.log("the sum of number",num+num1)
    

var marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
    ];
sum=0
for(var i of marks){
    for(var j of i){
        sum+=j
    }
}
console.log(sum)













