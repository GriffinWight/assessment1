/*
Create a new file called password.js. Write a program that does the following:

    Welcome the user to the password validator tool

    Prompt the user for a password to validate

    Check if the user’s password meets the following constraint:

        At least 10 characters long

    If the user’s password meets the constraint, show a success message to the user

    If the user’s password fails the constraint, show a failure message to the user
*/


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the password validator!')
console.log('Make sure that your password is atleast 10 characters long')
reader.question("Enter a password to validate: ",function(password){
    if(password.length >= 10){
        console.log('Your password,',password,'meets the required constraints')
    }
    else{
        console.log('Password does not meet the required constraints.')
    }


reader.close()

});
