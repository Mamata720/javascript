// const number=[45,4,9,16,25]
// let sum=number.reduce(myFunction)
// function myFunction(total,value){
//     return total+value
// }

const numbers = [1, 2, 3, 4, 5];

function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] + 1);
  }
}

addOne(numbers);
