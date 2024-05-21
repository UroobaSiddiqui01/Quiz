import inquirer from "inquirer";
import chalk from "chalk";

const questions = [
    {
        question: chalk.magentaBright("01-What is full form in HTML?"),
        choices:[
            "A programming language", "Hyper Text Markup Language",
            "None of the above",
        ],
        correct_answer:  "Hyper Text Markup Language" ,
    },
    {
        question: chalk.magentaBright("02-Which tag is used to define an ordered list?"),
        choices:["td" , "ol" , "ul"],
        correct_answer: "ol",
    },
    {
        question: chalk.magentaBright("03-What does HTML do?"),
        choices:["Web structure" , "App structure" , "None of these"],
        correct_answer: "Web structure" ,
    },
];

async function statQuiz() {
    console.log(
        chalk.greenBright("\n\t ********** Welcome To The Quiz Game *********\n")
    );
    let score =0;

    for (let question of questions) {
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "Answer",
                message: question.question,
                choices: question.choices,
            },
        ]);
        if (answer.Answer === question.correct_answer){
            console.log(chalk.yellow("Correct Answer"));
            score++;
        }else{
            console.log(chalk.yellow("Incorrect, Please try again!"));
        }
    }

    console.log(chalk.cyan("quiz end : Here are your results:"));
    console.log(
        chalk.yellowBright(
            `\n\tYour score is ${score} out of ${questions.length}\n`
        )
    );
    
}

statQuiz();