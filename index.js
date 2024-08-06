#! /usr/bin/env node
import { number, select, confirm, input } from "@inquirer/prompts";
import chalk from 'chalk';
async function startoperation() {
    while (true) {
        //----------------------name-----------------------------*/
        let name = await input({ message: chalk.blue("please enter your name:") });
        if (name === undefined || name.trim() === "") {
            console.log(chalk.red("please enter a name"));
        }
        else {
            console.log(chalk.green(`Hello, ${name}!`));
            // -------------------consent--------------------------*/
            let constent = await confirm({ message: chalk.blue(`Dear ${name},do you want to calculate some thing`) });
            // -------------------calculation starts-------------------------*/
            if (constent === true) {
                let choice = await select({
                    message: chalk.blue("which calculation do you want?"),
                    choices: [
                        { name: "Division", value: "division", description: "here you can divide any number" },
                        { name: "Multiplication", value: "multiplication", description: "here you can multiply any number" },
                        { name: "Addition", value: "addition", description: "here you can add any number" },
                        { name: "Subtraction", value: "subtraction", description: "here you can subtract any number" },
                    ]
                });
                console.log(chalk.yellow(`You chose: ${choice}`));
                let n1 = await number({
                    message: chalk.blue("please enter your first number"),
                });
                let n2 = await number({
                    message: chalk.blue("please enter your second number"),
                });
                //------------------calculations--------------------------*/
                if (n1 === undefined || n2 === undefined) {
                    console.log(chalk.red("Please enter valid numbers for both inputs."));
                }
                else {
                    let result;
                    if (choice === "division") {
                        result = n1 / n2;
                    }
                    else if (choice === "multiplication") {
                        result = n1 * n2;
                    }
                    else if (choice === "addition") {
                        result = n1 + n2;
                    }
                    else if (choice === "subtraction") {
                        result = n1 - n2;
                    }
                    console.log(chalk.green(`The result of your calculation is: ${result}`));
                }
            }
            else {
                console.log(chalk.yellow("It's your choice"));
            }
        }
        let restart = await confirm({ message: ("do you want to do another calculation") });
        if (!restart) {
            console.log(chalk.green("Goodbye!"));
            break;
        }
    }
}
startoperation();
