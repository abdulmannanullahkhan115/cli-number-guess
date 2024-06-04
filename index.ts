import inquirer from 'inquirer';

let randomNumber=Math.floor(Math.random() * 3+1);
console.log("welcome to number guessing game")
let Answer=await inquirer.prompt(
[
    {
      name:"guess",
      type:'number',
      message:"what is you guess number between 1 and 5:"
}
       ]     )
if (randomNumber==Answer.guess) {
    console.log('your guess a correct number')
} else {
    console.log('sorry your guess number is wrong')
}
