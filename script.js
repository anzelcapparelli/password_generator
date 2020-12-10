// Assignment Code
var generateBtn = document.querySelector("#generate");

var lwrcase = "abcdefghijklmnopqrstuvwxyz";

var pwd_lngth = 0
var pwd = [];


function writePassword() {
  pwd_lngth = parseInt(prompt("Please choose a password character length"));
  while (pwd_lngth < 8 || pwd_lngth > 128) {
    alert("Password must be no less than 8 characters and no more than 128 characters")
    pwd_lngth = parseInt(prompt("Pleased choose a password character length within the accepted range"));
    return pwd_lngth
  }

  function generatePassword() {
for (let i = 0; i < pwd_lngth; i++) {
  pwd.push(lwrcase[Math.floor(Math.random() * 26)]);
}
    //gens what will be the password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);