// Assignment Code
var generateBtn = document.querySelector("#generate");

var lwrcase = "abcdefghijklmnopqrstuvwxyz";



function generatePassword() {

  var pwd_lngth = parseInt(prompt("Please choose a password character length"));
  while (!(pwd_lngth >= 8 && pwd_lngth <= 128)) {

    alert("Password must be no less than 8 characters and no more than 128 characters");

    pwd_lngth = parseInt(prompt("Please choose a password character length within the accepted range"));

  }

  var pwd = [];

  for (i = 0; i < pwd_lngth; i++) {
    pwd.push(lwrcase[Math.floor(Math.random() * 26)]);    //adding to end of pwd array, a rand entry from lwrcase
  }

  var cat_pwd = pwd.join('');
  return cat_pwd

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
