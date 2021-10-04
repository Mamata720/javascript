function questions(){
    const question_list = [
        "How many continents are there?",             
        "What is the capital of India?",            
        "NG mei kaun se course padhaya jaata hai?"    
    ]
    return question_list
}
let questions_new=questions()


function options(){
    const options_list = [
        // pehle question ke liye options
        ["Four", "Nine", "Seven", "Eight"],
        // second question ke liye options
        ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
        // third question ke liye options
        ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
    ]
    return options_list
}
let options_new=options()
function solution(){
    const solution_list = [3, 4,1]
    return solution_list

}
let solution_new=solution()
function answers(){
    answer_list=[
        ["1 four","3 seven"],
        ["2 Bhopal","4 Delhi"],
        ["1 software engineering","4 agriculture"]
     
    ]
    return answer_list
}
answers_new=answers()
console.log("KAUN BANAYGA CODEPATI (KBC)")
var i=0
var s=0
var count=0
while (i<questions_new.length){
    console.log(questions_new[i])
    var a=0
    var b=i
    while (a<options_new[i].length){
        k=options_new[b][a]
        console.log(a+1,k)
        a=a+1
    }if (count<1){
        let readlineSync=require("readline-sync");
        var num=readlineSync.question("do you want 5050 lifeline");
        if (num=="yes"){
            k=0
            while (k<answers_new[i].length){
                console.log(answers_new[b][k])
                k+=1
                console.log(answers_new[b])
               var num2=readlineSync.question("enter your answer");
                if (num2==solution_new[i]){
                    s+=10000
                    console.log("your answer is correct")
                    console.log ("you win Rs/",s)
                }else{
                    console.log("incorrect answer")
                    console.log("you can't play again")
                    console.log("you win Rs/",s)
                    // break
                }
                count+=1
            }
        }else{
            
            var m=readlineSync.question("enter your answer:");
        }
        if (m==solution_new[i]){
            console.log("congrats your answer is right")
                s+=10000
            console.log("you win Rs/",s)
        }else{
            console.log("No chance")
            console.log("your answer is wrong")
            console.log("you win",s)
            // break
        }
    }else{
       let readlineSync=require("readline-sync"); 
       var k=readlineSync.question("enter your answer");
        if (k==solution_new[i]){
            console.log("right answer")
            s+=10000
            console.log("you win Rs/",s)
        }else{
            console.log("no chance")
            console.log("your answer is wrong")
            console.log("you win Rs/",s)
            // break
        }
    }
    i++
console.log("___congrulation you are a part of__KON BANAYGA CODEPATI__")
console.log("you win Rs/",s)
console.log("THANKYOU BEING PART OF KBC")
}