var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
var arr1=[]
for(i of list1){
    if(!list2.includes(i)){
        arr1.push(i)
    }
}
console.log(arr1)