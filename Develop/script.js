// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var special = "!@#$%^&*()";
var finalPassword = ""
var generatePassword = function () {
  var passwordLength = prompt("How long would you like for your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid entry");
    return
  }
  else {
    var isLowercase = confirm("Do you want to include lower case in your password?");
    var isUppercase = confirm("Do you want to include upper case in your password?");
    var isNumeric = confirm("Do you want to include numeric in your password?");
    var isSpecial = confirm("Do you want to include special characters in your password?");
    for (var i = 0; i < passwordLength; i++) {
      if (isLowercase === true && finalPassword.length < passwordLength) {

        var randomIndex = Math.floor(Math.random() * lowercase.length)
        finalPassword = finalPassword + lowercase[randomIndex]
      }
      if (isUppercase === true && finalPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * uppercase.length)
        finalPassword = finalPassword + uppercase[randomIndex]
      }
      if (isNumeric === true && finalPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * numeric.length)
        finalPassword = finalPassword + numeric[randomIndex]
      }
      if (isSpecial === true && finalPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * special.length)
        finalPassword = finalPassword + special[randomIndex]
      }
    }
    return finalPassword
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
