#!/usr/bin/env node
const program = require('commander');
// const inquirer = require('inquirer');

const {addCustomer, findCustomer,updateCustomer,removeCustomer, listCustomers}=require('./index');


// const questions=[
//     {
//         type:'input',
//         name:'firstname',
//         message:'Customer first name'
//     },
//     {
//         type:'input',
//         name:'lastname',
//         message:'Customer last name'
//     },
//     {
//         type:'input',
//         name:'phone',
//         message:'Customer number'
//     },
//     {
//         type:'input',
//         name:'email',
//         message:'Customer email address'
//     }
// ]



program.version('1.0.0').description('Client Management System');

program
    .command('add <firstname> <lastname> <phone> <email>')
    .alias('a')
    .description("Add a customer")
    .action((firstName,lastName,phone,email)=>{
        addCustomer({firstName, lastName, phone, email})
    })

// program
//     .command('add')
//     .alias('a')
//     .description('Add a Customer')
//     .action(()=>{
//         inquirer.prompt(questions).then(answers=>addCustomer(answers));
//     });


program
    .command('find <name>')
    .alias('f')
    .description("Find a customer")
    .action((name)=>{
        findCustomer(name);
    })


// program
//     .command('update <_id>')
//     .alias('u')
//     .description("Update a customer")
//     .action((_id)=>{
//         prompt(questions).then(answers=>updateCustomer(_id,answers));
//     })

program
    .command('remove <_id>')
    .alias('r')
    .description("Remove Customer")
    .action((_id)=>{
        removeCustomer(_id);
    })


program
    .command('list')
    .alias('l')
    .description("List all Customers")
    .action(()=>{
        listCustomers();
    })

program.parse(process.argv);