#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answers:{
    number1: number,
    number2: number,
    operator: string,
}= await inquirer.prompt([
    {
        type: "number",
        name: "number1",
        message: "Enter your first number",
        
    },
    {
        type: "number",
        name: "number2",
        message: "Enter your second number",
    },{
        type: "list",
        name: "operator",
        message: "Enter your operator",
        choices: ["+", "-", "*", "/","%"]
    }
])
const {number1, number2, operator} =answers;
let result
switch (operator){
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number1 / number2;
        break;
    case "%":
        result = number1 % number2;
        break;
        default:
            console.log("Invalid operator");
} console.log(`${number1} ${operator} ${number2}=${result}`);