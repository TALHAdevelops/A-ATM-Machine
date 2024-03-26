#! /usr/bin/env node

console.log("TO run code enter following details:");
console.log("Account No is 101010");
console.log("Pin Code is 1234");

import inquirer from "inquirer";

let myBalance = 100000;
let accountNumber = 101010;
let myPin = 1234;

let account = await inquirer.prompt([
  {
    name: "AccountNo",
    type: "number",
    message: "Enter your Account Number :",
  },
]);
if (account.AccountNo === accountNumber) {
  let pin = await inquirer.prompt([
    {
      name: "Pincode",
      type: "number",
      message: "Enter your Pin Code :",
    },
  ]);
  if (pin.Pincode === 1234) {
    console.log("Welcome to your account");
    console.log(`Your account balance is: ${myBalance}`);
  }
} else {
  console.log("Wrong pin code");
}
let transaction = await inquirer.prompt([
  {
    name: "Trans",
    type: "list",
    message: "Select your Transaction method :",
    choices: ["Withdraw", "Deposit", "Balance check"],
  },
]);
if (transaction.Trans === "Withdraw") {
  let withdraw = await inquirer.prompt([
    {
      name: "Wamount",
      type: "number",
      message: "Enter the amount :",
    },
  ]);
  if (withdraw.Wamount <= myBalance) {
    console.log(
      `Now your remaining balance is ${myBalance - withdraw.Wamount}`
    );
  } else {
    console.log("Insufficient balance");
  }
};
if (transaction.Trans === "Deposit") {
  let deposit = await inquirer.prompt([
    {
      name: "Damount",
      type: "number",
      message: "Enter the amount :",
    },
  ]);
  console.log(`Now your account balance is ${myBalance + deposit.Damount}`);
};
if (transaction.Trans === "Balance check") { 
  console.log(`Your account balance is ${myBalance}`);
};


console.log("Thanks for using our ATM machine.");

