// write a program to print marks for studens in an object using for loop

let marks = {
    prakash : 90 ,
    rahul : 85 ,
    sunil : 50
}

// console.log(Object.keys(marks))

for (let i = 0 ; i < Object.keys(marks).length ; i ++ ){
    console.log("The mark of " + Object.keys(marks)[i] +" is " + marks[Object.keys(marks)[i]])
}

// solve the first questuion with for in loop 

for (let key in marks){
    console.log("the marks of " + key + " is " + marks[key])
}

// write a function to take an  number-input and match it with an existing number if numbers are not match then console try again

let existNumber = 23 ;
let i
while (i != existNumber){
    console.log("try again")
  i = prompt("Enter a number")

}
console.log("you entered write number")


// write a function to get mean of 5 numbers

const mean = (a, b, c, d, e)=>{
   console.log((a+b+c+d+e)/5)
}

mean(4,5,6,7,8)