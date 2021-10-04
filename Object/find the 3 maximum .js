var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
var m=[]
var n=[]
var p=[]
for(i in my_dict){
    m.push(my_dict[i])
    for(j of m){
        if(my_dict[i]>j){
            n.push(my_dict[i])
        }
        if(n.length===3){
            break
        }
        
    }
}
console.log(n)
