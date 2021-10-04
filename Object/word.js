const list1=[]
word="MISSISSIPPI"
let output={}
for(i of word){
    if(list1.includes(i)){
        output[i]=output[i]+1
    }
    else{
        list1.push(i)
        output[i]=1
    }
}
console.log(output)
