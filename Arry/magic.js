let a=[[3,6,6],
    [1,5,9],
    [6,7,2]]
var i=0;
var sum1=0;
var sum2=0;
var sum3=0;
var sum4=0;
while (i<a.length){
    var row=0;
    var sum=0;
    while (row<a.length){
        sum+=a[i][row];
        row+=1}
    console.log(sum);
    var diagonal=0;
    while (diagonal<a.length){
        if (i==diagonal){
            sum1+=a[i][diagonal];
        }
        diagonal+=1;
    }
    var column1=0
    while (column1<1){
        sum2+=a[i][column1];
        column1+=1;
    }
    var column2=1
    while (column2<2){
        sum3+=a[i][column2];
        column2+=1;
    }
    i+=1
    
}
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
if (sum==sum1&&sum1==sum2&&sum2==sum3&&sum3==sum4){
    console.log("magic square")
}
else{
    console.log("not a magic square")
}