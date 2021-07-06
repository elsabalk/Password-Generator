// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword (characters, lowercaseConfirm) {

  //alert("How many characters would you like in your password?")  

  var numberChar = prompt("How many characters would you like in your password?", 
  characters);

  // Logic to generate number of char user wants
  if (isNaN(numberChar)) {
    alert ("Please enter a numerical value")
  }
  //change if statements
  if (numberChar < 8) {
    alert ("Please enter a numerical value 8 or greater")
  }
  if (numberChar > 128) {
      alert ("Please enter a numerical value 128 or less")
  }

  var lowerCase = confirm("Would you like to include lowercase characters?", 
  lowercaseConfirm);

  //if (lowerCase ==  )







} 






/*var length = 
var lowerCase = 
var upperCase = 
var numbers = 
var special = 
*/






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
