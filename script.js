// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}






function generatePassword (characters, lowercaseConfirm, uppercaseConfirm, specialConfirm, numbersConfirm) {

  //alert("How many characters would you like in your password?")  

var numberChar = prompt("How many characters would you like in your password?", 
characters);

// Logic to generate number of characters user wants
if (isNaN(numberChar)) {
  alert ("Please enter a numerical value");
}
  //change if statements
if (numberChar < 8) {
  alert ("Password length must be at leaset 8 characters");
}
if (numberChar > 128) {
  alert ("Password length must be less than 129 characters");
}

  //Returns true or false
var lowerCase = confirm ("Would you like to include lowercase characters?", 
lowercaseConfirm);

if (lowerCase == true) {
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
} else {
  lowerCaseLetters = "";
}


var upperCase = confirm ("Would you like to include uppercase characters?",
uppercaseConfirm);

if (upperCase == true) {
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} else {
  upperCaseLetters = "";
}


var special = confirm ("Would you like to include special characters?",
specialConfirm);

if (special == true) {
  var specialLetters = "#!$%?:,";
} else {
  specialLetters = "";
}


var numbers = confirm ("Would you like to include numbers?",
numbersConfirm);

if (numbers == true) {
  var numbersLetters = "1234567890";
} else {
  numbersLetters = "";
}


if (lowerCase == true || uppercase == true || special == true || numbers == true) {
  var combine = lowerCaseLetters + upperCaseLetters + specialLetters + numbersLetters;

  var finalPassword = getOutputPassword(numberChar, combine);
  
  return finalPassword;
}

}

function getOutputPassword(lengthVal, charCombine) {
  var result = "";
  var charactersLength = charCombine.length;
  for (var i = 0; i < lengthVal; i++ ) {
  result += charCombine.charAt(Math.floor(Math.random() * charactersLength));
}
 return result;
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
