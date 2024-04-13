#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    { message: "select your operation", type: "list", name: "opertation",
        choices: ["addition", "minus"] },
]);
console.log(answer);
if (answer.opertation === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.opertation === "minus") {
    console.log(answer.firstnumber - answer.secondnumber);
}
