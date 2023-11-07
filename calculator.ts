import inquirer from "inquirer";
import {sum, minus, multi, div} from "./operators/operators.js"

let result = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "num1"
    },

    {
        message: "Select operator",
        type: "rawlist",
        name: "operator",
        choices: ["+", "-", "*", "/"]
    },

    {
        message: "Enter second number",
        type: "number",
        name: "num2"
    }
])

if(result.operator === "+"){
    console.log(sum(result.num1, result.num2))
}

else if(result.operator === "-"){
    console.log(minus(result.num1, result.num2))
}

else if(result.operator === "*"){
    console.log(multi(result.num1, result.num2))
}

else if(result.operator === "/"){
    console.log(div(result.num1, result.num2))
}