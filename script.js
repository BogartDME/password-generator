// Assignment Code
var generateBtn = document.querySelector("#generate");
//create the event click to make the promply appear




//create the arrays for the password character types
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", ">", "<", "."]
var possibleCharacters =[]

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){ 

  
  const passLength= parseInt(window.prompt("Hello, human. Choose how many characters your password should be"))
  if (passLength<8 ||passLength>128){
    alert("Please choose a valid number between 8 and 128")
    return; // if true return will return to the function and start over. If false it will continue to the next if
  } 
  
  if (isNaN(passLength)){
    alert("Please choose a valid number, human.")
    return; // if true return will return to the function and start over. If false it will continue to the booleans for characters
  }

  //create confirm for lowercase (Y, N)
  const responseLower = confirm("Would you like your password to contain lowercase letters?")
  console.log (responseLower)
  if (responseLower) {
    possibleCharacters=possibleCharacters.concat(lowercase)
  }
  
  //create confirm for uppercase (Y, N)
  const responseUpper = confirm("Would you like your password to contain uppercase letters?")
  console.log(responseUpper)
  if (responseUpper) {
    possibleCharacters=possibleCharacters.concat(uppercase)
  }

  //create confirm for numbers (Y, N)
  const responseNumbers = confirm("Would you like your password to contain numbers?")
  console.log(responseNumbers)
  if (responseNumbers) {
    possibleCharacters=possibleCharacters.concat(numbers)
  }
  
  //create confirm for special characters (Y, N)
  const responseSpecial = confirm("Would you like your password to contain special characters?")
  console.log(responseSpecial)
  
  if (responseSpecial) {
    possibleCharacters=possibleCharacters.concat(special)
  }
  console.log (possibleCharacters)
  if(possibleCharacters.length===0){
    alert("Choose atleast one character type, human!")
  
    
  }
 
  let password= " ";
  
for (var i = 0; i < passLength; i++){
    
  var endResult = Math.floor(Math.random() * possibleCharacters.length);
  // return {possibleCharacters, passLength}
  
  password += possibleCharacters[endResult]
  console.log (endResult)
  console.log (password)
}
return password;
  
}



//for loop to create password with user input 








//generate password


//display password


  // var name = "human ";  
  // var options = greetUser(name)
  // console.log (options)
  // return "fake password"
  

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
