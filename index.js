#! /usr/bin/env node
import inquirer from "inquirer";
class customer {
    firstName;
    lastName;
    age;
    gender;
    phoneNo;
    Bank_Account;
    constructor(fN, lN, age, gen, phone, BanAcc) {
        this.firstName = fN;
        this.lastName = lN;
        this.age = age;
        this.gender = gen;
        this.phoneNo = phone;
        this.Bank_Account = BanAcc;
    }
}
class BankAccount {
    userName;
    credit;
    debit;
    Amount;
    Bank;
    constructor(user, cre, deb, bank, acc = amount) {
        this.userName = user;
        this.credit = cre;
        this.debit = deb;
        this.Bank = bank;
        this.Amount = acc;
    }
    bankAccount() {
        amount = 0;
        //       //credit amount
        if (this.credit > 0) {
            amount += this.credit;
            if (check == "NO") {
                console.log("Your account has been credited successfully!\n");
            }
            if (this.credit > 100) {
                amount--;
                if (check == "NO") {
                    console.log("And 1$ has been deducted from your account as per rule\n");
                }
            }
        }
        // debit amount
        if (this.debit <= amount) {
            if (amount > 0 && this.debit > 0) {
                amount -= this.debit;
                if (check == "NO") {
                    console.log("Transaction successful! please check your new account balance.\n");
                }
            }
        }
        else if (this.debit > amount) {
            if (check == "NO") {
                console.log("You don't have money to do this transaction\n");
            }
        }
        // Check Balance
        if (check == "YES") {
            console.log(`Your Account Balance is ${amount}$\n`);
            if (amount == 0) {
                console.log("Sorry, you have insufficient balance!\n");
            }
        }
        else {
            console.log("");
        }
        // get information
        if (info == "YES") {
            let val = new BankAccount(answer.fN + " " + answer.LN, creAmount, debAmount, answer.bank);
            console.log(val);
        }
    }
}
const answer = await inquirer.prompt([
    {
        name: "fN",
        type: "input",
        message: "what is your first name:",
        validate: (input) => {
            if (Number(input)) {
                return " invalid name.";
            }
            else if (input == "") {
                return "please fill this field";
            }
            else {
                return true;
            }
        },
    },
    {
        name: "LN",
        type: "input",
        message: "what is your surname:",
        validate: (input) => {
            if (Number(input)) {
                return " invalid name.";
            }
            else if (input == "") {
                return "please fill this field";
            }
            else {
                return true;
            }
        },
    },
    {
        name: "age",
        type: "number",
        message: "what's your age:",
        validate: (input) => {
            if (isNaN(input)) {
                return " invalid age.";
            }
            else if (input == "") {
                return "please fill this field";
            }
            else if (input > 102) {
                return "please write correct age";
            }
            else {
                return true;
            }
        },
    },
    {
        name: "gen",
        type: "list",
        message: "Choose your gender:",
        choices: ["Male", "Female", "Other"],
    },
    {
        name: "no",
        type: "number",
        message: "Enter your Phone number:",
        validate: (input) => {
            if (isNaN(input)) {
                return "write your number correctly";
            }
            else if (input == "") {
                return "please fill this field";
            }
            else {
                return true;
            }
        },
    },
    {
        name: "bank",
        type: "list",
        message: "Select your Bank Account:",
        choices: ["HBL Bank", "Allied Bank", "Islamic Bank", "Alfala Bank "],
    },
]);
console.log(`\nCongragulation! Your ${answer.bank} account has been created successfully.`);
const respon = new customer(answer.fN, answer.LN, answer.age, answer.gen, answer.no, answer.bank);
console.log(respon);
// delcare vairable for global scope
let creAmount;
let debAmount;
let check = "NO";
let info = "NO";
const ans = await inquirer.prompt([
    {
        name: "ask",
        type: "list",
        message: "Do You want to credit amount:",
        choices: ["YES", "NO"],
    },
    {
        name: "ask2",
        type: "list",
        message: "Do You want to debit amount:",
        choices: ["YES", "NO"],
    },
]);
if (ans.ask == "YES") {
    let ask = await inquirer.prompt({
        name: "Cre",
        type: "number",
        message: "Enter Your credit amount",
        validate: (input) => {
            if (isNaN(input)) {
                return "Invalid amount";
            }
            // else if((input)){
            //   return "You have to credit from 1$"
            // }
            else if (input == 0) {
                return `credit failed... \nYou to have to credit from 1$`;
            }
            else if (input == "") {
                return "You must fill this field";
            }
            else {
                return true;
            }
        },
    });
    creAmount = ask.Cre;
}
else {
    creAmount = 0;
}
if (ans.ask2 == "YES") {
    let ask = await inquirer.prompt({
        name: "deb",
        type: "number",
        message: "Enter Your debit amount",
        validate: (input) => {
            if (isNaN(input)) {
                return "Invalid amount";
            }
            else if (input == "") {
                return "You must fill this field";
            }
            else {
                return true;
            }
        },
    });
    debAmount = ask.deb;
}
else {
    debAmount = 0;
}
let amount = 0;
let get = new BankAccount(answer.fN + " " + answer.LN, creAmount, debAmount, answer.bank);
get.bankAccount();
const ans2 = await inquirer.prompt([
    {
        name: "ask3",
        type: "list",
        message: "Check Account Balance:",
        choices: ["YES", "NO"],
    },
    {
        name: "ask4",
        type: "list",
        message: "Get Account information",
        choices: ["YES", "NO"],
    },
]);
check = ans2.ask3;
info = ans2.ask4;
get.bankAccount();
