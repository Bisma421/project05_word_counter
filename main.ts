#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("\n\t\tWORDS COUNTER\n"));

let answer = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a sentence:"
    }
])

// splitting and trimming
let words = answer.sentence.trim().split(" ");

console.log(chalk.bold("\nSentence Words:"));
console.log(words);
console.log(chalk.bold(`\nWords Count: ${chalk.green(words.length)}`));