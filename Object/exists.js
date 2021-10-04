let n=require('readline-sync')
let num=n.question('enter any propriter name')
var dict={"name":"Raju", "marks":56}
for(i in dict){
    if(i==n){
        console.log("exists")
        break
    }
    else{
        console.log('not exists')
        break
    }
}




