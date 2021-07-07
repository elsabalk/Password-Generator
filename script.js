// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

//Function contains logic for user choices
function generatePassword(characters, lowercaseConfirm, uppercaseConfirm, specialConfirm, numbersConfirm) {

    //Prompt and capture use input for desired number of characters in password
    var numberChar = prompt("How many characters would you like in your password?",
        characters);

    //Verifies user input is numerical
    if (isNaN(numberChar)) {
        alert("Please enter a numerical value");
    }

    //Verifies user input is correct length
    if (numberChar < 8) {
        alert("Password length must be at leaset 8 characters");
    }

    if (numberChar > 128) {
        alert("Password length must be less than 129 characters");
    }

    //Logic to continue password generator if user input meets criteria
    if (!isNaN(numberChar) & numberChar >= 8 & numberChar <= 128) {

        //Verifies user choice
        var lowerCase = confirm("Would you like to include lowercase characters?",
            lowercaseConfirm);

        if (lowerCase == true) {
            var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        } else {
            lowerCaseLetters = "";
        }

        //Verifies user choice
        var upperCase = confirm("Would you like to include uppercase characters?",
            uppercaseConfirm);

        if (upperCase == true) {
            var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } else {
            upperCaseLetters = "";
        }

        //Verifies user choice
        var special = confirm("Would you like to include special characters?",
            specialConfirm);

        if (special == true) {
            var specialLetters = "#!$%?:,";
        } else {
            specialLetters = "";
        }

        //Verifies user choice
        var numbers = confirm("Would you like to include numbers?",
            numbersConfirm);

        if (numbers == true) {
            var numbersLetters = "1234567890";
        } else {
            numbersLetters = "";
        }

        //Combines characters to generate password based on user input
        if (lowerCase == true || uppercase == true || special == true || numbers == true) {
            var combine = lowerCaseLetters + upperCaseLetters + specialLetters + numbersLetters;
            var finalPassword = getOutputPassword(numberChar, combine);
            return finalPassword;
        }
    }
}

//This function takes in the user input length and choice of characters and returns a random combination
function getOutputPassword(lengthVal, charCombine) {
    var result = "";
    var charactersLength = charCombine.length;
    for (var i = 0; i < lengthVal; i++) {
        result += charCombine.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);