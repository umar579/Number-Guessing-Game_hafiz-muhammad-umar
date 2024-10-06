import inquirer from "inquirer";
//GENERATE A RANDOM NUMBER
const result = Math.floor(Math.random() * 10 + 1);
//GET INPUT FROM USER
const answers = await inquirer.prompt([
    {name:"userguessnumber",type:"number",message:"Guess the number(from 1 to 10)?"},
]);
//COMPARE BOTH AND GET RESULT
if(answers.userguessnumber === result){
    console.log("Congratulations... you guess the right number!")
}else{
    console.log("your answer is wrong please try again");
}