#! /usr/bin/env node

import inquirer from "inquirer"

let mybalance = 10000;
let mypin = 1234;

let PinAnswer = await inquirer.prompt (
    [
        {
            name:"q1",
            message:"Enter your pin",
            type:"number",

        }
    ]
);

if(PinAnswer.q1 === mypin)
{
    console.log("wellcome to your account");


    let operation = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["Withdrawl","checkBalance"]


            }
        ]
    );

    if(operation.operation === "Withdrawl"){
        let amountans = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter the amount you want to withdrawl",
                    type: "number",
                }
            ]
        );
        if(amountans.amount > mybalance){
            console.log("insufficient balance");
        }
    
        mybalance -= amountans.amount;
        console.log("Your Remaining Balance is: " +  mybalance);
    }
    else if (operation.operation === "checkBalance"){
        console.log("Your Balance is: " + mybalance);
        }
    
}
else {
    console.log("incorrect pin number")
}

