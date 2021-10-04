var list1=["one","two","three","four","five"]
var list2=[1,2,3,4,5,]
n={}
for(i in list2){
    n[list1[i]]=list2[i]

}
console.log(n)