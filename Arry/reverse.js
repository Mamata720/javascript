// const num=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var array1=[]
// for(var i=num.length-1;i>=0;i--){
//     array1.push(num[i])
// }
// console.log(array1)
var array="eyo"
var n=""
var a=array.length-1
while (a>=0){
    n+=array[a]
    a--
}
if (array==n){
    console.log("it is palindrom")
}
else{
    console.log("it is not palindrom")
}

  