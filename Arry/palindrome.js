// var Name=['m','a','l','a','y','a','l','a','m'];
// var new_arr=[]
// for(i=Name.length-1;i>=0;i--){
//     new_arr.push(Name[i])

// }
// var count=0
// for(j=0;j<Name.length;j++){
//     if(new_arr[j]==Name[j]){
//         count++
//     }
// }
// if(count==Name.length){
//     console.log("it is palindrome ")

// }else{
//     console.log("not palindrome")
// }



// var Name=['m','a','l','a','y','a','l','a','m']
// var n=""
// var a=Name.length-1
// while(a>=0){
//     n+=Name[a]
//     a--
// }
// if (Name==n){
//     console.log("it is palindrome")
// }
// else{
//     console.log("it is not palindrom")
// }



var array=['m','a','l','a','y','a','l','a','m']
var n=""
var b=[]
var a=array.length-1
while (a>=0){
    n+=array[a]
    b.push(array[a])
    a--
}
if (array==n){
    console.log("it is palindrom")
}
else{
    console.log("it is not palindrom")
}

