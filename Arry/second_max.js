const num=[50, 40, 23, 70, 56, 62, 5, 10, 7]
max=0
second_max=0
for(i=0;i<num.length;i++){
    if(max<num[i]){
        if(second_max<max){
            max=second_max;
        }
        max=num[i]
    }
    else{
        if(second_max<num[i]){
            second_max=num[i]
        }
    }
}
console.log(second_max)



