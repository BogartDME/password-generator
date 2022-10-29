// Assignment Code
var generateBtn = document.querySelector("#generate");
//create the event click to make the promply appear


//create the prompt box to engage user
window.prompt("Choose how many characters your password should be")

//function to create output with user input


//create the arrays for the password character types
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialCharacters =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", ">", "<", "."]
const generatedPassword =[""]

//create prompt for length of password


//create prompt for lowercase (Y, N)
const responseLower = confirm("Would you like your password to contain lowercase letters?")
// if (responseLower ===confirm) 
//create prompt for uppercase (Y, N)
const responseUpper = confirm("Would you like your password to contain uppercase letters?")

//create prompt for numbers (Y, N)
const responseNumbers = confirm("Would you like your password to contain numbers?")

//create prompt for special characters (Y, N)
const responseSpecial = confirm("Would you like your password to contain special characters?")

//validate input and ensure one character type selected


//generate password


//display password



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
